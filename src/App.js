// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;




import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Test from './components/main'


class App extends Component {

  render() {
    //render={(props) => <ControlColor/>}
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <div id="root">
          <Switch>
            <Route
              exact path="/"
              render={(props) => <Test {...props} />}
            />
          </Switch>

        </div>
      </Router>
    )
  }
}

export default App;