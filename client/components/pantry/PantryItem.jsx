import React from 'react';
import { getRelativeTime } from '../../utils/format.js';

const PantryItem = (props) => {

  return (
    <div className='pantryItem listEntry'>
      <span className='listEntryTitle'>{props.item.title}</span>
      <span className='listEntryQty'>{props.item.qty}</span>
      <span className='listEntryDate'>{getRelativeTime(props.item.expiry)}</span>
    </div>
  );
};

export default PantryItem;