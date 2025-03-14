import React, { useState } from "react";
import { Card, Divider } from "../../../components";
import { PrimaryButton as Button } from "../../../components/Buttons";
import { TabControl } from "./TabControl";
import { LangSelect } from "./LangSelect";
import { Editor } from "./Editor";
import { Console } from "./Console";
import styles from "./CodeEditor.module.css";

export const CodeEditor = () => {
  const [tab, setTab] = useState("editor"); // "editor" or "console"
  const [runPending, setRunPending] = useState(false);
  const [canRun, setCanRun] = useState(true);

  const editorSelected = tab === "editor";

  const handleRun = () => {
    setRunPending(true);
    // Simulate testing task
    setTimeout(() => {
      setRunPending(false);
    }, 2000);
  };

  return (
    <Card className={styles.codeEditor}>
      <TabControl disabled={runPending} setTab={setTab} />
      <Divider />

      {editorSelected ? <Editor /> : <Console />}

      <Divider />
      <div className={styles.editorControl}>
        <Button disabled={runPending || !canRun} onClick={handleRun}>
          Run
        </Button>
        <LangSelect disabled={runPending} />
      </div>
    </Card>
  );
};
