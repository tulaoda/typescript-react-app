// 定义增加 state 类型常量
export const SET_INPUT_VALUE = "SET_INPUT_VALUE";

// 定义减少 state 类型常量
export const DECREMENT = "DECREMENT";

export interface Actions {
  type: string;
  value: number;
}
