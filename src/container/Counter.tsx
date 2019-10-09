import { connect } from "react-redux";
import { createSelector } from "reselect";
import actionCreator from "../actions/actionCreator";
import Counter from "../components/Counter";
import { CounterMainReducer } from "../types";

const reducer: any = (state: any): any => state;

const selector: any = createSelector(
  [reducer],
  (counterMainReducer: CounterMainReducer): CounterMainReducer => {
    const { value } = counterMainReducer;
    return {
      value
    };
  }
);

export default connect(
  selector,
  actionCreator
)(Counter);
