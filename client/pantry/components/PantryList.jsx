import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import PantryItem from './PantryItem.jsx';
import PantryItemForm from './PantryItemForm.jsx';

const PantryList = (props) => {
  const [ editing, setEditing ] = useState(false);
  const pantryItems = useSelector(state => state.pantry.ids.map(id => state.pantry.entities[id]));

  return (
    <main id='pantryList' className='container-main'>
      {pantryItems.map(item =>
        <PantryItem key={item.id} item={item} />
      )}
      { !editing &&
        <button id='addPantryItem' className='circle-button' onClick={() => setEditing(true)}>+</button>
      }
      { editing &&
        <PantryItemForm resetEditing={setEditing} />
      }
    </main>
  );
};

export default PantryList;