import * as React from 'react';
import './App.css';
 
// 引入 container 组件 CountCon
import Count from './container/Counter';
// import logo from './logo.svg';
 
class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Count />
      </div>
    );
  }
}
 
export default App;