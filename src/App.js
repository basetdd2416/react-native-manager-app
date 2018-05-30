import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyCpbZlZMTsWvGY0liXH3zAkDhzzsufZZVk',
      authDomain: 'manager-ba970.firebaseapp.com',
      databaseURL: 'https://manager-ba970.firebaseio.com',
      projectId: 'manager-ba970',
      storageBucket: 'manager-ba970.appspot.com',
      messagingSenderId: '216887867079'
    };
    firebase.initializeApp(config);
  }
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
