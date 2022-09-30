import React, {useEffect} from 'react'
import Button from '../components/Button/Button'
import ListUsers from '../services/listUsers';

function ShowPersons() {
    useEffect(() => {
        ListUsers.getAll()
        .then((response) => {
          console.log(response.data)
        })
        .catch((e) => {
          console.log(e);
        });
    }, [])
    
  return (
    <div>
        <Button name="guardar"/>
    </div>
  )
}

export default ShowPersons