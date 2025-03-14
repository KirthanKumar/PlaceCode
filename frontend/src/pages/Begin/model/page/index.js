import { useState, useEffect } from 'react';

export const useBeginPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isFail, setIsFail] = useState(false);
  const [workId, setWorkId] = useState(null);

  const open = (id) => {
    setWorkId(id);
    setIsLoading(true);

    Promise.all([fetchTasks(), fetchLangs()])
      .then(() => setIsLoading(false))
      .catch(() => {
        setIsFail(true);
        setIsLoading(false);
      });
  };

  const close = () => {
    setWorkId(null);
    setIsFail(false);
  };

  const onMount = (id) => {
    open(id);
    return () => close();
  };

  const fetchTasks = async () => {
    try {
      // Simulating API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
    } catch {
      throw new Error('Fetching tasks failed');
    }
  };

  const fetchLangs = async () => {
    try {
      // Simulating API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
    } catch {
      throw new Error('Fetching languages failed');
    }
  };

  return {
    open,
    close,
    onMount,
    status: { isLoading, isFail },
  };
};
