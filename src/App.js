import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Form from './components/Form';
import EditForm from './components/EditForm';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);
  const [userEdit, setUserEdit] = useState([]);
  const [estado, setEstado] = useState(false);
  // ciclo de vida
  useEffect(() => {
    getUsers();
  }, []);
  // funciones
  const getUsers = async () => {
    const res = await axios.get(
      'https://academlo-api-users.herokuapp.com/users'
    );
    const { data } = res.data;
    setUsers(data);
  };
  const deleteUser = async (id) => {
    const url = `https://academlo-api-users.herokuapp.com/user/${id}`;
    const res = await axios.delete(url);
    console.log(res);
    getUsers();
  };
  const editUser = (id) => {
    const resultado = users.find((user) => user.id === id);
    setUserEdit(resultado);
    setEstado(true);
  };
  const updateUser = async (event) => {
    const { id } = userEdit;
    event.preventDefault();
    const url = `https://academlo-api-users.herokuapp.com/user/${id}`;
    const res = await axios.put(url, userEdit);
    console.log(res.data.message);
    getUsers();
    setEstado(false);
  };
  const editInput = (e) => {
    setUserEdit({
      ...userEdit,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className='App'>
      {estado && (
        <EditForm
          userEdit={userEdit}
          updateUser={updateUser}
          editInput={editInput}
        />
      )}
      {!estado && <Form getUsers={getUsers} />}
      <p>usuarios:</p>
      <div className='grid-container'>
        {users.map((user) => {
          return (
            <div className='box' key={user.id}>
              <h2>
                {user.name} {user.lastname}
              </h2>
              <p>{user.email}</p>
              <button className='users-btn' onClick={() => deleteUser(user.id)}>
                eliminar
              </button>
              <button className='users-btn' onClick={() => editUser(user.id)}>
                editar
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
