import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component.jsx';
import SignInSignUpPage from './pages/sign-in-sign-up/sign-in-sign-up.component';
import Header from './components/header/header.component';
import { auth, bikinDocProfilUser } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.action' ;

class App extends React.Component {

  // CONSTRUCTOR INI UDAH GA PERLU DIPAKE KARENA UDAH ADA REDUX DAN setCurrentUser
  // constructor() {
  //   super();

  //   this.state = {
  //     userAktif: null
  //   };
  // };

  keluarDariAuth = null;

  componentDidMount() {

    const {setCurrentUser} = this.props;

    this.keluarDariAuth = auth.onAuthStateChanged( async userAuth => {
      if (userAuth) {

        const referensiUser = await bikinDocProfilUser(userAuth);

        referensiUser.onSnapshot(snapShot => {
          setCurrentUser(
            {
              id: snapShot.id,
              ...snapShot.data()             
            }, 
            () => { // TIDAK PERLU, BOLEH DIHAPUS
              console.log(this.state); // TIDAK PERLU, BOLEH DIHAPUS
            } // TIDAK PERLU, BOLEH DIHAPUS
          );

          console.log(this.state);// TIDAK PERLU, BOLEH DIHAPUS
          
        });

      } else {

        setCurrentUser( userAuth )

      };

    
      // this.setState( {userAktif: user} );
  

      // console.log(user);
    });
  };

  componentWillUnmount() {
    this.keluarDariAuth();
  }

  render() {

    return (
      <div>
          <Header />
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/shop' component={ShopPage} />
            <Route exact 
              path="/signin" 
              render={ () => this.props.userAktif ? (<Redirect to="/" />) : (<SignInSignUpPage />) 
              }
            />
          </Switch>
      </div>
    );

  }
};

const mapStateToProps = ({ user }) => ({
  userAktif: user.userAktif
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
