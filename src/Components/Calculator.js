import React, { useState } from "react";
import "../Css/Calculator.css";

const Calculator = () => {
  const [data, setdata] = useState({
    input1: "",
    input2: "",
    error: false,
    success: false,
    errorMsg: "",
    result: "",
  });
  const handleChange = (e) => {
    const targetField = e.target.name;
    const targetValue = e.target.value;
    setdata({
      ...data,
      [targetField]: targetValue,
    });
  };
  const handleOperations = (e) => {
    const operator = e.target.value;
    const digitsRegex = /^\d+$/;

    if (data.input1 === "" || data.input2 === "") {
      setdata({
        ...data,
        error: true,
        errorMsg: `Error: ${data.input1 === "" ? "Number 1" : "Number 2"} can not be empty!!`,
        success: false,
      });
    } else if (!digitsRegex.test(data.input1) || !digitsRegex.test(data.input2)) {
      setdata({
        ...data,
        error: true,
        errorMsg: "Please enter only numeric values",
        success: false,
      });
    } else {
      handleResult(operator);
    }
  };
  const handleResult = (operator) => {
    let result1 = "";
    switch (operator) {
      case "+":
        result1 = Number(data.input1) + Number(data.input2);
        break;
      case "-":
        result1 = Number(data.input1) - Number(data.input2);
        break;
      case "*":
        result1 = Number(data.input1) * Number(data.input2);
        break;
      case "/":
        result1 = Number(data.input1) / Number(data.input2);
        break;
      default:
        result1 = "";
    }

    setdata({
      ...data,
      error: false,
      success: true,
      errorMsg: "Success : Your result is shown above!",
      result: result1,
    });
    console.log(data);
  };
  return (
    <div className="calculatorContainer">
      <h2 className="SecTitle">React Calculator</h2>
      <div className="inputContainer">
        <label htmlFor="value1">Enter First Number</label>
        <input type="text" name="input1" id="value1" value={data.input1} onInput={handleChange} />
      </div>
      <div className="inputContainer">
        <label htmlFor="value2">Enter Second Number</label>
        <input type="text" name="input2" id="value2" value={data.input2} onInput={handleChange} />
      </div>
      {data.success && <p className="Result">Result = {data.result}</p>}
      {data.error && <p className="errMsg">{data.errorMsg}</p>}
      {data.success && <p className="successMsg">{data.errorMsg}</p>}
      <div className="btnContainer" onClick={handleOperations}>
        <button type="button" value={"+"}>
          +
        </button>
        <button type="button" value={"-"}>
          -
        </button>
        <button type="button" value={"*"}>
          *
        </button>
        <button type="button" value={"/"}>
          /
        </button>
      </div>
    </div>
  );
};

export default Calculator;
