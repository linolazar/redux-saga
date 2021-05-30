import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

// redux imports
//reducers are normal functions which get an action. Put simply, reducers get information from the actions and update the state in the store.
import reducer from './store/reducer'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

// using redux saga middleware for async actions.
// generaly we doesnt need this for redux, but if we need any async calls like API .. we can use this.
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/sagas';
const sagaMiddleware = createSagaMiddleware()   

//creating redux store
const store = createStore(reducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga)

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
