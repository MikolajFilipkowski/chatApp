import { useState } from 'react';
import LoggedIn from './UI/LoggedIn';
import LoginPanel from './UI/LoginPanel';

export default function App() {
  const [loginStatus, setLoginStatus] = useState(false)

  return (
    loginStatus ? <LoggedIn /> : <LoginPanel loginStatus={loginStatus} setLoginStatus={setLoginStatus}/>
  );
}