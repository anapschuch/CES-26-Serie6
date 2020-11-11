import React, { Component } from "react";
import './Calculator.css';

// se o resultado for inválido, retorna um componente indicando erro
// caso contrario, retorna o resultado com até 8 casas decimais
const displayResult = (result) => {
    if (result === undefined) {
        return (
            <td colSpan="4" className="displayResult">Erro</td>
        );
    } else {
        return (
            <td colSpan="4" className="displayResult">{+result.toFixed(8)}</td>
        );
    }
}


class Calculator extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <meta charset="utf-8" />
                    <table className="tableDisplay" >
                        <tr>
                            <td colSpan="4" className="displayExpression">{this.props.display}</td>
                        </tr>
                    </table>
                    <table className="tableDisplay" >
                        <tr className="resultLine">
                            {displayResult(this.props.result)}
                        </tr>
                    </table>
                    <table className="tableOp" >
                        <tr>
                            <td><button className="buttons" onClick={() => this.props.numberPressed("7")}>7</button></td>
                            <td><button className="buttons" onClick={() => this.props.numberPressed("8")}>8</button></td>
                            <td><button className="buttons" onClick={() => this.props.numberPressed("9")}>9</button></td>
                            <td><button className="buttons" onClick={() => this.props.operationPressed("x")}>x</button></td>
                        </tr>
                        <tr>
                            <td><button className="buttons" onClick={() => this.props.numberPressed("4")}>4</button></td>
                            <td><button className="buttons" onClick={() => this.props.numberPressed("5")}>5</button></td>
                            <td><button className="buttons" onClick={() => this.props.numberPressed("6")}>6</button></td>
                            <td><button className="buttons" onClick={() => this.props.operationPressed("-")}>-</button></td>
                        </tr>
                        <tr>
                            <td><button className="buttons" onClick={() => this.props.numberPressed("1")}>1</button></td>
                            <td><button className="buttons" onClick={() => this.props.numberPressed("2")}>2</button></td>
                            <td><button className="buttons" onClick={() => this.props.numberPressed("3")}>3</button></td>
                            <td><button className="buttons" onClick={() => this.props.operationPressed("/")}>&#247;</button></td>
                        </tr>
                        <tr>
                            <td><button className="buttons" onClick={() => this.props.numberPressed("0")} >0</button></td>
                            <td><button className="buttons" onClick={() => this.props.numberPressed(".")}>.</button></td>
                            <td><button className="buttons" onClick={() => this.props.equalPressed()}>=</button></td>
                            <td><button className="buttons" onClick={() => this.props.operationPressed("+")} >+</button></td>
                        </tr>

                        <tr>
                            <td colSpan="4"><button className="buttonClear" onClick={() => this.props.clearPressed()} >Limpar</button></td>
                        </tr>
                    </table>
                </div>
            </div>
        )
    }
}

export default Calculator;