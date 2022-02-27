import React,{useState} from "react";
import "./style.css";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword  } from "firebase/auth";



export default function App() {
  const firebaseConfig = {
    apiKey: "AIzaSyCHgNODTbPXV0Z6Wd9VyYiiVpMoApXq7Y0",
    authDomain: "sample1-9a82d.firebaseapp.com",
    projectId: "sample1-9a82d",
    storageBucket: "sample1-9a82d.appspot.com",
    messagingSenderId: "1036060805024",
    appId: "1:1036060805024:web:036f0b1c1d7ee4b8d746c5",
    measurementId: "G-R1BMY9KRM5"
  }
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  const [ state, setState] = useState(false)

  const emailSU = React.createRef(null)
  const passwordSU = React.createRef(null)
  
  const emailSI = React.createRef(null)
  const passwordSI = React.createRef(null)

  

  function handleSignup(){
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, emailSU.current.value, passwordSU.current.value)
    .then((userCredential) => {
    const user = userCredential.user;
    setState(false)
    alert('signup successfull')
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage)
    setState(false)
    alert('signup failed')
  });
  }

  function handleSignin(){
    const auth = getAuth();
    signInWithEmailAndPassword (auth, emailSI.current.value, passwordSI.current.value)
    .then((userCredential)=>{
      const user = userCredential.user;
      alert('Signin Complete')
    })
    .catch((error)=>{
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage)
      alert('Signin failed')
    })
  }
  return (
    <>{
       state ? "Loading" :
    
    <div>
      Signup form<br/>
      <input type='text' placeholder = 'enter email' ref={emailSU}/>
      <input type='text' placeholder = 'crete password' ref={passwordSU}/>
      <button onClick={handleSignup}>Sign up</button>
      <br/>
      <br/>
      <br/>
      Signin form
      <br/>
      <input type='text' placeholder='Enter username' ref={emailSI}/>
      <input type='text' placeholder='Enter password' ref={passwordSI}/>
      <button onClick={handleSignin}>Sign in</button>
    </div>
}
    </>
  );
}
