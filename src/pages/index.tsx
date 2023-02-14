import { Login } from '@/components/Login';
import { AuthContext } from '@/context/AuthContext';
import { useContext } from 'react';

export default function Home() {
  const { user } = useContext(AuthContext);
  return <>{user.length ? 'usuário logado' : <Login />}</>;
}
