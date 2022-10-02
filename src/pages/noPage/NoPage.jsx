import React from 'react'
import Button from '../../components/Button/Button'
import './NoPage.css'

const ErrorPage = () => {
  return (
    <div class="containerNoPage">
      <h1>An error as occured.</h1>
      <h1> <span class="ascii">(╯°□°）╯︵ ┻━┻</span></h1>
      <Button name="Regresar" navigate="/"/>
    </div>
  )
}

export default ErrorPage