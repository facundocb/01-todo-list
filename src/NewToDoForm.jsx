import { useState } from 'react';

export function NewToDoForm(props) {
  const [newItem, setNewItem] = useState('');

  function handleSubmit(e) {
    e.preventDefault(); // evita el comportamiento predeterminado de recargar la página

    if (newItem === '') {
      return;
    }

    props.onSubmit(newItem);
    setNewItem('');
  }

  return (
    <form onSubmit={handleSubmit} className='new-item-form'>
      <div className='form-row'>
        <label htmlFor='item'>New Item</label>
        <input
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          type='text'
          id='item'
        ></input>
      </div>
      <button type='submit' className='btn'>
        Add
      </button>
    </form>
  );
}
