import React, { useState, useEffect } from 'react';
import styles from './Console.module.css';

export const Console = ({ codeEditor }) => {
  const [runPending, setRunPending] = useState(false);
  const [execResult, setExecResult] = useState([]);
  const [testsPassed, setTestsPassed] = useState(0);

  useEffect(() => {
    if (codeEditor) {
      setRunPending(codeEditor.runPending);
      setExecResult(codeEditor.execResult || []);
      setTestsPassed(codeEditor.testsPassed || 0);
    }
  }, [codeEditor]);

  return (
    <div className={styles.consoleWrap}>
      <div className={styles.console}>
        {runPending ? (
          <div>Executing...</div>
        ) : (
          <>
            {execResult.length > 0 && (
              <div>
                Passed: {testsPassed} out of {execResult.length} tests
              </div>
            )}
            {execResult.map((result, index) => (
              <div key={index} className={result.ok ? styles.execOk : styles.execError}>
                <div>Input Data: {result.testInput}</div>
                <div>Expected Output: {result.testOutput}</div>
                <div>Program Output: {result.output}</div>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};
