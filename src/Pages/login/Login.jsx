import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/header-logo.png';
import './header.css';

const Login = () => {
  const [state, setState] = useState({
    email: '',
    password: '',
  });

  const handleChange = ({ target: { name, value }}) => {
    setState({
      ...state,
       [name]: value
    })
  }

  return (
    <div className='header-container'>
        <img src={ logo } alt="logo" />
        <form>
            <input 
            type="email" 
            placeholder='Digite seu email' 
            className='header-input'  
            name="email"
            value={ state.email }
            onChange={ (e) => handleChange(e) }
            />
            <input 
            type="password" 
            placeholder='Digite sua senha' 
            className='header-input'
            name="password"
            value={ state.password }
            onChange={ handleChange } 
            />
            <Link to="/home">
            <button 
            type='button' 
            className='header-button'
            disabled={state.email === '' && state.password === ''}
            >
              Entrar
            </button>
            </Link>
        </form>
    </div>
  )
}

export default Login;