import React from 'react'
import { useForm } from 'react-hook-form';
import Button from '../../components/Button/Button';
import useUsers from '../../hooks/useUsers';
import { useLocation } from "react-router";
import Gravatar from 'react-gravatar'
import './profile.css'

const Profile = () => {
  const { updateUser } = useUsers()
  const location = useLocation()
  const user = location.state.data
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const createUSer = (data) => {
    updateUser(user.id, data)
  }

  return (
    <div className="containerForm">
      <h1 style={{ fontSize: 40 }}>Actualizar Usuario</h1>
      <form className="formStyle" onSubmit={handleSubmit(createUSer)}>
        <Gravatar email={user.email} />
        <input className="input-style" defaultValue={user.name || ""}  {...register('firstName', { required: true })} />
        {errors.firstName && <p className="p-style">Nombre es requerido.</p>}
        <input className="input-style" defaultValue={user.email || ""} type="email" {...register('email', { required: true })} />
        {errors.email && <p className="p-style">Correo es requerido.</p>}
        <input className="input-style" defaultValue={user.address.city || ""} {...register('city', { required: true })} />
        {errors.city && <p className="p-style">Ciudad es requerido.</p>}
        <input className="input-style" defaultValue={user.company.name || ""} {...register('companyName', { required: true })} />
        {errors.companyName && <p className="p-style">Nombre de la compañia es requerido.</p>}
        <Button name={"Actualizar"} marginLeft={10} />
      </form>
      <div className="divBtnRegresar">
        <Button name={"Regresar"} navigate="/showPersons" />
      </div>
    </div>
  )
}

export default Profile