import '../../src/App.css'
import React from 'react'
import { Link, Route } from 'react-router-dom'

function Login (){
    return(
        <div>
            <form>
                
                <label> Username:
                    <input className='register-input' type='text'></input>
                </label>

                <label> Password:
                    <input className='register-input' type='password'></input>
                </label>

                <button className='form-buttons'>submit</button>
            </form>

            <Link to='/'>Cancel</Link>
            <Link to='/'>
                <h6 style={{ fontSize: '7px'}}>
                    Don't have an account? <p style={{fontWeight: 'bold'}}>Register</p> </h6> 
            </Link>
        </div>
    )}

export default Login