import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

/**
* @author
* @function PrivateRoute
**/

const PrivateRoute = ({component: Component, ...rest}) => {
  const auth = useSelector(state=>state.auth)
   
  return(
    <Route {...rest} component={(props) => {
        
        
        if(auth.email==='admin@gmail.com'){
          return <Component {...props} />
        }
        else{
            return <Redirect to={`/home`} />
        }

    }} />
   )

 }

export default  PrivateRoute