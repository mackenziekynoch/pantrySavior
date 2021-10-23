import React from 'react';

import PantryItem from './PantryItem.jsx';

const PantryList = (props) => {

  return (
    <main id='pantryList' className='container-main'>
      {props.items.map(item =>
        <PantryItem key={item.id} item={item} />
      )}
      <button id='addPantryItem' className='circle-button' onClick={() => console.log('adding!')}>Add</button>
    </main>
  );
};

export default PantryList;