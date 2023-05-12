/**
 * @author aha
 * @version wtfpl, version 2
 * @description .
 */
import { DATA_LOADED } from '../constants/action-types'

/**
 * IState.
 */
interface IState {
  articles: any[]
}

/**
 * @constant
 */
const initialState:IState = {
  articles: []
}

/**
 * rootReducer.
 *
 * @param {} state
 * @param {} action
 * @returns {any}
 */
function rootReducer (state = initialState, action): any {
  if (action.type === DATA_LOADED) {
    return Object.assign({}, state, {
      articles: state.articles.concat(action.payload)
    })
  }
  return state
}

export default rootReducer


/// EOF
