import React from 'react';
import './send.css';
import logo from '../../images/header-logo.png';

const Send = ({ name }) => {
  return (
    <div className='send-container'>
      <img src={ logo } alt="logo" />
      <h1>Formulário Enviado!</h1>
      <h2>Bem Vindo a TrybeWarts</h2>
    </div>
  )
}

export default Send;