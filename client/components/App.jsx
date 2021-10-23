import React, {useEffect, useState} from 'react';
import PantryList from './pantry/PantryList.jsx';
// for testing
import data from '../../database/specData.js';


const App = (props) => {
  return (
    <div>
      <PantryList items={data} />
    </div>
  );
};

export default App;