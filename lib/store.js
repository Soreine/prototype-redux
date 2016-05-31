const Redux = require('redux');
var ReduxAsyncQueue = require('redux-async-queue').default;

const reducers = require('./reducers');

var store = Redux.createStore(
    reducers.counter, // reducer
    undefined, // initialState (defined in reducers)
    Redux.applyMiddleware(ReduxAsyncQueue)
);


module.exports = store;
