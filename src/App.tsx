import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import AppRoute from './components/AppRoute'
import firebase from 'firebase'
import 'firebase/firestore'
import 'firebase/auth'
import {useDispatch} from 'react-redux'
import {useAuthState} from 'react-firebase-hooks/auth'
import setSettings from './actions/auth'
import Loader from './components/Loader'

function App() {

  const dispatch = useDispatch()

  const firebaseConfig = {
    apiKey: "AIzaSyBcDpH1_WguVLk_oZhBKrlAklfAhIZFJw8",
    authDomain: "react-chat-3aa45.firebaseapp.com",
    projectId: "react-chat-3aa45",
    storageBucket: "react-chat-3aa45.appspot.com",
    messagingSenderId: "425929769298",
    appId: "1:425929769298:web:32266aecab477f35117a8b",
    measurementId: "G-0FPLDL1KWB"
  }
    
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
    
  const auth = firebase.auth()
  const firestore = firebase.firestore()
  
  dispatch(setSettings({auth, firestore}))

  const [ user, loading, error ] = useAuthState(auth)

  if (loading) {
    return <Loader />
  }

  return (
    <>
      <Navbar />
      <AppRoute />
    </>
  );
}

export default App;
