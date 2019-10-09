import * as React from "react";

// 创建类型接口
export interface Iprops {
  value?: number;
  decrement: any;
  setInputValue: any;
}

interface State {
  inputVal: number;
}

// 使用接口代替 PropTypes 进行类型校验
export default class Counter extends React.PureComponent<Iprops, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      inputVal: 0
    };
  }

  public handleInputChange = (e: any): void => {
    const { setInputValue } = this.props;
    this.setState({
      inputVal: e.target.value
    });
    setInputValue(e.target.value);
  };

  public render() {
    const { value, decrement, setInputValue } = this.props;
    const { inputVal } = this.state;
    return (
      <p>
        <button onClick={() => decrement(1)}> - </button>
        <button onClick={() => setInputValue(5)}> + </button>
        <p>
          <input type="text" value={inputVal} onChange={this.handleInputChange} />
        </p>
        刚才输入为：{value}
      </p>
    );
  }
}
