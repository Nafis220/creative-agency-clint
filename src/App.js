import React, { createContext, useState } from 'react';
import './App.css';
import HomePage from './Components/Homepage/HomePage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './Components/Login/Login';
import Order from './Components/Order/Order';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import ServiceList from './Components/ServiceList/ServiceList';
export  const userContext = createContext();
export const orderContext = createContext()


function App() {


  const [loggedInUser,setLoggedInUser] = useState({})
  const [order,setOrder] =useState({})
  return (
    <userContext.Provider value={[loggedInUser,setLoggedInUser]}>
      <orderContext.Provider value={[order,setOrder]}>
     <Router>
       <Switch> 
         <Route path='/home'> 
         <HomePage/>
         </Route>
         <Route path='/login'> 
           <Login/>
           </Route>
           <Route path='/serviceList'>
             <ServiceList/>
           </Route>
         <PrivateRoute path='/order'>
           <Order/>
           </PrivateRoute>
         <Route path='/'>
         <HomePage/>
         </Route>
       </Switch>
     </Router>
     </orderContext.Provider>
     </userContext.Provider>
  );
}

export default App;
