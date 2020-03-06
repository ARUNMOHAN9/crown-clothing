import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import { auth, createUserProfile } from './config-files/firebase/firebase.utils';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shoppage/shoppage.component';
import Header from './components/header/header.component';
import SigninSignupPage from './pages/signin-signup-page/signin-signup-page';
import {setCurrentUser} from './redux/user/user.actions';

import './App.scss';

class App extends React.Component {

  unsubscribeAuth = null;

  componentDidMount() {
    const {setCurrentUser} = this.props;
    this.unsubscribeAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfile(userAuth);
        userRef.onSnapshot(snapshot => {
          setCurrentUser({
              id: snapshot.id,
              ...snapshot.data()
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeAuth();
  }

  render() {
    return (
      <>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/signin" component={SigninSignupPage} />
        </Switch>
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => (
  {
    setCurrentUser: user => dispatch(setCurrentUser(user))
  }
);

export default connect(null, mapDispatchToProps)(App);
