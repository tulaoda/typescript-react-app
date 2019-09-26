import { ModifyAction } from '../actions/actionCreator';

import { DECREMENT, INCREMENT } from '../actions/actionTypes';
 
 
// 处理并返回 state 
export default (state = 0, action: ModifyAction): number => {
    switch (action.type) {
      case INCREMENT:
        return state + 1
      case DECREMENT:
        return state - 1
      default:
        return state
    }
}