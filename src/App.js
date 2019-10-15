import React from 'react';
import './App.css';
import {Route} from 'react-router-dom'
import HomePage from './pages/HomePage.component';
import ShopPage from './pages/ShopPage.component';


function App() {
  return (
    <div className="App">
      <Route exact path='/shop' component={ShopPage}/>
      <Route exact path='/' component={HomePage}/>
    </div>
  );
}

export default App;
