import { Login } from '@/components/Login';
import { Logout } from '@/components/Logout';
import { AuthContext } from '@/context/AuthContext';
import { useContext } from 'react';

export default function Home() {
  const { user } = useContext(AuthContext);
  return <>{user.length ? <Logout /> : <Login />}</>;
}
