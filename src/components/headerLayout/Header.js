import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'
import { logout } from '../../Store/Actions/authActions'
import './style.css'



const Header = () => {
  const auth = useSelector(state => state.auth)
  const dispatch = useDispatch();
  const user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;

  //console.log("user name",auth.firstName)

  const logOutButton=() =>{
   console.log("logout")
    dispatch(logout(auth.uid))
    localStorage.clear();
  }
  return (
    <nav className="navbar sticky-top navbar-expand-md navbar-dark bg-dark">
     <div className="container-fluid"> 
      <Link className="navbar-brand" to="/">Navbar</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      { !user ? 
        <div className="collapse navbar-collapse justify-content-md-center" id="navbarSupportedContent">
          <div className="navbar-nav">
            <NavLink className="nav-link" activeClassName="active" exact to='/signin'>sign in</NavLink>
            <NavLink className="nav-link" activeClassName="active" exact to='/signup'>Sign Up</NavLink>
          </div>
        </div> : null
      }

      {
        user ?
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="navbar-nav me-auto mr-4 mb-2 mb-lg-0">
            
              <NavLink className="nav-link" activeClassName="active" exact to='/home'>Home</NavLink>
            
          
              <NavLink className="nav-link" activeClassName="active" exact to='/markerDetail'>client Details</NavLink>
          
            <NavLink className="nav-link" activeClassName="active" exact to='/contactUs'>contact us</NavLink>
            
          </div>
          <div className="d-flex dropdown">
              <b className="navbar-brand dropdown-toggle"  id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <i className="fa fw fa-user fa-1x"></i>
              </b>
              <div className="dropdown-menu dropdown-menu-start dropdown-menu-dark" aria-labelledby="navbarDropdown">
                <div className="card">
                  
                  <li>{auth.firstName} {auth.lastName}</li>
                  <hr/>

                  <button className="btn btn-sm btn-danger text-uppercase" onClick={logOutButton } >logout</button>
                </div>
              </div>
          </div>
        </div> : null
      }
    </div>
  </nav>

  )
}

export default Header
