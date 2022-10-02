import React from 'react'
import Button from '../../components/Button/Button'
import useUsers from '../../hooks/useUsers'
import './showPersons.css'
import Gravatar from 'react-gravatar'

function ShowPersons() {
  const {users,deleteUser} = useUsers()
  console.log(users)
  return (
    <div className="containerTable">       
      <table>
        <thead>
          <tr>
            <th>Nombre</th>   
            <th>Email</th>   
            <th>Ciudad</th>   
            <th>Nombre de la compañia</th> 
            <th>Opciones</th>          
          </tr>
        </thead>
        {users.map((item, i) => (    
        <tbody key={i}>
          <tr>
            <td className="options"><Gravatar email={item.email} />{item.name}</td>
            <td>{item.email}</td>
            <td>{item.address.city}</td>
            <td>{item.company.name}</td>
            <td >              
              <div className="options">
                <Button name="Editar" size={13} navigate={"/profile"} data={item}/>
                <Button name="Eliminar" onClick={()=>deleteUser(item.id,item.name)} size={13} data={item} marginLeft={10}/>
              </div>
            </td>
          </tr>
        </tbody>
        ))}
        <caption className="title">Listado de Usuarios</caption>        
      </table>
      <div className="newUser">
        <Button name="Crear nuevo Usuario" height={50} width={180} size={16} navigate={"/createUser"} />
      </div>      
    </div>
  )
}

export default ShowPersons