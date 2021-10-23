import React, { useState } from 'react';

const PantryItemForm = (props) => {
  const [ title, setTitle ] = useState('');
  const [ qty, setQty ] = useState(1);
  const [ expiry, setExpiry ] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    props.resetEditing(false);
    return {
      title,
      qty,
      expiry
    };
  };

  return (
    <form id='pantryItemForm' onSubmit={handleSubmit}>
      <label>Item Name:
        <input type='text' name='title' id='title' required onChange={(e) => setTitle(e.target)} />
      </label>
      <label>Quantity:
        <input type='number' name='qty' id='qty' required onChange={(e) => setQty(e.target)} />
      </label>
      <label>Expiration Date:
        <input type='date' name='expiry' id='expiry' required onChange={(e) => setExpiry(e.target)} />
      </label>
      <input type='submit' value='Add Item' />
    </form>
  );
};

export default PantryItemForm;