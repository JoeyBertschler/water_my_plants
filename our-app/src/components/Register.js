import React from 'react';
import { Link, Route } from 'react-router-dom';
import '../../src/App.css'

function Register () {
    return(
        <div>
            <h2>Please enter your information below:</h2>
            <form>
                <label> Username:
                    <input className='register-input' type='text'></input>
                </label>
            </form>
            <form>
                <label> Phone Number:
                    <input className='register-input' type='text'></input>
                </label>
            </form>
            <form>
                <label> Password:
                    <input className='register-input' type='password'></input>
                </label>
                <button className='form-buttons'>submit</button>
            </form>
            <Link to='/'><button className='form-buttons'>Cancel</button></Link>
        </div>
    )}

export default Register