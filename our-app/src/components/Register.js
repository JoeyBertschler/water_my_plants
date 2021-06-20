import React from 'react';
import { Link, Route } from 'react-router-dom';
import '../../src/App.css'

function Register () {
    return(
        <div>

            <form>
                
                <label> Username:
                    <input className='register-input' type='text'></input>
                </label>

                <label> Phone Number:
                    <input className='register-input' type='text'></input>
                </label>

                <label> Password:
                    <input className='register-input' type='password'></input>
                </label>

                <button className='form-buttons'>submit</button>
            </form>

            
            {/* <Link to='/'><button className='form-buttons'>Cancel</button></Link> */}
            <Link to='/'>Cancel</Link>
            {/* Feel free to switch back to a button Matt, I just thought this is a little more standard */}
            <Link to='/'>
                <h6 style={{ fontSize: '7px'}}>
                    Already have an account? <p style={{fontWeight: 'bold'}}>Login</p> </h6> 
            </Link>
        </div>
    )}

export default Register