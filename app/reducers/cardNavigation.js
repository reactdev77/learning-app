import { cardStackReducer } from 'react-native-navigation-redux-helpers';
import { Platform } from 'react-native';

const initialState = {
  key: 'global',
  index: 0,
  routes: [
    {
      key: (Platform.OS === 'android') ? 'splashscreen' : 'login',
      index: 0,
    },
  ],
};

module.exports = cardStackReducer(initialState);
