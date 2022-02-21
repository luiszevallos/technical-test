import { createContext } from "react"

const stateInitial = {
  user: undefined,
  token: undefined
}

const StateContext = createContext(stateInitial);

export { StateContext, stateInitial };