import React from 'react';
import './form/form.css';

const Radio = ({ type, label, check, name, handle, value, clas }) => {
  return (
    <div>
        <input type={ type } name={ name } value={ value } checked={ check } onClick={ handle } id="rate" className={ clas } />
            <label for="rate">{ label }</label>
    </div>
  )
}

export default Radio;