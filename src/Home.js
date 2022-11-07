import React from 'react'
import { Link } from "react-router-dom";
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import { Button } from '@mui/material';
import logo from './facebok.svg';
import './App.css';


const Home=()=>{
    return(
    <div>
      <main >
        <div className="card1" >
          <img className='logo' src={logo} alt="logo"/>
          <Card style={{width:400, height: 290, marginLeft: 500, marginTop: 110 }}>
              <p>Log in to Facebook</p>
              <TextField id="outlined-basic" sx={{m:1, width: '40ch'}} label="Enter The User id(or)Number" variant="outlined" /><br/>
              <TextField id="outlined-password-input" sx={{m:1, width: '40ch'}} label="Password" type="password" autoComplete="current-password" />
              <Button variant="contained" sx={{m:1, width: '44ch'}}>Log in</Button>
              <br/>
              <Link to="/signup">Sign up for Facebook</Link>
              <span class="dot"> . </span>
              <Link to="./forgot">Forgotten account?</Link>
          </Card>
        </div>
      </main>
    </div>
);}

export default Home;