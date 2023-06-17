import { Container, InputGroup, Input, Button } from "reactstrap";
import { useContext, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import Context from "./context";
import { Addtodo } from "./Actions.type";
export default function Todoform() {
  const inputRef = useRef();
  const { dispatch } = useContext(Context);
  const handleSubmit = () => {
    if (inputRef.current.value) {
      let todo = { id: uuidv4(), value: inputRef.current.value };
      dispatch({
        type: Addtodo,
        payload: todo
      });
    }

    inputRef.current.value = "";
  };
  return (
    <Container>
      <InputGroup>
        <Input innerRef={inputRef} />
        <Button color="warning" onClick={handleSubmit}>
          Add todo
        </Button>
      </InputGroup>
    </Container>
  );
}
