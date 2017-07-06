import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { Root } from 'native-base';
import { StackNavigator } from 'react-navigation';

import reducers from './src/reducers';

import LoginPage from './src/components/LoginPage';
import Routes from './src/routes';

export default class App extends React.Component {
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Root>
          <AppNavigator />
        </Root>
      </Provider>
    );
  }
}

const AppNavigator = StackNavigator(
  {
    LoginPage: { screen: LoginPage },
    Routes: { screen: Routes }
  },
  {
    initialRouteName: "LoginPage",
    headerMode: "none"
  }
);