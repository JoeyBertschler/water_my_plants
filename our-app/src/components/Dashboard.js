import React from 'react';
import { Link } from 'react-router-dom';



export default function DashBoard () {
    return (
        <div>
            <div className='dash-nav'>
                <h4>DashBoard</h4>
                <Link id='logout'to='/'>logout</Link>
            </div>
        </div>
    )
}