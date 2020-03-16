import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { auth, createUserProfile } from './config-files/firebase/firebase.utils';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shoppage/shoppage.component';
import SigninSignupPage from './pages/signin-signup-page/signin-signup-page';
import CheckoutPage from './pages/checkout/checkout';

import Header from './components/header/header.component';
import Loader from './components/loader/loader.component';

import { setCurrentUser } from './redux/user/user.actions';
import { toggleLoader } from './redux/loader/loader.actions';

import './App.scss';

class App extends React.Component {

  unsubscribeAuth = null;

  componentDidMount() {
    const { setCurrentUser, toggleLoader } = this.props;
    // toggleLoader(true);
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
    const { currentUser } = this.props;
    return (
      <>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/checkout" component={CheckoutPage} />
          <Route exact path="/signin" render={() => currentUser ? (<Redirect to="/" />) : (<SigninSignupPage />)} />
        </Switch>
        <Loader />
      </>
    );
  }
}

const mapStateToProps = (state) => (
  {
    currentUser: state.user.currentUser
  }
)

const mapDispatchToProps = (dispatch) => (
  {
    setCurrentUser: user => dispatch(setCurrentUser(user)),
    toggleLoader: payload => dispatch(toggleLoader(payload))
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(App);
