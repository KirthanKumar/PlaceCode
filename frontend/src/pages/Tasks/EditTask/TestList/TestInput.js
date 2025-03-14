import React from 'react';
import { useStoreMap } from 'effector-react';
import { Input } from '@components/Inputs';
import { tests } from '@pages/Tasks/model/editTask';

export const TestInput = React.memo(({ id }) => {
  const value = useStoreMap({
    store: tests.$tests,
    keys: [id],
    fn: (tests, [id]) => tests.find((test) => test.id === id)?.input || '',
  });

  return (
    <Input
      value={value}
      onChange={(e) => tests.inputChange({ id, value: e.target.value })}
      label="Пример входных данных"
      multiline
    />
  );
});
