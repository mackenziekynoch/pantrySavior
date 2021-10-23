import React, { useState } from 'react';

import PantryItem from './PantryItem.jsx';
import PantryItemForm from './PantryItemForm.jsx';

const PantryList = (props) => {
  const [ editing, setEditing ] = useState(false);

  return (
    <main id='pantryList' className='container-main'>
      {props.items.map(item =>
        <PantryItem key={item.id} item={item} />
      )}
      <button id='addPantryItem' className='circle-button' onClick={() => setEditing(true)}>+</button>
      { editing &&
        <PantryItemForm resetEditing={setEditing} />
      }
    </main>
  );
};

export default PantryList;