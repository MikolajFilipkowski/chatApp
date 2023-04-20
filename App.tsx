import React, { Component, useState, useEffect } from 'react';
import LoggedIn from './UI/LoggedIn';
import LoginPanel from './UI/LoginPanel';
import { auth } from './firebase';

export default function App() {

  const [loginStatus, setLoginStatus] = useState(false)

  auth.onAuthStateChanged(function(user) {
    if (user) {
      setLoginStatus(true)
      console.log(user)
    } else {
      setLoginStatus(false)
    }
  });

  return (
    loginStatus ? <LoggedIn /> : <LoginPanel/>
  );
}