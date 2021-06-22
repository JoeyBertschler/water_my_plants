import React from 'react';
import { Link, Route } from 'react-router-dom';
import '../../src/App.css'

function Register (props) {
    const { formChange, values } = props;
    const onChange = (evt) => {
        const { name, value, } = evt.target;
        formChange(name, value)


    const onSubmit = (evt) => {
        evt.preventDefault();
    }
    }
    return(
        <div>
            <h2>Please enter your information below:</h2>
            <form>
                <label> Username:
                    <input className='register-input' name='username' type='text' value={values.username} onChange={onChange}></input>
                </label>
            </form>
            <form>
                <label> Phone Number:
                    <input className='register-input' name='phone' type='text'value={values.phone} onChange={onChange}></input>
                </label>
            </form>
            <form>
                <label> Password:
                    <input className='register-input' name='password' type='password' value={values.password} onChange={onChange}></input>
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