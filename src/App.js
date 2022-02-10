import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component.jsx';
import SignInSignUpPage from './pages/sign-in-sign-up/sign-in-sign-up.component';
import Header from './components/header/header.component';
import { auth } from './firebase/firebase.utils'



class App extends React.Component {

  constructor() {
    super();

    this.state = {
      userAktif: null
    };
  };

  keluarDariAuth = null;

  componentDidMount() {
    this.keluarDariAuth = auth.onAuthStateChanged( user => {
      this.setState( {userAktif: user} );

      console.log(user);
    });
  };

  componentWillUnmount() {
    this.keluarDariAuth();
  }

  render() {

    const { state } = this;

    return (
      <div>
          <Header sudahLogin={state.userAktif} />
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/shop' component={ShopPage} />
            <Route path="/signin" component={SignInSignUpPage} />
          </Switch>
      </div>
    );

  }
}

export default App;
