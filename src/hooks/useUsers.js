import { useState, useEffect } from 'react'
import listUsers from '../services/listUsers'

const initialUsers = [{
  "id": 1,
  "name": "Leanne Graham",
  "username": "Bret",
  "email": "Sincere@april.biz",
  "address": {
    "street": "Kulas Light",
    "suite": "Apt. 556",
    "city": "Gwenborough",
    "zipcode": "92998-3874",
    "geo": {
      "lat": "-37.3159",
      "lng": "81.1496"
    }
  },
  "phone": "1-770-736-8031 x56442",
  "website": "hildegard.org",
  "company": {
    "name": "Romaguera-Crona",
    "catchPhrase": "Multi-layered client-server neural-net",
    "bs": "harness real-time e-markets"
  }
}]

const useUsers = () => {
  const [users, setUsers] = useState(initialUsers)

  useEffect(() => {
    listUsers.getAll()
      .then((response) => {
        setUsers(response.data)
      })
      .catch((e) => {
        console.log(e);
      });
  }, [])

  const addUser = (data) => {
    listUsers.create(data).then((response) => {
      setUsers(response.data)
      console.log(response.data);
    })
      .catch((e) => {
        console.log(e);
      });
  }

  const updateUser = (id, data) => {
    listUsers.update(id, data).then((response) => {
      setUsers(response.data)
      console.log(response.data);
    })
      .catch((e) => {
        console.log(e);
      });
  }

  const deleteUser = (id, name) => {
    if (window.confirm(`¿Estas seguro de eliminar al usuario: ${name}?`)) {
      listUsers.remove(id).then((response) => {
        console.log(response)
        alert(`${name} fue eliminado correctamente.`)
      }).catch((e) => {
        console.log(e);
      });
    }
  }

  return {
    addUser,
    users,
    updateUser,
    deleteUser
  }
}

export default useUsers