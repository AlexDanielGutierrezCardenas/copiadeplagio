import React, { useState } from 'react';
import './Login.css'
import Title from './components/title/Title';
import Label from './components/label/Label';
import Input from './components/input/Input';
import logo from   './assets/images/logo.png';

export const Login = () => {
    const [ user, setUser ] = useState('');
    
    const [ password, setPassword ] = useState('');
    
    const [ isLogin, setIsLogin ] = useState(false);
    
    const [ hasError, setHasError ] = useState(false);

    function handleChange(entry, value){
        if(entry === 'usuario'){
            setUser(value);
            setHasError(false);
        } else{
            setPassword(value);
            setHasError(false);
        }
    }

    function handleSubmit() {
        let parameter = { user, password };
        if(parameter){
            if(parameter.user.length > 0 && parameter.password.length > 0){
                if(parameter.user === 'Katerine' && parameter.password === 'Ondarza'){
                    setIsLogin(true);
                } else {
                    setIsLogin(false);
                    setHasError(true);
                }
            } else {
                setIsLogin(false);
                setHasError(true);
            }
        }
    }

    return (
        <div className='login-container'>
            {   isLogin ? 
                <div className='home-content'>
                    <h1>Hola! {user}</h1>
                    <p>Estas Logeada</p>
                </div>
                : 
                <div className='form-container'>
                    <img className='icon' src={logo}></img>
                    <h1 className='title-logo'>Plagio Control</h1>
                    <Title text='Login Plagio Control'/>
                    <h2 className='title-intruction'>Enter your email and password below</h2>
                    { hasError &&
                        <p className='label-incorrect-parameters'>
                            Su email o contraseña son incorrectos o no esta registrado en nuestro sistema
                        </p>
                    }
                    <Label text='EMAIL'/>
                    <Input attribute={{
                        id: 'usuario',
                        name: 'usuario',
                        type: 'email',
                        placeholder: 'Email Address'
                    }}
                    handleChange={handleChange}
                    />
                    <Label text='PASSWORD'/>
                    <Input attribute={{
                        id: 'contraseña',
                        name: 'contraseña',
                        type: 'password',
                        placeholder: 'Password'
                    }}
                    handleChange={handleChange}
                    />
                    <button onClick={handleSubmit} className='submit'>
                        Log In
                    </button>
                    <p className='title-registration'>No tienes cuenta? <a className ='sign-up' href='#'>Sign up</a> </p>
                </div>
            }
        </div>
    )
};

export default Login;