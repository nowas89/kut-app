import React, { Component } from 'react';

import Menu from './containers/menu/Menu'
import Karty from './containers/Karty/Karty'

class App extends Component {
  render() {
    return (
      <div className="App">
       <Menu />
       <div>
         <Karty />
       </div>
      </div>
    );
  }
}

export default App;
