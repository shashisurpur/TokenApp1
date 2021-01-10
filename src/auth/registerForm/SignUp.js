import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Redirect } from 'react-router-dom'
import {signUp} from '../../Store/Actions/authActions'
//import {use} from 'bootstrap-icons/icons'

import './Login.css'

const initialValues={
    firstName:'',
    lastName:'',
    email:'',
	password:'',
	confirm_password:''
  }

const SignUp = () => {

	const [inputValues,setInputValues] = useState(initialValues);
	const dispatch = useDispatch();
	const auth= useSelector(state=>state.auth)

	const handleOnChange =e=>{
		const {name,value}=e.target
		setInputValues({
		  ...inputValues,
		  [name]:value
		})
	}
	const handleOnFormSubmit = (e) =>{
		e.preventDefault()
	   if(inputValues.password === inputValues.confirm_password){
			dispatch(signUp(inputValues) )
	   }
	   else{
		   console.log("Please confirm correct password")
	   }
		
		
	}

	if(auth.authenticated){
		return <Redirect to={`/`} />
	  }

  return (
    <div className="signUpForm">	
    <form onSubmit={handleOnFormSubmit} >
		<h2>Create Account</h2>
		<p className="lead">It's free and hardly takes more than 30 seconds.</p>

        <div className="form-group formGroup">
			<div className="input-group">
				<span className="input-group-addon">
					<i className="fa fa-user"></i>
				</span>
				<input type="text" 
					className="form-control" 
					name="firstName" 
					placeholder="User first name"
					value={inputValues.firstName} 
					onChange={handleOnChange}
					required="required" 
				/>
			</div>
        </div>

		<div className="form-group formGroup">
			<div className="input-group">
				<span className="input-group-addon">
					<i className="fa fa-user"></i>
				</span>
				<input type="text" 
					className="form-control" 
					name="lastName" 
					placeholder="User last name"
					value={inputValues.lastName} 
					onChange={handleOnChange}
					required="required" 
				/>
			</div>
        </div>

        <div className="form-group formGroup">
			<div className="input-group">
				<span className="input-group-addon">
					<i className="fa fa-paper-plane"></i>
				</span>
				<input type="email" 
					className="form-control" 
					name="email" 
					value={inputValues.email}
					onChange={handleOnChange}
					placeholder="Email Address" 
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
					type="text" 
					className="form-control" 
					name="password" 
					placeholder="Password" 
					required="required" 
					value={inputValues.password} 
					onChange={handleOnChange}
				/>
			</div>
        </div>
		<div className="form-group formGroup">
			<div className="input-group">
				<span className="input-group-addon">
					<i className="fa fa-lock"></i>
					<i className="fa fa-check"></i>
				</span>
				<input 
					type="text" 
					className="form-control" 
					name="confirm_password" 
					placeholder="Confirm Password" 
					value={inputValues.confirm_password} 
					onChange={handleOnChange}
					required="required" 
				/>
			</div>
        </div>        
		<div className="form-group formGroup">
			<div className="d-grid gap-2 col-6 mx-auto">
				<button type="submit" className="btn btn-primary btn-block btn-lg">
					Sign Up
				</button>
			</div>
        </div>
		<p className="small text-center">
			By clicking the Sign Up button, you agree to our <br/>
			<Link to='/'>Terms &amp; Conditions</Link>, and 
			<Link to="/">Privacy Policy</Link>.
		</p>
    </form>
	<div className="text-center">
		Already have an account? 
		<Link to='/signin'>Login here</Link>
	</div>
</div>
  )
}

export default SignUp
