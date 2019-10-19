import React from 'react';
import './App.css';
import {Route} from 'react-router-dom'
import HomePage from './pages/HomePage.component';
import ShopPage from './pages/ShopPage.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up.component'
import Header from './components/header/header.component';


function App() {
  return (
    <div className="App">
      <Header />
      <switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/shop' component={ShopPage}/>
        <Route path='/signin' component={SignInAndSignUpPage}/>
      </switch>
    </div>
  );
}

export default App;
