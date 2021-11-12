import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { addPantryItem } from '../../redux/pantrySlice';

const RecipeItemForm = (props) => {
  // const dispatch = useDispatch();
  // const lastId = useSelector(state => Math.max(...state.pantry.ids, -1));

  const [page, setPage] = useState('name');

  const handleSubmit = (e) => {
    e.preventDefault();
    props.resetEditing(false);

    const newItem = {
      id: lastId + 1,
      title,
      qty,
      expiry
    };

    // dispatch(addPantryItem(newItem));
  };

  const continueJourney = (next) => {
    setPage(next);
  }

  return (
    <form id='recipeItemForm' onSubmit={handleSubmit}>
      { page === 'name' &&
        <namePage />
      }
      { page === 'cuisines' &&
        <cuisinePage />
      }
      {/* <input type='submit' value='Add Recipe' /> */}
    </form>
  );
};

const namePage = (props) => {
  return (
    <>
      <label>Recipe Title:
        <input type='text' name='title' id='title' required />
      </label>
      <label>Image:
        <input type='image' name='image' id='image' />
      </label>
      <label>Servings:
        <input type='number' name='servings' id='servings' required />
      </label>
      <label>Ready in Minutes:
        <input type='number' name='cookTime' id='cookTime' />
      </label>
      <input type='button' value='Cancel' />
      <input type='button' value='Next' onClick={e => continueJourney('cuisines')} />
    </>
  );
}

const cuisinePage = (props) => {
  return (
    <>
      <label>Cuisines:
        <select id='cuisines' name='cuisines'>
          <option value='african'>African</option>
          <option value='american'>American</option>
          <option value='british'>British</option>
          <option value='cajun'>Cajun</option>
          <option value='caribbean'>Caribbean</option>
          <option value='chinese'>Chinese</option>
          <option value='eastEuro'>Eastern European</option>
          <option value='european'>European</option>
          <option value='french'>French</option>
          <option value='german'>German</option>
          <option value='greek'>Greek</option>
          <option value='indian'>Indian</option>
          <option value='irish'>Irish</option>
          <option value='italian'>Italian</option>
          <option value='japanese'>Japanese</option>
          <option value='jewish'>Jewish</option>
          <option value='korean'>Korean</option>
          <option value='latAmerican'>Latin American</option>
          <option value='mediterranean'>Mediterranean</option>
          <option value='mexican'>Mexican</option>
          <option value='middleEast'>Middle Eastern</option>
          <option value='nordic'>Nordic</option>
          <option value='southern'>Southern</option>
          <option value='spanish'>Spanish</option>
          <option value='thai'>Thai</option>
          <option value='vietnamese'>Vietnamese</option>
        </select>
      </label>
      <label>Dairy Free:
        <input type='checkbox' name='df' id='df' />
      </label>
      <label>Gluten Free:
        <input type='checkbox' name='gf' id='gf' />
      </label>
      <label>Ketogenic:
        <input type='checkbox' name='keto' id='keto' />
      </label>
      <label>Low FODMAP:
        <input type='checkbox' name='fodmap' id='fodmap' />
      </label>
      <label>Sustainable:
        <input type='checkbox' name='sustainable' id='sustainable' />
      </label>
      <label>Vegan:
        <input type='checkbox' name='vegan' id='vegan' />
      </label>
      <label>Vegetarian:
        <input type='checkbox' name='vegetarian' id='vegetarian' />
      </label>
      <label>Whole30:
        <input type='checkbox' name='whole30' id='whole30' />
      </label>
      <label>Meal Type:
        <select name='mealType' id='mealType'>
          <option value='breakfast'>Breakfast</option>
          <option value='lunch'>Lunch</option>
          <option value='dinner'>Dinner</option>
          <option value='snack'>Snack</option>
          <option value='side'>Side</option>
        </select>
      </label>
      <input type='button' value='Back' onClick={e => continueJourney('name')} />
      <input type='button' value='Cancel' />
      <input type='button' value='Next' onClick={e => continueJourney('ingredients')} />
    </>
  );
}

export default RecipeItemForm;