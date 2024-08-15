import React from 'react'

function input({placeholder, type, name, extraClass, isRequired}) {
  return (
    <input required={isRequired} className={`main_input ${extraClass}`} name={name} type={type} placeholder={placeholder}/>
  )
}

export default input