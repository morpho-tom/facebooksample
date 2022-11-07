import React from 'react'
import TextField from '@mui/material/TextField';
import { Link } from "react-router-dom";
import Card from '@mui/material/Card';
import { Button } from '@mui/material';
import logo from './facebok.svg';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import './App.css';



const Signup = () => {
    return (
        <div>
            <main>
                <div className="card1" >
                    <img className='logo' src={logo} alt="logo" />
                    <Card style={{ width: 480, height: 700, marginLeft: 450, marginTop: 110 }}>
                        <h2>Create a new account</h2>
                        <p>It's quick and easy.</p>
                        <TextField id="outlined-basic" label="First name" sx={{ m: 1, width: '25ch' }} variant="outlined" />
                        <TextField id="outlined-basic" label="Last name" sx={{ m: 1, width: '25ch' }} variant="outlined" /><br />
                        <TextField id="outlined-basic" label="Mobile number" sx={{ m: 1, width: '52ch' }} variant="outlined" />
                        <TextField id="outlined-password-input" sx={{ m: 1, width: '52ch' }} label="New Password" type="password" autoComplete="current-password" />
                        <p class="datepara">Date of Birth ?</p>
                        <span class="date">
                            <select aria-label="Day" name="birthday_day" class="dmy" title="Day"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10">10</option><option value="11">11</option><option value="12" selected="1">12</option><option value="13">13</option><option value="14">14</option><option value="15">15</option><option value="16">16</option><option value="17">17</option><option value="18">18</option><option value="19">19</option><option value="20">20</option><option value="21">21</option><option value="22">22</option><option value="23">23</option><option value="24">24</option><option value="25">25</option><option value="26">26</option><option value="27">27</option><option value="28">28</option><option value="29">29</option><option value="30">30</option><option value="31">31</option></select>
                            <select aria-label="Month" name="birthday_month" class="dmy" title="Month" ><option value="1">Jan</option><option value="2">Feb</option><option value="3">Mar</option><option value="4">Apr</option><option value="5">May</option><option value="6">Jun</option><option value="7">Jul</option><option value="8">Aug</option><option value="9">Sep</option><option value="10" selected="1">Oct</option><option value="11">Nov</option><option value="12">Dec</option></select>
                            <select aria-label="Year" name="birthday_year" class="dmy" title="Year"><option value="2022" selected="1">2022</option><option value="2021">2021</option><option value="2020">2020</option><option value="2019">2019</option><option value="2018">2018</option><option value="2017">2017</option><option value="2016">2016</option><option value="2015">2015</option><option value="2014">2014</option><option value="2013">2013</option><option value="2012">2012</option><option value="2011">2011</option><option value="2010">2010</option><option value="2009">2009</option><option value="2008">2008</option><option value="2007">2007</option><option value="2006">2006</option><option value="2005">2005</option><option value="2004">2004</option><option value="2003">2003</option><option value="2002">2002</option><option value="2001">2001</option><option value="2000">2000</option><option value="1999">1999</option><option value="1998">1998</option><option value="1997">1997</option><option value="1996">1996</option><option value="1995">1995</option><option value="1994">1994</option><option value="1993">1993</option><option value="1992">1992</option><option value="1991">1991</option><option value="1990">1990</option><option value="1989">1989</option><option value="1988">1988</option><option value="1987">1987</option><option value="1986">1986</option><option value="1985">1985</option><option value="1984">1984</option><option value="1983">1983</option><option value="1982">1982</option><option value="1981">1981</option><option value="1980">1980</option><option value="1979">1979</option><option value="1978">1978</option><option value="1977">1977</option><option value="1976">1976</option><option value="1975">1975</option><option value="1974">1974</option><option value="1973">1973</option><option value="1972">1972</option><option value="1971">1971</option><option value="1970">1970</option><option value="1969">1969</option><option value="1968">1968</option><option value="1967">1967</option><option value="1966">1966</option><option value="1965">1965</option><option value="1964">1964</option><option value="1963">1963</option><option value="1962">1962</option><option value="1961">1961</option><option value="1960">1960</option><option value="1959">1959</option><option value="1958">1958</option><option value="1957">1957</option><option value="1956">1956</option><option value="1955">1955</option><option value="1954">1954</option><option value="1953">1953</option><option value="1952">1952</option><option value="1951">1951</option><option value="1950">1950</option></select>
                        </span>
                        <br />
                        <p class="genderpara">Gender ?</p>
                        <span >
                            <FormControl >
                                <RadioGroup  row  aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group">
                                    <FormControlLabel value="female"control={<Radio />} label="Female" />
                                    <FormControlLabel value="male"  control={<Radio />} label="Male" />
                                    <FormControlLabel value="other" control={<Radio />} label="Other" />
                                </RadioGroup>
                            </FormControl>
                        </span>
                        <p className='info'>
                        People who use our service may have uploaded your contact information to Facebook. <Link to="#">learn more</Link>
                        <br/><br/>
                        By clicking Sign Up, you agree to our Terms, Privacy Policy and Cookies Policy. You may receive SMS notifications from us and can opt out at any time.
                        </p>
                        <Button variant="contained" sx={{ m: 1 ,width: '20ch',height: 40 }}>Sign up</Button><br/><br/>
                        <Link to="/">Already have an account?</Link>
                    </Card>
                </div>
            </main>
        </div>
    );
}

export default Signup;