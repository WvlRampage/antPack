import React from 'react'
import { useForm } from 'react-hook-form';
import Button from '../../components/Button/Button';
import useUsers from '../../hooks/useUsers';
import './createUser.css'

const CreateUser = () => {
  const {addUser} = useUsers()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();


  const createUSer = (data) => {
    addUser(data)
  }

  return (
    <div className="containerForm">
      <h1 style={{ fontSize: 40 }}>Crear nuevo Usuario</h1>      
      <form className="formStyle" onSubmit={handleSubmit(createUSer)}>
        <input className="input-style" placeholder="Nombre" {...register('firstName', { required: true })} />
        {errors.firstName && <p className="p-style">Nombre es requerido.</p>}
        <input className="input-style" placeholder="Correo" type="email" {...register('email', { required: true })} />
        {errors.email && <p className="p-style">Correo es requerido.</p>}
        <input className="input-style" placeholder="Ciudad" {...register('city', { required: true })} />
        {errors.city && <p className="p-style">Ciudad es requerido.</p>}
        <input className="input-style" placeholder="Nombre de la compañia" {...register('companyName', { required: true })} />
        {errors.companyName && <p className="p-style">Nombre de la compañia es requerido.</p>}
        <Button name={"Crear"} marginLeft={10} />
      </form>
      <div className="divBtnRegresar">
        <Button name={"Regresar"} navigate="/showPersons"/>
      </div>
    </div>
  )
}

export default CreateUser