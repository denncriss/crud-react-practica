import React, { useState } from 'react';
import axios from 'axios';

function Form({ getUsers }) {
  const [user, setUser] = useState({
    name: '',
    lastname: '',
    email: '',
    password: '',
  });
  const [usuarios, setUsuarios] = useState([]);
  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };
  const enviarForm = (event) => {
    event.preventDefault();
    const getUser = async () => {
      // try {
      let url = 'https://academlo-api-users.herokuapp.com/users';
      const res = await axios.post(url, user);
      const data = res.data;
      getUsers();
      setUsuarios(data);
      console.log(usuarios.message);
    };
    getUser();
  };
  return (
    <div className='card p-4'>
      <p className='card-title text-uppercase text-center h5 text-white p-3 bg-info'>
        registrar usuario
      </p>
      <form onSubmit={enviarForm}>
        <label htmlFor='name'>nombre</label>
        <input
          type='text'
          name='name'
          className='form-control'
          onChange={handleChange}
        ></input>
        <label htmlFor='lastname'>apellido</label>
        <input
          type='text'
          name='lastname'
          className='form-control'
          onChange={handleChange}
        ></input>
        <label htmlFor='email'>email</label>
        <input
          type='email'
          name='email'
          className='form-control'
          onChange={handleChange}
        ></input>
        <label htmlFor='password'>contraseña</label>
        <input
          type='password'
          name='password'
          className='form-control'
          onChange={handleChange}
        ></input>
        <button
          type='submit'
          className='btn btn-info text-white mt-3 btn-block'
        >
          registrar
        </button>
      </form>
    </div>
  );
}
export default Form;
