import './App.css';
import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Menu from './componentes/Menu'
import Motoqueiros from './componentes/Motoqueiros'
import Motos from './componentes/Motos'

function App() {

  return (
    <Router>
      <div className="App">
        
        <Menu />

        <main>
          <Switch>
            <Route path="/" exact>
              <p>home..</p>
            </Route>
            <Route path="/motoqueiros">
              <Motoqueiros />
            </Route>
            <Route path="/motos">
              <Motos />
            </Route>
          </Switch>
        </main>

      </div>
    </Router>
  );
}

export default App;
