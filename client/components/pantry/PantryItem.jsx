import React, { useState } from 'react';
import { getRelativeTime } from '../../utils/format.js';
import { useDispatch } from 'react-redux';
import { increment, decrement, changeExpiry } from '../../redux/pantrySlice';
import _ from 'lodash';

const PantryItem = (props) => {
  const dispatch = useDispatch();
  const [editExpiry, setEditExpiry] = useState(false);

  const handleExpiryChange = (e) => {
    e.preventDefault();
    setEditExpiry(false);
    const data = _.cloneDeep(props.item);
    data.expiry = e.target[0].value;
    dispatch(changeExpiry(data));
  }

  return (
    <div className='pantryItem listEntry'>
      <span className='listEntryTitle'>{props.item.title}</span>
      <span className='listEntryQty'>{props.item.qty}</span>
      { editExpiry &&
        <form id='editExpiryForm' onSubmit={handleExpiryChange}>
          <input type='date' name='expiry' id='expiry' />
          <input type='submit' value='Change Date' />
        </form>
      }
      { !editExpiry &&
        <span className='listEntryDate' onClick={(e) => setEditExpiry(true)}>{getRelativeTime(props.item.expiry)}</span>
      }
    </div>
  );
};

export default PantryItem;