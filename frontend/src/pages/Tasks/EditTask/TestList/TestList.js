import React from "react";
import { useList } from "effector-react";
import { DeleteButton as Delete } from "@components/Buttons";
import { tests } from "@pages/Tasks/model/editTask";
import { TestInput } from "./TestInput";
import { TestOutput } from "./TestOutput";
import styles from "./TestList.module.css";

export const TestList = () => {
  const list = useList(tests.$tests, (test) => (
    <React.Fragment key={test.id}>
      <TestInput id={test.id} />
      <TestOutput id={test.id} />
      <Remove id={test.id} old={test.old} />
    </React.Fragment>
  ));

  return <div className={styles.tests}>{list}</div>;
};

const Remove = React.memo(({ id, old }) => (
  <Delete onClick={() => tests.removeTest({ id, old })} />
));
