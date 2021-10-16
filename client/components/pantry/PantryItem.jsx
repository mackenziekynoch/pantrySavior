import React from 'react';

const PantryItem = (props) => {

  return (
    <div className='pantryItem listEntry'>
      <span className='listEntryTitle'>{props.item.title}</span>
      <span className='listEntryQty'>{props.item.qty}</span>
      <span className='listEntryDate'>{props.item.expiry}</span>
    </div>
  );
};

export default PantryItem;