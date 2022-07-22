import React, {useState} from 'react';
import { Grid, Paper, Avatar, Typography} from '@material-ui/core';
//import D from './assets/img/D.png';
import useForm from '../../hooks/useForm';
// import {headleSubmit,onInputChange} from '../Register/Utils/utils';
import './Register.css';


export const Register = () => {
const paperStyle={padding:'10px 30px',width:'540px', height:'631px' ,margin:'30px auto',radius:'8px'}
const headerStyle={width:'494px',height:'24px',top:'100px',left:'32px',opacity:'70%',fontWeight:'bold',fontSize:'19px',fontFamily:'Mulish',Weigth:'700',size:'19px',lineHeight:'23.85px',letter:'0.4px',align:'center'}
const headerStyle2={width:'494px',height:'30px',top:'156px',left:'32px',fontWeight:'bold',fontSize:'24px',fontFamily:'Mulish',Weigth:'700',size:'24px',lineHeight:'30.12px',letter:'0.3px',align:'center'}
const headerStyle3={width:'494px',height:'20px',top:'198px',left:'32px',fontWeight:'regular',fontSize:'14px',fontFamily:'Mulish',Weigth:'400',size:'14px',lineHeight:'20px',letter:'0.3px',align:'center'}
const headerStyle4={width:'494px',height:'16px',fontWeight:'bold',fontSize:'12px',fontFamily:'Mulish',Weigth:'700',size:'12px',lineHeight:'15.06px',letter:'0.3px'}
const headerStyle5={width:'494px',height:'16px',fontWeight:'bold',fontSize:'12px',fontFamily:'Mulish',Weigth:'700',size:'12px',lineHeight:'15.06px',letter:'0.3px'}
const headerStyle6={width:'85px',height:'13px',top:'354px',left:'441px',fontWeight:'regular',fontFamily:'Mulish',Weigth:'400',size:'10px',lineHeight:'12.55px',letter:'0.1px',align:'right'}
const headerStyle7={width:'494px',height:'16px',fontWeight:'bold',fontSize:'12px',fontFamily:'Mulish',Weigth:'700',size:'12px',lineHeight:'15.06px',letter:'0.3px'}
const headerStyle8={width:'149px',height:'20px',top:'571px',left:'177px',fontWeight:'regular',fontFamily:'Mulish',Weigth:'400',size:'14px',lineHeight:'20px',letter:'0.3px',align:'center'}
const headerStyle9={width:'51px',height:'20px',fontWeight:'semibold',fontFamily:'Mulish',Weigth:'600',size:'14px',lineHeight:'20px',letter:'0.2px',align:'center'}
const headerStyle10={width:'446px',height:'20px',top:'15px',left:'24px',fontWeight:'semibold',fontFamily:'Mulish',Weigth:'600',size:'14px',lineHeight:'20px',letter:'0.2px',align:'center',color:'#FFFFFF'}
const avatarStyle={width:'48px', height:'48px',background:'blue'}
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