import React from 'react';
import {configureStore} from './lib';
import {Provider} from 'react-redux';
import './App.css';
import AppPresenter from './components/AppPresenter';

function App() {
  return (
    <Provider store={configureStore()}>
      <div className="App">
        <AppPresenter />
      </div>
    </Provider>
  );
}

export default App;
