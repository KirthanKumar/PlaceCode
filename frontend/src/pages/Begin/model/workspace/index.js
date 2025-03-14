import { useState, useEffect } from "react";
import { getLangsFx, getTaskInfoFx, getTasksFx, runFx } from "./effects";
import { Tabs } from "../workspace/typings";
import { useUser } from "@model/auth/hooks"; // Assuming user state is handled via context or hooks

export const useWorkspace = () => {
  const user = useUser(); // Get user from context or global state

  // State variables replacing Effector stores
  const [tasks, setTasks] = useState([]);
  const [selectedTaskId, setSelectedTaskId] = useState(null);
  const [selectedTaskInfo, setSelectedTaskInfo] = useState(null);
  const [langs, setLangs] = useState([]);
  const [selectedLangId, setSelectedLangId] = useState(null);
  const [selectedTab, setSelectedTab] = useState(Tabs.Editor);
  const [code, setCode] = useState("");
  const [execResult, setExecResult] = useState([]);
  const [workId, setWorkId] = useState(null);
  const [runPending, setRunPending] = useState(false);

  // Derived states
  const canRun = code && selectedLangId && workId && selectedTaskId && user?.id;
  const testsPassed = execResult.reduce(
    (sum, result) => sum + Number(result.ok),
    0
  );

  // Fetch tasks and languages on mount (replacing Effector `forward`)
  useEffect(() => {
    const fetchData = async () => {
      const tasksData = await getTasksFx();
      const langsData = await getLangsFx();
      if (tasksData?.length) {
        setTasks(tasksData);
        setSelectedTaskId(tasksData[0].id);
      }
      if (langsData?.length) {
        setLangs(langsData);
        setSelectedLangId(langsData[0].id);
      }
    };
    fetchData();
  }, []);

  // Fetch task info when selectedTaskId changes
  useEffect(() => {
    if (selectedTaskId) {
      getTaskInfoFx(selectedTaskId).then(setSelectedTaskInfo);
    }
  }, [selectedTaskId]);

  // Handlers replacing Effector events
  const langChanged = (langId) => setSelectedLangId(langId);
  const codeChanged = (newCode) => setCode(newCode);
  const taskChanged = (taskId) => setSelectedTaskId(taskId);
  const tabChanged = (tab) => setSelectedTab(tab);

  const testTask = async () => {
    if (canRun) {
      setRunPending(true);
      setSelectedTab(Tabs.Console);
      try {
        const result = await runFx({
          code,
          langId: selectedLangId,
          workId,
          taskId: selectedTaskId,
        });
        setExecResult(result);
      } catch (error) {
        setExecResult([
          { ok: false, runtimeError: false, output: "Server Error" },
        ]);
      }
      setRunPending(false);
    }
  };

  const submitTask = () => {
    console.log("Task submitted with code:", code);
  };

  return {
    tasks,
    selectedTaskId,
    selectedTaskInfo,
    langs,
    selectedLangId,
    selectedTab,
    code,
    execResult,
    workId,
    runPending,
    canRun,
    testsPassed,
    langChanged,
    codeChanged,
    taskChanged,
    tabChanged,
    testTask,
    submitTask,
  };
};
