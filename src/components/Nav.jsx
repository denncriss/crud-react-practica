import React from 'react';

function Nav() {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-dark text-white p-3'>
      <div
        className='collapse navbar-collapse d-flex justify-content-between'
        id='navbarTogglerDemo01'
      >
        <div>
          <h1 className='h4 text-white text-uppercase'>denncriss</h1>
        </div>
        <form className='form-inline'>
          <input
            className='form-control mr-sm-2'
            type='search'
            placeholder='ej: user'
          />
          <button
            className='btn btn-info my-2 my-sm-0 d-none d-sm-block'
            type='submit'
          >
            buscar
          </button>
        </form>
      </div>
    </nav>
  );
}

export default Nav;
