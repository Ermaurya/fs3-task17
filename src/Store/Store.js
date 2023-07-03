import { legacy_createStore as createStore } from "redux";
import myReducer from "../Reducers/reducer";

let store = createStore(myReducer);

store.subscribe(() => {
  console.log(store.getState());
});

export default store;
