import useCustomInput from "../hooks/use-customInput";

const BasicForm = (props) => {
  const {
    value: firstName,
    isValid: firstNameInputIsValid,
    hasError: firstNameHasError,
    inputChangeHandler: firstNameChangeHandler,
    blurChangeHandler: firstNameBlurHandler,
    reset: resetFirstNameInput,
  } = useCustomInput((inputFirstName) => inputFirstName.trim() !== "");

  const {
    value: lastName,
    isValid: lastNameInputIsValid,
    hasError: lastNameHasError,
    inputChangeHandler: lastNameChangeHandler,
    blurChangeHandler: lastNameBlurHandler,
    reset: resetLastNameInput,
  } = useCustomInput((inputLastName) => inputLastName.trim() !== "");

  const {
    value: email,
    isValid: emailInputIsValid,
    hasError: emailHasError,
    inputChangeHandler: emailChangeHandler,
    blurChangeHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useCustomInput(
    (inputEmail) => inputEmail.trim() !== "" && inputEmail.includes("@")
  );

  let formIsValid = false;

  if (firstNameInputIsValid && lastNameInputIsValid && emailInputIsValid) {
    formIsValid = true;
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (
      firstNameHasError ||
      lastNameHasError ||
      emailHasError ||
      !formIsValid
    ) {
      return;
    }

    console.log(firstName);
    console.log(lastName);
    console.log(email);
    resetFirstNameInput();
    resetLastNameInput();
    resetEmailInput();
  };

  const nameInputClasses = firstNameHasError
    ? "form-control invalid"
    : "form-control";

  const lastNameInputClasses = lastNameHasError
    ? "form-control invalid"
    : "form-control";

  const emailInputClasses = emailHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className="control-group">
        <div className={nameInputClasses}>
          <label htmlFor="name">First Name</label>
          <input
            value={firstName}
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler}
            type="text"
            id="name"
          />
        </div>
        {firstNameHasError && (
          <p className="error-text">First Name must not be empty</p>
        )}
        <div className={lastNameInputClasses}>
          <label htmlFor="name">Last Name</label>
          <input
            value={lastName}
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
            type="text"
            id="name"
          />
        </div>
        {lastNameHasError && (
          <p className="error-text">Last Name must not be empty</p>
        )}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          value={email}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          type="email"
          id="name"
        />
      </div>
      {emailHasError && <p className="error-text">Not a valid Email</p>}
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
