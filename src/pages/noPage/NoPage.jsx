import React from 'react'
import Button from '../../components/Button/Button'
import './NoPage.css'

const ErrorPage = () => {
  return (
    <div className="containerNoPage">
      <h1>Ha ocurrido un error.</h1>
      <h1> <span className="ascii">(╯°□°）╯︵ ┻━┻</span></h1>
      <Button name="Regresar" navigate="/"/>
    </div>
  )
}

export default ErrorPage