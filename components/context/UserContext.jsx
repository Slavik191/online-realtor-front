import { createContext, useState } from "react";

import { toCabinet } from "../../utils/routesUtil";

export const Context = createContext(null);

const getRole = (email) => {
  if(email === "admin@mail.ru")  {
    return "admin";
  }

  return "realtor"
}

const UserContext = ({ children }) => {
  const [user, setUser] = useState(null);

  const signIn = (user) => {
    const role = getRole(user.userName)
    setUser({
      email: user.userName,
      token: user.access_token,
      tokenType: user.token_type,
      role
    });
    toCabinet(role);
  }

  const signUp = (user) => {
    setUser(null)
  }

  return (
    <Context.Provider 
      value={
        { 
          user, 
          signIn,
          signUp
        }
      }
    >
      {children}
    </Context.Provider>
  )
}

export default UserContext;