import React from 'react'

const Radio = ({ type, label }) => {
  return (
    <div>
        <input type={ type } name="rate" id="rate"/>
            <label for="rate">{ label }</label>
    </div>
  )
}

export default Radio;