import React, { createContext } from 'react';
import PropTypes from 'prop-types';

import { useGetUser } from '../queries/user/user';

export const UserContext = createContext(null);

const UserContextProvider = ({ children }) => {
  const { data } = useGetUser();

  return (
    <UserContext.Provider value={data?.data}>{children}</UserContext.Provider>
  );
};

UserContextProvider.propTypes = {
  children: PropTypes.node
};

export default UserContextProvider;
