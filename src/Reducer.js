import {
  Addtodo,
  completedtodo,
  Inprogresstodo,
  cRemovetodos,
  iRemovetodos,
  aRemovetodos
} from "./Actions.type";
export default function Reducer(state, action) {
  switch (action.type) {
    case Addtodo:
      return { ...state, todo: [...state.todo, action.payload] };
    case Inprogresstodo:
      let obj = state.todo.find((value) => value.id === action.payload);
      let rem = state.todo.filter((value) => value.id !== action.payload);
      let tempstate = {
        ...state,
        inprogress: [...state.inprogress, obj],
        todo: rem
      };
      return tempstate;
    case completedtodo:
      let object = state.inprogress.find(
        (value) => value.id === action.payload
      );
      let remove = state.inprogress.filter(
        (value) => value.id !== action.payload
      );
      let temp = {
        ...state,
        completed: [...state.completed, object],
        inprogress: remove
      };
      return temp;
    case cRemovetodos:
      return {
        ...state,
        completed: state.completed.filter(
          (value) => value.id !== action.payload
        )
      };
    case iRemovetodos:
      return {
        ...state,
        inprogress: state.inprogress.filter(
          (value) => value.id !== action.payload
        )
      };
    case aRemovetodos:
      return {
        ...state,
        todo: state.todo.filter((value) => value.id !== action.payload)
      };

    default:
      return state;
  }
}
