import React, { useState } from 'react';
import { getRelativeTime } from '../../utils/format.js';
import { useDispatch } from 'react-redux';
import { changeQty, changeExpiry } from '../../redux/pantrySlice';
import _ from 'lodash';

const PantryItem = (props) => {
  const dispatch = useDispatch();
  const [editExpiry, setEditExpiry] = useState(false);
  const [editQty, setEditQty] = useState(false);

  const handleExpiryChange = (e) => {
    e.preventDefault();
    setEditExpiry(false);
    const data = _.cloneDeep(props.item);
    data.expiry = e.target[0].value;
    dispatch(changeExpiry(data));
  }

  const handleQtyChange = (e) => {
    e.preventDefault();
    setEditQty(false);
    const data = _.cloneDeep(props.item);
    data.qty = e.target[0].value;
    dispatch(changeQty(data));
  }

  return (
    <div className='pantryItem listEntry'>
      <span className='listEntryTitle'>{props.item.title}</span>
      { editQty &&
        <form id='editQtyForm' onSubmit={handleQtyChange}>
          <input type='number' name='qty' id='qty' />
          <input type='submit' value='Change Quantity' />
        </form>
      }
      { !editQty &&
        <span className='listEntryQty' onClick={e => setEditQty(true)}>{props.item.qty}</span>
      }
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