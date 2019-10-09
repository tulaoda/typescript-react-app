import { Immutable, ImmutableUtils } from "immutable-typescript";
import { DECREMENT, SET_INPUT_VALUE } from "../actions/actionTypes";
import { CounterMainReducer } from "../types/index";
import { Actions } from "./../actions/actionTypes";

const initState: Immutable<CounterMainReducer> = ImmutableUtils.asImmutable({
  value: 0
});

export default (state: Immutable<CounterMainReducer> = initState, action: Actions): Immutable<CounterMainReducer> => {
  switch (action.type) {
    case SET_INPUT_VALUE:
      return ImmutableUtils.update(state).set("value", action.value);
    case DECREMENT:
      return ImmutableUtils.update(state).set("value", action.value);
    default:
      return state;
  }
};
