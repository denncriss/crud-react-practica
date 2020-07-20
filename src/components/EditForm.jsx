import React from 'react';

function EditForm({ userEdit, updateUser, editInput }) {
  const { name, lastname, email, password } = userEdit;
  return (
    <div className='card p-4'>
      <p className='card-title text-uppercase text-center h5 text-white p-3 bg-success'>
        editar usuario
      </p>
      <form onSubmit={updateUser}>
        <label htmlFor='name'>nombre</label>
        <input
          type='text'
          name='name'
          className='form-control'
          value={name}
          onChange={editInput}
        ></input>
        <label htmlFor='lastname'>apellido</label>
        <input
          type='text'
          name='lastname'
          className='form-control'
          value={lastname}
          onChange={editInput}
        ></input>
        <label htmlFor='email'>email</label>
        <input
          type='email'
          name='email'
          className='form-control'
          value={email}
          onChange={editInput}
        ></input>
        <label htmlFor='password'>contraseña</label>
        <input
          type='password'
          value={password}
          name='password'
          className='form-control'
          onChange={editInput}
        ></input>
        <button
          type='submit'
          className='btn btn-success text-white mt-3 btn-block'
        >
          confirmar
        </button>
      </form>
    </div>
  );
}

export default EditForm;
