import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat';
import { selectUser } from './features/userSlice';
import Login from './Login';
import { auth } from './firebase';
import { login, logout } from './features/userSlice';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("user is", authUser)
      if (authUser) {
        // The user is logged in 
        dispatch(login({
          uid: authUser.uid,
          photo: authUser.photoURL,
          email: authUser.email,
          displayName: authUser.displayName
        }))
      } else {
        // The user is logged out
        dispatch(logout());
      }
    })
  }, [dispatch])

  const user = useSelector(selectUser);
  return (
    <div className="app">
      {user ? (
        <>
          <Sidebar />
          <Chat />
        </>
      ) : (
          <Login />
        )}


    </div>
  );
}

export default App;
