import { connect } from "react-redux"
import Calculator from "./Calculator";

// display: o que deve ser mostrado como expressão numérica
// result: resultado do cálculo
// enquanto o usuário não clica em =, o resultado é 0 (zero)
function mapStateToProps(state) {
  return {
    display: state.displayE,
    result: state.result
  };
}

// ações
function mapDispatchToProps(dispatch) {
  return {
    numberPressed: (number) => {
      return dispatch({
        type: "number",
        pressed: number
      })
    },
    operationPressed: (op) => {
      return dispatch({
        type: "op",
        pressed: op
      })
    },
    equalPressed: () => {
      return dispatch({
        type: "equal"
      })
    },
    clearPressed: () => {
      return dispatch({
        type: "clear"
      })
    }
  };
}

var connectedComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(Calculator);

export default connectedComponent;
