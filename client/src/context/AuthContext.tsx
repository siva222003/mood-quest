import { api } from "@/axios";
import { User } from "@/types";
import { AxiosError } from "axios";
import { createContext, useContext, useEffect, useState } from "react";

interface AuthContextType {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  loading: boolean;
  login: boolean;
  setLogin: React.Dispatch<React.SetStateAction<boolean>>;
  register: boolean;
  setRegister: React.Dispatch<React.SetStateAction<boolean>>;
  error?: string | null;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  setUser: () => {},
  loading: true,
  login: false,
  setLogin: () => {},
  register: false,
  setRegister: () => {},
  error: null,
});

const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [login, setLogin] = useState(false);
  const [register, setRegister] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await api.get("/user");
        setUser(response.data.data);
      } catch (error: any) {
        if (error instanceof AxiosError) {
          if (error.response) {
            setError(error.response.data.message);
          } else {
            setError(error.message);

            return;
          }

          setError("An error occurred");
        }
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, setUser, login, setLogin, register, setRegister, loading, error }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, useAuth };
