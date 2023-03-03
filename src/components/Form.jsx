import React from 'react'
import Radio from './Radio';

const Form = () => {
  return (
    <form action="">
        <input type="" placeholder='Digite seu nome' />
        <input type="text" placeholder='Digite seu sobrenome' />
        <input type="email" placeholder='Digite seu email' />
        <select name="" id="house" class="form-select">
            <option value="Gitnória" id="gitnoria-house">Gitnória</option>
            <option value="Reactpuff" id="reactpuff-house">Reactpuff</option>
            <option value="Corvinode" id="corvinode-house">Corvinode</option>
            <option value="Pytherina" id="pytherina-house">Pytherina</option>
          </select>
          <label for="" id="label-family" class="form-label">Qual sua família?</label>
              <Radio type="radio" label={ 'Frontend' } />
              <Radio type="radio" label={ 'Backend' } />
              <Radio type="radio" label={ 'FullStack' } />
              <label for="" id="label-content" class="form-label"
            >Qual conteúdo você está com mais vontade de aprender?</label
          >
            <Radio type="checkbox" label={ 'HOFS' } />
            <Radio type="checkbox" label={ 'jest' } />
            <Radio type="checkbox" label={ 'Promises' } />
            <Radio type="checkbox" label={ 'React' } />
            <Radio type="checkbox" label={ 'SQL' } />
            <Radio type="checkbox" label={ 'Python' } />
            <label id="label-rate">Como você avalia a Trybewarts?</label>
            <Radio type="radio" label="1"/>
            <Radio type="radio" label="2"/>
            <Radio type="radio" label="3"/>
            <Radio type="radio" label="4"/>
            <Radio type="radio" label="5"/>
            <Radio type="radio" label="6"/>
            <Radio type="radio" label="8"/>
            <Radio type="radio" label="9"/>
            <Radio type="radio" label="10"/>
            <label for="">Deixe seu comentário:</label>
        <textarea name="" id="textarea" maxlength="500" class="form-control" />
        <Radio type="checkbox" label="Você concorda com o uso das informações acima?"  />
      <button type="submit" id="submit-btn" disabled>Enviar</button>
    </form>
  )
}

export default Form;