 // React imports
import React from 'react';
//import Order component
import Order from './Order.jsx'
import Home from './Home.jsx'
import {BrowserRouter, Route} from 'react-router-dom';

//App controls the main router route

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
      {/*creates route to home*/}
        <div>
          <Route exact={true} path='/' render={() => (
            <div className="App">
              <Home />
            </div>
          )}/>
        </div>
        {/*creates route to /order */}
        <div>
          <Route exact={true} path='/order' render={() => (
            <div className="Order">
              <Order />
            </div>
          )}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;