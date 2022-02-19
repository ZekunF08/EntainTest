/**
 * Entain code test App
 * https://github.com/ZekunF08/EntainTest
 * Author: Zekun Fang
 */

import React from 'react';
import {Provider} from 'react-redux';

import MainView from './src/components/MainView';
import {store} from './src/store';

const App = () => {
  return (
    <Provider store={store}>
      <MainView />
    </Provider>
  );
};

export default App;
