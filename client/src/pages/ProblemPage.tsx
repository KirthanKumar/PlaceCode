import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import ProblemNavbar from "../components/ProblemNavbar";
import ProblemDescription from "../components/ProblemDescription";
import ReactCodeMirror from "@uiw/react-codemirror";
import { loadLanguage } from "@uiw/codemirror-extensions-langs";
import { tokyoNight } from "@uiw/codemirror-theme-tokyo-night";
import { API_URL } from "../App";
import Loading from "../components/Loading";
import MainHeading from "../components/MainHeading";

const ProblemPage = ({
    data,
    token,
    id,
}: {
    data?: ProblemPageData;
    token: string | null;
    id: string | null;
}) => {
    const [keystrokeIntervals, setKeystrokeIntervals] = useState<number[]>([]);
    const [lastKeyTime, setLastKeyTime] = useState<number>(0);
    const [code, setCode] = useState<string>("");

    const [problemDescriptionData, setProblemDescriptionData] = useState<DescriptionData>();
    const navigate = useNavigate();
    const { name } = useParams();

    // Automated typing detection logic
    const detectAutomatedTyping = () => {
        if (keystrokeIntervals.length < 5) return;
        const mean = keystrokeIntervals.reduce((a, b) => a + b, 0) / keystrokeIntervals.length;
        const variance =
            keystrokeIntervals.reduce((a, b) => a + Math.pow(b - mean, 2), 0) / keystrokeIntervals.length;
        // Adjust this threshold if needed
        if (variance < 20) {
            alert("Automated typing detected. Ending test.");
            navigate("/sorry");
        }
    };

    // Handle keydown events for typing detection
    const handleKeyDown = (e: KeyboardEvent) => {
        const currentTime = Date.now();
        if (lastKeyTime) {
            setKeystrokeIntervals((prev) => [...prev, currentTime - lastKeyTime]);
        }
        setLastKeyTime(currentTime);
        detectAutomatedTyping();
    };

    // Detect tab switching
    const handleVisibilityChange = () => {
        if (document.hidden) {
            alert("Tab switched. Ending test.");
            navigate("/sorry");
        }
    };

    useEffect(() => {
        // Add keydown event listener to detect keystrokes
        document.addEventListener("keydown", handleKeyDown);

        // Add visibilitychange event listener to detect tab switching
        document.addEventListener("visibilitychange", handleVisibilityChange);

        // Cleanup event listeners when the component is unmounted
        return () => {
            document.removeEventListener("keydown", handleKeyDown);
            document.removeEventListener("visibilitychange", handleVisibilityChange);
        };
    }, [lastKeyTime, keystrokeIntervals]);

    useEffect(() => {
        // Fetch problem data and initialize code
        axios
            .post(`${API_URL}/api/problem/${name}`, { id })
            .then(({ data }) => {
                setProblemDescriptionData(data.main);
                if (data.main.code_body?.javascript) {
                    setCode(data.main.code_body.javascript);
                }
            })
            .catch(console.error);
    }, [id, name]);

    return (
        <>
            <MainHeading
                data={{
                    items: [{ text: "Problem List", link_path: "/problemset" }],
                    username: "user", // Or fetch from API if needed
                }}
            />
            <div className="h-[calc(100vh-60px)] overflow-hidden bg-black">
                <div className="relative flex flex-row h-full w-full mt-2">
                    <div
                        id="explanation"
                        className="h-full bg-black border ml-2 rounded-lg w-1/2 overflow-hidden"
                    >
                        <ProblemNavbar
                            data={{ problem_name: name ?? "Unknown Problem", nav_option_name: "description" }}
                        />
                        <div className="description-body relative w-full h-[calc(100%-50px)] overflow-y-auto bg-black">
                            {problemDescriptionData ? (
                                <ProblemDescription data={problemDescriptionData} />
                            ) : (
                                <Loading For="pDescription" />
                            )}
                        </div>
                    </div>

                    <div className="flex flex-col h-full w-1/2">
                        <ReactCodeMirror
                            value={code}
                            extensions={[loadLanguage("javascript")!]}
                            theme={tokyoNight}
                            onChange={(value) => setCode(value)}
                            width="100%"
                            height="100%"
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProblemPage;
