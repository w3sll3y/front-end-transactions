import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useState();

  async function getUserData() {
    const EmailByToken = localStorage.getItem('token');
    const email = JSON.parse(EmailByToken).email;
    try {
      const response = await axios.post('http://localhost:3000/user',
        JSON.stringify({ email }),
        {
          headers: {
            'Content-Type': 'application/json',
            'access-token': JSON.parse(EmailByToken).token
          }
        }
      );
      if (response?.status === 200) {
        await setUser(response?.data?.[0]);
        return
      }
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getUserData();
  }, [])

  return (
    <AuthContext.Provider value={{ user, signed: !!user }}>{children}</AuthContext.Provider>
  );
}