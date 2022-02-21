import React, { useReducer } from "react"

import { StateContext, stateInitial } from "./contexts/useStateContext"
import useReducerState from "./contexts/useReducerState"
import RoutesNavigator from "./routes/RoutesNavigator"

function App() {
  const [state, dispatch] = useReducer(useReducerState, stateInitial);

  return (
    <StateContext.Provider value={{ state, dispatch }}>
      <RoutesNavigator />
    </StateContext.Provider>
  );
}

export default App;

//npm install --save-dev axios yup formik styled-components react-router-dom
