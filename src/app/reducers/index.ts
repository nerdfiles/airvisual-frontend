import { DATA_LOADED } from '../constants/action-types';

interface IState {
  articles: any[]
}

const initialState:IState = {
  articles: []
};

function rootReducer(state = initialState, action): any {
  if (action.type === DATA_LOADED) {
    return Object.assign({}, state, {
      articles: state.articles.concat(action.payload)
    });
  }
  return state;
}

export default rootReducer;



