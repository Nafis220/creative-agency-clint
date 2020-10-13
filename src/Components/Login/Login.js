import React, { useContext } from 'react';
import './Login.css'
import icon from '../../images/logos/logo.png'
import { orderContext, userContext } from '../../App';
import { Link, useHistory, useLocation } from 'react-router-dom';
import firebaseConfig from './firebase.config';
import * as firebase from "firebase/app";
import "firebase/auth";
const Login = () => {

    const [loggedInUser,setLoggedInUser] = useContext(userContext)
    // const [order,setOrder] = useContext(orderContext)

   

    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    
    if(firebase.apps.length === 0){
        firebase.initializeApp(firebaseConfig)
      } 
      
      const HandleGoogleSignUp = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
        .then(result => {

            const  {displayName,email} = result.user;
            const signedInUser = {displayName,email}
           setLoggedInUser(signedInUser)
           
           storeAuthTocken()
           history.replace(from);
          }).catch(function(error) {
           
            var errorCode = error.code;
            var errorMessage = error.message;
        
            var email = error.email;
          
            var credential = error.credential;
            ;
            
           
          });
     }


     const storeAuthTocken = () => {
        firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
        .then(function(idToken) {
          sessionStorage.setItem('token', idToken);
          // Send token to your backend via HTTPS
          // ...
        }).catch(function(error) {
          // Handle error
        });
       }

    return (
        <div>
            <div>
           
            
            <div className="login-page">
            <img className="w-100 mx-auto d-block p-5" src={icon} alt=""/>
            <div className="form">
            <h2 className="p-4">Login With</h2>
            <button onClick={HandleGoogleSignUp}>  <img className="p-2" style={{width: '15%'}} src="https://img.icons8.com/cute-clipart/64/000000/google-logo.png"/>Continue With Google</button>
            <form className="login-form">
            <p className="message">Didn't select your work ? <Link to='/'> <button className=" btn-info">Select From Here</button></Link></p>
     </form>
  </div>
  
</div>

           
        </div>
        </div>
    );
};

export default Login;