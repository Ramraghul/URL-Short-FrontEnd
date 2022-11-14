import React from 'react';
import './Navbar.css';
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';

function Navbar() {
    let navigate = useNavigate()

    let Logout = async () => {
        let sure = await swal("Are you sure to Logout?", {
            buttons: ["No", true],
        });
        if (sure === true) {
            navigate('/')
        }
        
    }
    return (
        <>
            <input className='click' type="checkbox" id="active"/>
                <label htmlFor="active" className="menu"><i className="fas fa-bars"></i></label>
                <div className="Burger">
                    <ul className='list'>
                        <li className='item'><a className='items' href="/Home">Home</a></li>
                        <li className='item'><a className='items' href="Home/Card">All link</a></li>
                        <li className='item'><a className='items'  onClick={()=>{Logout()}} href="##">Logout</a></li>
                    </ul>
                </div>
            </>
            )
}

            export default Navbar