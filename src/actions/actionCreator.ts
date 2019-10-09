import { Actions, DECREMENT, SET_INPUT_VALUE } from "./actionTypes";

export default {
  decrement: (value: number): Actions => ({
    type: DECREMENT,
    value
  }),
  setInputValue: (value: number): Actions => ({
    type: SET_INPUT_VALUE,
    value
  })
};
