import React from 'react'
import { Link } from "react-router-dom";
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import { Button } from '@mui/material';
import logo from './facebok.svg';
import Divider from '@mui/material/Divider';
import './App.css';



const Forgot = () => {
    return (
        <div>
            <header>
                <img className='flogo' src={logo} alt="logo" />
                <nav className='navbar'>
                    <TextField label="Email or Phone" sx={{ m: 1, width: '20ch' }} id="outlined-size-small" size="small" />
                    <TextField id="outlined-password-input" sx={{ m: 1, width: '20ch' }} size='small' label="New Password" type="password" autoComplete="current-password" />
                    <Button variant="contained" sx={{ m: 1, width: '09ch', height: '5ch' }}>Login</Button>
                    <Link to="/forgot" >Forgotten account?</Link>
                </nav>
            </header>
            <main >
                <div className="card2" >
                    <Card style={{ width: 500, height: 290, marginLeft: 450, marginTop: 110 }}>
                        <h2>Find Your Account</h2>
                        <Divider />
                        <p>Please enter your email address or mobile number to search for your account.</p>
                        <TextField id="outlined-size-small" sx={{ m: 1, width: '56ch' }} label="Enter your Email id" />
                        <Divider />
                        <div className='button2'>
                            <Button sx={{ m: 1, width: '0', backgroundColor: '#ccd0d5', color: 'black' }}><Link to="/" >Cancel</Link></Button>
                            <Button variant="contained" sx={{ m: 1, width: '09ch', height: '5ch' }}>Search</Button>
                        </div>
                    </Card>
                </div>
            </main>
        </div>

    );
}

export default Forgot;