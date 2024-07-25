import React from 'react'

function Input(props) {
    const {type, placeholder, name} = props
  return (
    <input 
    type={type}
    className="text-sm border rounded w-full py-2 px-3 mb-5 text-slate-700 placeholder:opacity-70" 
    placeholder={placeholder} 
    name={name}
    />
  )
}

export default Input