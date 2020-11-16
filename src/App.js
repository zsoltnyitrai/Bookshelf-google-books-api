import './App.css';
import Header from './components/Header'
import Home from './components/Home'
import Menu from './components/Menu'

import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Route path='/menu' exact component={Menu}/>
        <Route path='/' exact component={Home}/>


      </Router>
      
    </div>
  );
}

export default App;
