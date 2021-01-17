import { useContext } from 'react';
import NpbContext from './NpbContext';

const useNpb = () => {
  return useContext(NpbContext);
};

export default useNpb;
