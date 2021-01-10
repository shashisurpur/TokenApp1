
import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom'
import SignUp from './auth/registerForm/SignUp'
import Home from './Pages/Home'
import LoginForm from './auth/loginForm/LoginForm'
import { Layout } from './components/Layout/Layout'
import PrivateRoute from './components/PrivateRoute'
import './App.css'
import Dashboard from './Pages/Dashboard'
import { useDispatch, useSelector } from 'react-redux'
import { isLoggedInUser } from './Store/Actions/authActions'
import Footer from './components/Footer/Footer'
import ClientsDetails from './Pages/ClientsDetails'
import MarkerDetails from './components/Map/Marker/MarkerDetails'
import ContactUs from './Pages/ContactUs'



function App() {
    const auth = useSelector(state => state.auth);
    const dispatch =useDispatch()
    
    useEffect(() =>{
        if (!auth.authenticated) {
            dispatch(isLoggedInUser())
        }
       
    },[])
   
    return (
        <>          
         <Router>
        
          {/* <Header />  */} 
         {/* <Navbar/> */}
           <Layout>
            <Switch >
                <PrivateRoute path="/" exact component={Dashboard} />
                <Route path='/home' exact component={Home} />
                <Route path='/home/:id' exact component={MarkerDetails} />
                <Route path='/signup' exact component={SignUp} />
                <Route path='/signin'exact component={LoginForm} />
                <Route path='/markerDetail'exact component={ClientsDetails} />
                <Route path='/contactUs' exact component={ContactUs} />
            </Switch>
            </Layout>
            <Footer />
       </Router>
      
    </>      
    )
}

export default App
