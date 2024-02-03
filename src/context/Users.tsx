import { createContext, useState, useEffect, ReactNode, ReactElement } from 'react';
import { generateFakeUsers } from '../utils/users';
import { IUser } from '../interfaces/User';

interface IUsersContext {
  users: IUser[];
  setUsers: React.Dispatch<React.SetStateAction<IUser[]>>;
}

interface IUsersProvider {
  children: ReactNode | ReactElement;
}

const initialValue: IUsersContext = {
  users: [],
  setUsers: () => {},
};

const UsersContext = createContext<IUsersContext>(initialValue);

const UsersProvider: React.FC<IUsersProvider> = ({ children }) => {
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    setUsers(generateFakeUsers(9));
  }, []);

  return (
    <UsersContext.Provider value={{ users, setUsers }}>
      {children}
    </UsersContext.Provider>
  );
};

export { UsersContext, UsersProvider };
