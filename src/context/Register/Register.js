import React, {useState} from 'react';
import { Grid, Paper, Avatar, Typography} from '@material-ui/core';
//import D from './assets/img/D.png';
import useForm from '../../hooks/useForm';
// import {headleSubmit,onInputChange} from '../Register/Utils/utils';
import './Register.css';
import { avatarStyle, headerStyle, paperStyle, headerStyle2, headerStyle3, headerStyle4, headerStyle5, headerStyle6, headerStyle7, headerStyle8, headerStyle9, headerStyle10} from './utils/estilo';


export const Register = () => {

const [input,setInput, error,setError] = useForm();
    
const onInputChange = e => {
    const { name , value } = e.target;
    setInput(prev => ({
        ...prev,
        [name]: value
    }));
    validateInput(e);
};
const validateInput = e => {
    let { name , value } = e.target;
    setError( prev => {
        const stateObj = { ...prev, [name]: "" };
        switch (name){
            case "email":
                if(!value && value !== null){
                    stateObj[name] = "Porfavor Ingrese Email";
                }
                break;
            case "password":
                if(!value){
                    stateObj[name] = "porfavor ingresa una contraseña";
                }else if(input.confirmPassword && value !== input.confirmPassword) {
                    stateObj["confirPassword"]="Password y confirmacion no coinciden";
                }else {
                    stateObj["confirmPassword"] = input.confirmPassword ? "" : error.confirmPassword;
                }
                break;
            case "confirmPassword":
                if(!value){
                    stateObj[name]="porfavor ingrese la contraseña de confirmacion";
                }else if(input.password && value !== input.password) {
                    stateObj[name]="Password y confirmacion no coinciden";
                }
                break;
            default:
            break;
        }
        return stateObj;
    }); 
}
const headleSubmit = (e)=>{
    e.preventDefault();
    console.log(input);
    alert("Send to api");
}
    return (
        <Grid>
            <Paper elevation={20} style={paperStyle}>
                <Grid align='center'>  
                    <Avatar style={avatarStyle}>   
                    <svg>
                        <ellipse/>
                        <img className='photo'/>
                    </svg>
                    </Avatar>
                    <Typography style={headerStyle} variant='caption'>    
                                Plagio Control
                    </Typography>
                </Grid>
                <Grid align='center'>  
                    <h2 style={headerStyle2}>Login Plagio Control</h2>
                    <Typography style={headerStyle3} variant='caption'>    
                        Enter your emai and hola 
                    </Typography>
                </Grid>
                <form onSubmit={headleSubmit}>
                    <br></br>
                    <Typography style={headerStyle4} variant='caption'>    
                            EMAIL
                    </Typography>
                    
                    <input 
                        type='email'
                        name='email'
                        placeholder='Email address'
                        value={input.email}
                        onChange={onInputChange}
                        onBlur={validateInput}
                        required></input>
                    {error.email && <span className='err'>{error.email}</span>}
                    <br></br>
                    
                    <Typography style={headerStyle5} variant='caption'>    
                            PASSWORD
                            <Typography style={headerStyle6} variant='caption'>    
                                ForgoutPassword?
                            </Typography>
                    </Typography>
                    
                    <input 
                        type='password'
                        name='password'
                        placeholder='Password'
                        value={input.password}
                        onChange={onInputChange}
                        onBlur={validateInput}
                        required></input>
                    {error.password && <span className='err'>{error.password}</span>}
                    <br></br>
                    <Typography style={headerStyle7} variant='caption'>    
                    RE-PASSWORD
                    </Typography>
                    
                    <input 
                        type='password'
                        name='confirmPassword'
                        placeholder='Password'
                        value={input.confirmPassword}
                        onChange={onInputChange}
                        onBlur={validateInput}
                        required></input>
                    {error.confirmPassword && <span className='err'>{error.confirmPassword}</span>}
                    <br></br>
                    <button type='submit' value='enviar'>
                        <Typography style={headerStyle10} variant='caption'>    
                            Sing In
                        </Typography>
                    </button>
                    <Grid align='center'>
                        <Typography style={headerStyle8} variant='caption'>    
                            Ya tienes una cuenta?
                        </Typography>
                        <Typography style={headerStyle9} variant='caption'>    
                            <a href='/login'>Login</a>
                        </Typography>
                    </Grid>
                </form>
            </Paper>
        </Grid>
    )
}