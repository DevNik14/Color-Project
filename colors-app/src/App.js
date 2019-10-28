import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Palette from './Palette.js';
import seedColors from './seedColors.js';
import { generatePalette } from './colorHelpers';

function App() {
  return (
    <Switch>
      <Route exact path="/" render={() => <h1>Home</h1>}/>
      <Route exact path="/palette/:id" render={() => <h1>Individual Palette</h1>}/>
    </Switch>
    // <div>
    //   <Palette palette={generatePalette(seedColors[4])} />
    // </div>
  );
}

export default App;
