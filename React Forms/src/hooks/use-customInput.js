import { useState } from "react";

const useCustomInput = (validateInput) => {
  const [enteredInput, setEnteredInput] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const isEnteredInputValid = validateInput(enteredInput);
  const hasError = !isEnteredInputValid && isTouched;

  const inputChangeHandler = (event) => {
    setEnteredInput(event.target.value);
  };

  const blurChangeHandler = (event) => {
    setIsTouched(true);
  };

  const reset = () => {
    setEnteredInput("");
    setIsTouched(false);
  };

  return {
    value: enteredInput,
    isValid: isEnteredInputValid,
    hasError,
    inputChangeHandler,
    blurChangeHandler,
    reset,
  };
};

export default useCustomInput;
