
import { AuthContext } from '../componets/Context/AuthProvider';
import { useContext } from 'react';

const UseAuth = () => {
   return useContext(AuthContext)
};

export default UseAuth;