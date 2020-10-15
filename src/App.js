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
import Review from './Components/Review/Review';
import AdminService from './Components/AdminService/AdminService';
import AddServices from './Components/addServices/addServices';
import AddAdmin from './Components/addAdmin/addAdmin';
export  const userContext = createContext();
export const orderContext = createContext()


function App() {
  const [isAdmin, setIsAdmin] = useState(false)
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
           <Route path='/review'>
             <Review/>
           </Route>
           <Route path='/adminService'>
             <AdminService/>
           </Route>
           <Route path='/addServices'>
             <AddServices/>
           </Route>
           <Route path='/addAdmin'>
             <AddAdmin/>
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
