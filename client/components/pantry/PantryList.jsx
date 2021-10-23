import React from 'react';
import PantryItem from './PantryItem.jsx';

const PantryList = (props) => (
  <main id='pantryList' className='container-main'>
    {props.items.map(item =>
      <PantryItem key={item.id} item={item} />
    )}
    {/* <button id='addPantryItem' className='circle-button' /> */}
  </main>
);

export default PantryList;