import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise'
import reducers from 'reducers';

//<Provider store={createStore(reducers, {})}>  allows us to store data globally in the App
export default ( { children, initialState = {} }) => {
  const store = createStore(
    reducers,
    initialState,
    applyMiddleware(reduxPromise)
  )

  return (
    <Provider store={store}>{children}</Provider>
  )
}

//ALTERNATIVE

// export default props => {
//   return (
//     <Provider store={createStore(reducers, props.initialState )}>
//      {props.children}
//     </Provider>
//   )
// }
