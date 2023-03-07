import React from 'react'
import Form from '../components/form/Form';
import Footer from '../components/Footer';
import logo from '../images/header-logo.png';

const Home = () => {
  return (
    <div className='home'>
      <div className='home-container'>
        <img src={ logo } alt="logo" />
        <h2>Formulário de avaliação:</h2>
        <Form />
      </div>
      <Footer />
    </div>
  )
}

export default Home;