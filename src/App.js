import './App.css';
import Header from './components/Header'
import Home from './components/Home'
import Menu from './components/Menu'
import Books from './components/Books'
import Footer from './components/Footer'

import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'

function App() {
  return (
      <Router>
        <div className="App">
          <Switch>
            {/* This is the hamburger popup */}
            <Route path='/menu' exact component={Menu}></Route>

            {/* This is the main menu */}
            <Route path='/' exact component={Home}>
              <Header/>
              <Home/>
              <Footer/>
            </Route>

            {/* This is the books page */}
            <Route path='/books' exact component={Books}>
              <Header/>
              <Books/>
              <Footer/>
            </Route>

          </Switch>
        </div>
      </Router>
  );
}

export default App;
