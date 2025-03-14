import React, { useContext } from "react";
import { Divider } from "@components";
import { WorkspaceContext } from "@pages/Begin/model/WorkspaceContext";
import styles from "./TestList.module.css";

export const TestList = () => {
  const { selectedTaskInfo } = useContext(WorkspaceContext);

  return (
    <>
      <h3>Example Input and Output Data</h3>
      <div className={styles.list}>
        {selectedTaskInfo?.tests?.map((test, index, arr) => {
          const isLast = index === arr.length - 1;
          return (
            <div key={test.id} className={styles.test}>
              <div>
                <span>Example Input Data</span>
                <div>{test.input}</div>
              </div>
              <div>
                <span>Example Output Data</span>
                <div>{test.output}</div>
              </div>
              {!isLast && <Divider />}
            </div>
          );
        })}
      </div>
    </>
  );
};
