import React from 'react';
import { useStoreMap } from 'effector-react';
import { addForm } from '@pages/Tasks/model/addTask';
import { Input } from '@components/Inputs';

export const TestInput = ({ id }) => {
  const value = useStoreMap({
    store: addForm.$tests,
    keys: [id],
    fn: (tests, [testId]) => tests.find((test) => test.id === testId)?.input || '',
  });

  return (
    <Input
      value={value}
      onChange={(e) => addForm.inputChange({ id, value: e.target.value })}
      label='Пример входных данных'
      multiline
    />
  );
};
