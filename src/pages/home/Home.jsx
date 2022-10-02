import React from 'react'
import './home.css'
import Button from '../../components/Button/Button'

const home = () => {
  return (
    <div className='container'>
      <div className="center" >
        <h1>Bienvenido</h1> 
        <Button navigate="showPersons" name="Ingresar" height={60} width={140}/>
      </div>
    </div>
  )
}

export default home