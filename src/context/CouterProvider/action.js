import * as types  from '../actions/types';

export const incrementCounter = (dispatch) => {
  dispatch({ type: types.INCREMENT_COUNTER, payload: });
};
export const decrementCounter = (dispatch) => {
  dispatch({ type: types.DECREMENT_COUNTER, payload: });
};
