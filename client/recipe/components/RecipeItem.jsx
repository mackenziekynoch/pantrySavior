import React, { useState } from 'react';
// import { changeQty, changeExpiry } from '../../redux/pantrySlice';
import _ from 'lodash';

const RecipeItem = (props) => {

  return (
    <div className='recipeItem listEntry'>
      <span className='listEntryTitle'>{props.item.title}</span>
      <span className='listEntryQty'>{props.item.qty}</span>
      <span className='listEntryDate'>{getRelativeTime(props.item.expiry)}</span>
    </div>
  );
};

export default RecipeItem;