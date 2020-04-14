// For useReducers Hook

import React, { useReducer } from 'react';
import './App.css';
import DataFetchingOne from './components/useReducer/DataFetchingOne';
import DataFetchingTwo from './components/useReducer/DataFetchingTwo';

export const CountContext = React.createContext();

// const initialState = 0;
// const reducer = (state, action) => {
//   switch (action) {
//     case 'increment':
//       return state + 1;
//     case 'decrement':
//       return state - 1;
//     case 'reset':
//       return initialState;
//     default:
//       return state;
//   }
// }

function App() {

  // const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="App">
      {/* <DataFetchingOne /> */}
      <DataFetchingTwo/>
    </div>

    // For useReducer in components A, D and F
    // <CountContext.Provider value={{ countState: count, countDispatch: dispatch }}>
    //   <div className="App">
    //     Count - {count}
    //     <ComponentA />
    //     <ComponentB />
    //     <ComponentC />
    //   </div>
    // </CountContext.Provider>
  );
}

export default App;
