import { useState } from "react";
import { Tabs } from "./typings";

export const useWorkspaceStore = () => {
  const [workId, setWorkId] = useState(null);
  const [tasks, setTasks] = useState([]);
  const [selectedTaskId, setSelectedTaskId] = useState(null);
  const [selectedTaskInfo, setSelectedTaskInfo] = useState(null);
  const [langs, setLangs] = useState([]);
  const [selectedLangId, setSelectedLangId] = useState(null);
  const [code, setCode] = useState("");
  const [execResult, setExecResult] = useState([]);
  const [selectedTab, setSelectedTab] = useState(Tabs.Editor);

  return {
    workId,
    setWorkId,
    tasks,
    setTasks,
    selectedTaskId,
    setSelectedTaskId,
    selectedTaskInfo,
    setSelectedTaskInfo,
    langs,
    setLangs,
    selectedLangId,
    setSelectedLangId,
    code,
    setCode,
    execResult,
    setExecResult,
    selectedTab,
    setSelectedTab,
  };
};
