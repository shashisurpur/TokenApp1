import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, Redirect } from 'react-router-dom'
import { signin } from '../../Store/Actions/authActions'
import './Signin.css'


const LoginForm = () => {

    const [email, setEmail] = useState('');
    const [password,setPassword] =useState('')
    const dispatch= useDispatch()
    const auth= useSelector(state=>state.auth)

    const userLogin = (e) => {
        e.preventDefault();
        const user={email,password}
       
        dispatch(signin(user))
    }
    
    if(auth.authenticated){
		return <Redirect to={`/`} />
	}

    return (
        <div className="signinForm">	
            <form  onSubmit={userLogin}>
                <h2>Sign In</h2>
                
                <div className="form-group formGroup">
                    <div className="input-group">
                        <span className="input-group-addon">
                            <i className="fa fa-user"></i>
                        </span>
                        <input 
                            type="text" 
                            className="form-control" 
                            name="username" 
                            placeholder="Username"
                            
                            required="required" 
                        />
                    </div>
                </div> 

                <div className="form-group formGroup">
                    <div className="input-group">
                        <span className="input-group-addon">
                            <i className="fa fa-paper-plane"></i>
                        </span>
                        <input 
                            type="email" 
                            className="form-control" 
                            name="email" 
                            placeholder="Email Address"
                            value={email}
                            onChange={e =>setEmail(e.target.value)} 
                            required="required" 
                        />
                    </div>
                </div>

                <div className="form-group formGroup">
                    <div className="input-group">
                        <span className="input-group-addon">
                            <i className="fa fa-lock"></i>
                        </span>
                        <input 
                            type="password" 
                            className="form-control" 
                            name="password"
                            value={password} 
                            placeholder="Password" 
                            onChange={e=>setPassword(e.target.value) }
                            required="required" 
                        />
                    </div>
                </div>

                {/* <div className="form-group">
                    <div className="input-group">
                        <span className="input-group-addon">
                            <i className="fa fa-lock"></i>
                            <i className="fa fa-check"></i>
                        </span>
                        <input type="text" className="form-control" name="confirm_password" placeholder="Confirm Password" required="required" />
                    </div>
                </div>    */}

                <div className="form-group text-center formGroup">
                    <div className="d-grid gap-2 col-6 mx-auto">
                        <button 
                            type="submit" 
                            className="btn btn-primary  btn-block "
                        >Sign In</button>
                    </div>
                </div>
                <p className="small text-center ">
                    By clicking the Sign Up button, you agree to our <br/>
                    <Link  to='/'>Terms &amp; Conditions</Link>, and <Link to='/'>Privacy Policy</Link>
                </p>
            </form>
            <div className="text-center">
                Does't have an account? 
                <Link to='/signup'>Create here</Link>
            </div>
        </div>
    
    )
}

export default LoginForm
