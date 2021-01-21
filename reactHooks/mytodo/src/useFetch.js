import { useState, useEffect } from 'react';

const useFetch = (callback) => {
  const [loading, setLoading] = useState(false);

  const fetchInintialData = async () => {
    setLoading(true);
    const initialData = await [
      { title: '공부하기', id: 1233, status: 'todo' },
      { title: '스터디준비', id: 1234, status: 'todo' },
      { title: '알고리즘공부', id: 1230, status: 'todo' },
      { title: '컴퓨터게임', id: 1231, status: 'todo' },
    ];
    callback(initialData);
    setLoading(false);
  };

  useEffect(() => {
    fetchInintialData();
  }, []);

  return loading;
};

export default useFetch;
