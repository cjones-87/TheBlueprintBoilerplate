import { useContext } from 'react';
import { UserContext } from '../context/UserProvider';

const useUser = () => {
  try {
    const user = useContext(UserContext);

    return user;
  } catch (error) {
    console.log('error in useUser');
  }
};

export default useUser;
