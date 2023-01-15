import React from 'react'
import axios from 'axios';
import { useContext, useRef } from 'react';
import { Context } from '../context/Context';
import { Link } from 'react-router-dom'

function Login() {
    const userRef = useRef();
    const passwordRef = useRef();
    const {user,dispatch, isFetching } = useContext(Context);

    const handleSubmit = async (e) => {

        console.log("called");
        e.preventDefault();
        dispatch({type: "LOGIN_START"});
    
        try {
    
          const res = await axios.post("http://localhost:8000/api/auth/login", {
            username: userRef.current.value,
            password: passwordRef.current.value,
          })
          dispatch({type: "LOGIN_SUCCESS",payload: res.data});     
          // console.log(res.data);
          
          
        } catch (error) {      
          dispatch({type: "LOGIN_FAILURE"});
          console.log(error);
        }
        
        console.log(user.others);
        
      }
      


    return (
        <>
            <div className="container my-5" style={{"width": "600px", "paddingTop": "10px"}}>
                
            <div className="heading" style={{"fontSize": "40px", "textAlign": "center"}}>Login</div>

                <form onSubmit={handleSubmit}>
                    <div class="mb-4 my-5">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" />
                    </div>
                   
                    <p>For New Register <Link to={"/register"} >Click Here !</Link> </p>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </>
    )
}

export default Login