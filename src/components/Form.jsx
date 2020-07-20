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
      const { data } = res.data;
      getUsers();
      setUsuarios(data);
      console.log(usuarios);
      // } catch (error) {
      //   console.log(error);
      // }
    };
    getUser();
  };
  return (
    <div>
      <p>formulario:</p>
      <form onSubmit={enviarForm}>
        <label htmlFor='name'>nombre: </label>
        <input type='text' name='name' onChange={handleChange} />
        <br />
        <label htmlFor='lastname'>apellido: </label>
        <input type='text' name='lastname' onChange={handleChange} />
        <br />
        <label htmlFor='email'>email: </label>
        <input type='email' name='email' onChange={handleChange} />
        <br />
        <label htmlFor='password'>pw: </label>
        <input type='password' name='password' onChange={handleChange} />
        <br />
        <button type='submit'>enviar formulario</button>
      </form>
    </div>
  );
}
export default Form;
