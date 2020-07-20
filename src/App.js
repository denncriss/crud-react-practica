import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Form from './components/Form';
import EditForm from './components/EditForm';
import Nav from './components/Nav';
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
    const data = res.data;
    console.log(data.message);
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
    <div className='container-lg'>
      <Nav />
      <div className='row pt-4'>
        <div className='col-12 col-md-4'>
          {estado ? (
            <EditForm
              userEdit={userEdit}
              updateUser={updateUser}
              editInput={editInput}
            />
          ) : (
            <Form getUsers={getUsers} />
          )}
        </div>
        <div className='col-12 col-md-8'>
          <table className='table table-bordered'>
            <thead className='thead-dark'>
              <tr>
                <th scope='col'>id</th>
                <th scope='col'>nombre</th>
                <th scope='col'>apellidos</th>
                <th scope='col'>email</th>
                <th scope='col'>e/d</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => {
                return (
                  <tr key={user.id}>
                    <th scope='row'>{user.id}</th>
                    <td>{user.name}</td>
                    <td>{user.lastname}</td>
                    <td>{user.email}</td>
                    <td>
                      <button
                        className='btn btn-info mr-2'
                        onClick={() => editUser(user.id)}
                      >
                        <svg
                          width='1em'
                          height='1em'
                          viewBox='0 0 16 16'
                          className='bi bi-pencil-square d-flex'
                          fill='currentColor'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path d='M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z' />
                          <path
                            fillRule='evenodd'
                            d='M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z'
                          />
                        </svg>
                      </button>
                      <button
                        className='btn btn-danger'
                        onClick={() => deleteUser(user.id)}
                      >
                        <svg
                          width='1em'
                          height='1em'
                          viewBox='0 0 16 16'
                          className='bi bi-trash-fill d-flex'
                          fill='currentColor'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            fillRule='evenodd'
                            d='M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7z'
                          />
                        </svg>
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
