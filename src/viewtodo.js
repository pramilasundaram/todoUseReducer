import { useContext } from "react";
import { Container, Alert, Button, Row, Col } from "reactstrap";
import {
  completedtodo,
  Inprogresstodo,
  cRemovetodos,
  iRemovetodos,
  aRemovetodos
} from "./Actions.type";
import context from "./context";
export default function Viewtodo() {
  const { state, dispatch } = useContext(context);
  return (
    <Container className="mt-4">
      <Row>
        <Col xs="4">
          <h4>All TODOs</h4>
          {state.todo.map((item) => {
            return (
              <Alert color="primary" key={item.id}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center"
                  }}
                >
                  <div> {item.value}</div>
                  <div>
                    <Button
                      color="info"
                      onClick={() =>
                        dispatch({ type: Inprogresstodo, payload: item.id })
                      }
                    >
                      move to progress
                    </Button>
                    <Button
                      color="danger"
                      onClick={() =>
                        dispatch({ type: aRemovetodos, payload: item.id })
                      }
                    >
                      delete
                    </Button>
                  </div>
                </div>
              </Alert>
            );
          })}
        </Col>

        <Col xs="4">
          <h4>TODOs Inprogress</h4>
          {state.inprogress.map((items) => {
            return (
              <Alert color="secondary" key={items.id}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center"
                  }}
                >
                  <div>{items.value}</div>
                  <div>
                    <Button
                      color="danger"
                      onClick={() =>
                        dispatch({ type: iRemovetodos, payload: items.id })
                      }
                    >
                      delete
                    </Button>
                    <Button
                      style={{ float: "right" }}
                      color="success"
                      onClick={() =>
                        dispatch({ type: completedtodo, payload: items.id })
                      }
                    >
                      completed
                    </Button>
                  </div>
                </div>
              </Alert>
            );
          })}
        </Col>
        <Col xs="4">
          <h4>Completed TODOs</h4>
          {state.completed.map((value) => {
            return (
              <Alert color="secondary" key={value.id}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center"
                  }}
                >
                  {value.value}
                  <Button
                    color="danger"
                    onClick={() =>
                      dispatch({ type: cRemovetodos, payload: value.id })
                    }
                  >
                    delete
                  </Button>
                </div>
              </Alert>
            );
          })}
        </Col>
      </Row>
    </Container>
  );
}
