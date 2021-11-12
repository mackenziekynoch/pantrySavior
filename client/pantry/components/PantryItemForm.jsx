import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addPantryItem } from '../redux/pantrySlice';

const PantryItemForm = (props) => {
  const dispatch = useDispatch();
  const lastId = useSelector(state => Math.max(...state.pantry.ids, -1));

  const [ title, setTitle ] = useState('');
  const [ qty, setQty ] = useState(1);
  const [ expiry, setExpiry ] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    props.resetEditing(false);

    const newItem = {
      id: lastId + 1,
      title,
      qty,
      expiry
    };

    dispatch(addPantryItem(newItem));
  };

  return (
    <form id='pantryItemForm' onSubmit={handleSubmit}>
      <label>Item Name:
        <input type='text' name='title' id='title' required onChange={(e) => setTitle(e.target.value)} />
      </label>
      <label>Quantity:
        <input type='number' name='qty' id='qty' required onChange={(e) => setQty(e.target.value)} />
      </label>
      <label>Expiration Date:
        <input type='date' name='expiry' id='expiry' required onChange={(e) => setExpiry(e.target.value)} />
      </label>
      <input type='submit' value='Add Item' />
    </form>
  );
};

export default PantryItemForm;