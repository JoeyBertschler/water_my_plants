import '../../src/App.css'
import React from 'react'
import { Link, Route } from 'react-router-dom'
import { Input } from 'semantic-ui-react'

function Login (){
    return(
        <div>
            <form>
                
                <label> Username: <br/>
                    <Input placeholder='John Doe' style={{width:'40%'}} className='register-input' type='text'></Input>
                </label>

                <label> Password: <br/>
                    <Input placeholder='$3cuRePasswqrd_' style={{width:'40%'}} className='register-input' type='password'></Input>
                </label>
                                  <br/>
                <button className='form-buttons'>submit</button>
            </form>

            <Link to='/'>Home</Link>
            <Link to='/register'>
                <h6 style={{ fontSize: '7px'}}>  </h6> 
                <h6> Back to <p style={{fontWeight: 'bold'}}> Register</p> </h6>
            </Link>
        </div>
    )}

export default Login