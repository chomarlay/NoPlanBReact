import React, { useReducer } from 'react';
import NpbContext from './npbContext';

const NpbState = (props) => {
  const initialState = { todayList: null, noPlanBList: null };
  const [state, dispatch] = useReducer(initialState);
  return (
    <NpbContext.Provider
      value={{ todayList: state.todayList, noPlanBList: state.noPlanBList }}
    >
      props.children
    </NpbContext.Provider>
  );
};

export default NpbState;
