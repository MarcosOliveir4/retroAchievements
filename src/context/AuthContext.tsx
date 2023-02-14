import { SafeAny } from '@/utils/safeAny';
import { useState, createContext, useEffect } from 'react';

interface AuthContextInterface {
  user: string;
  login: (user: string) => void;
  logout: () => void;
}
let authContextInterface!: AuthContextInterface;
export const AuthContext =
  createContext<AuthContextInterface>(authContextInterface);

export const AuthProvider = (props: SafeAny) => {
  const [user, setUser] = useState<string>('');
  const keyUsuarioRetroLocalstorage = 'usuarioRetro';

  useEffect(() => {
    const usuarioRetroLocalstorage = localStorage.getItem(
      keyUsuarioRetroLocalstorage
    );
    setUser(usuarioRetroLocalstorage || '');
  }, []);

  const login = (usuario: string) => {
    if (!user.length) {
      setUser(usuario);
      localStorage.setItem(keyUsuarioRetroLocalstorage, usuario);
    }
  };

  const logout = () => {
    setUser('');
    localStorage.removeItem(keyUsuarioRetroLocalstorage);
  };
  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {props.children}
    </AuthContext.Provider>
  );
};
