import React, { useState } from 'react';
import { useSelector } from 'react-redux';

//testing
import data from '../../../database/recipeData.js';

import RecipeItem from './RecipeItem.jsx';
import RecipeItemForm from './RecipeItemForm.jsx';

const RecipeList = (props) => {
  const [ editing, setEditing ] = useState(false);
  const recipeItems = useSelector(state => state.recipes.ids.map(id => state.pantry.entities[id]));

  return (
    <main id='recipeList' className='container-main'>
      {data.map(item =>
        <RecipeItem key={item.id} item={item} />
      )}
      { !editing &&
        <button id='addRecipeItem' className='circle-button' onClick={() => setEditing(true)}>+</button>
      }
      { editing &&
        <RecipeItemForm resetEditing={setEditing} />
      }
    </main>
  );
};

export default RecipeList;