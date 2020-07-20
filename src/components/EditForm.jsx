import React from 'react';

function EditForm({ userEdit, updateUser, editInput }) {
  const { name, lastname, email, password } = userEdit;
  return (
    <div>
      <h2>Editar un usuario</h2>
      <form onSubmit={updateUser}>
        <input
          name='name'
          type='text'
          placeholder='Nombre'
          value={name}
          onChange={editInput}
        />
        <input
          name='lastname'
          type='text'
          placeholder='Apellidos'
          value={lastname}
          onChange={editInput}
        />
        <input
          name='email'
          type='email'
          placeholder='Email'
          value={email}
          onChange={editInput}
        />
        <input
          name='password'
          type='password'
          placeholder='Contraseña'
          value={password}
          onChange={editInput}
        />
        <input type='submit' value='Actualizar usuario' />
      </form>
    </div>
  );
}

export default EditForm;
