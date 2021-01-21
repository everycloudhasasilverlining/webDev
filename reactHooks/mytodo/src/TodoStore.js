import React, { useEffect, useReducer } from 'react';
import useFetch from './useFetch';
import { todoReducer } from './todoReducer';

export const TodoContext = React.createContext();

const TodoStore = (props) => {
  const [todos, dispatch] = useReducer(todoReducer, []);

  const setInitData = (initData) => {
    dispatch({ type: 'SET_INIT_DATA', payload: initData });
  };

  const loading = useFetch(setInitData);

  useEffect(() => {
    console.log('New Content Rendered', todos);
  }, [todos]);

  return (
    <TodoContext.Provider value={{ todos, loading, dispatch }}>
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoStore;
