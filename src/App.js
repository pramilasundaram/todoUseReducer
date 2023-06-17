import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useReducer } from "react";
import Todoform from "./todoform";
import Context from "./context";
import Reducer from "./Reducer";
import Viewtodo from "./viewtodo";
export default function App() {
  let initialvalue = {
    todo: [],
    inprogress: [],
    completed: []
  };
  const [state, dispatch] = useReducer(Reducer, initialvalue);
  return (
    <div className="App m-4">
      <Context.Provider value={{ state, dispatch }}>
        <Todoform />
        <Viewtodo />
      </Context.Provider>
    </div>
  );
}
