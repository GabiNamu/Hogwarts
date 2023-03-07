import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import Radio from '../Radio';
import './form.css';

const Form = () => {
  const { history } = useHistory();
const [state, setState] = useState({
  name: '',
  last_name: '',
  email: '',
  house: 'Gitnória',
  family: 'Frontend',
  hofs: false,
  jest: false,
  promises: false,
  python: false,
  react: false,
  sql: false,
  textarea: '',
  agreement: false,
});

const handleChange = ({ target }) => {
  if(target.type === 'radio') {
    console.log('cheguei')
    setState({
      ...state,
      [target.name]: target.value,
    })
  } else {
    setState({
      ...state,
      [target.name]: target.type === 'checkbox' ? target.checked : target.value,
    })
  }
}

const handleClick = () => {
  history.push('/send');
}

  return (
    <form action="" className='form'>
        <input type="text" name="name" value={ state.name } onChange={ handleChange } placeholder='Digite seu nome' />
        <input type="text" name="last_name" value={ state.last_name } onChange={ handleChange } placeholder='Digite seu sobrenome' />
        <input type="email" name="email" value={ state.email } onChange={ handleChange } placeholder='Digite seu email' />
        <select name="house" id="house" onChange={ handleChange } className="form-select">
            <option value="Gitnória" id="gitnoria-house">Gitnória</option>
            <option value="Reactpuff" id="reactpuff-house">Reactpuff</option>
            <option value="Corvinode" id="corvinode-house">Corvinode</option>
            <option value="Pytherina" id="pytherina-house">Pytherina</option>
          </select>
          <label for="" id="label-family" class="form-label">Qual sua família?</label>
          <div className='radio-container'>
              <Radio type="radio" value="Frontend" name='family' check={ state.family === 'Frontend' } handle={ handleChange } label={ 'Frontend' } />
              <Radio type="radio" value="Backend" name='family' check={ state.family === 'Backend' } handle={ handleChange } label={ 'Backend' } />
              <Radio type="radio" value="FullStack" name='family' check={ state.family === 'FullStack' } handle={ handleChange } label={ 'FullStack' } />
          </div>
              <label for="" id="label-content" class="form-label">
                Qual conteúdo você está com mais vontade de aprender?</label>
            <div className='check-container'>
            <Radio type="checkbox" name='hofs' check={ state.hofs } handle={ handleChange } label={ 'HOFS' } />
            <Radio type="checkbox" name='jest' check={ state.jest } handle={ handleChange } label={ 'jest' } />
            <Radio type="checkbox" name='promises' check={ state.promises } handle={ handleChange }  label={ 'Promises' } />
            <Radio type="checkbox" name='react' check={ state.react } handle={ handleChange }  label={ 'React' } />
            <Radio type="checkbox" name='sql' check={ state.sql } handle={ handleChange }   label={ 'SQL' } />
            <Radio type="checkbox" name='python' check={ state.python } handle={ handleChange }  label={ 'Python' } />
            </div>
            <label for="">Deixe seu comentário:</label>
        <textarea name="textarea" value={ state.textarea } onChange={ handleChange } id="textarea" maxLength="500" />
        <Radio type="checkbox" name='agreement' check={ state.agreement } handle={ handleChange } label="Você concorda com o uso das informações acima?"  />
        <Link to="/send">
      <button type="submit" id="submit-btn" disabled={ state.agreement === false } className="submit-button">Enviar</button>
      </Link>
    </form>
  )
}

export default Form;