import React from 'react';
import { useStoreMap } from 'effector-react';
import { addForm } from '@pages/Tasks/model/addTask';
import { Input } from '@components/Inputs';

export const TestOutput = ({ id }) => {
  const value = useStoreMap({
    store: addForm.$tests,
    keys: [id],
    fn: (tests, [id]) => tests.find((test) => test.id === id)?.output || '',
  });

  return (
    <Input
      value={value}
      onChange={(e) => addForm.outputChange({ id, value: e.target.value })}
      label="Example of output data"
      multiline
    />
  );
};
