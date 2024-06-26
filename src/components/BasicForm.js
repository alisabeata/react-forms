import { useInput } from '../hooks/useInputReducer'

const BasicForm = () => {
  const {
    value: enteredName,
    isValid: enteredNameIsVadid,
    hasError: nameInputHasError,
    valueChangeHandler: nameInputChangeHandler,
    valueBlurHandler: nameInputBlurHandler,
    reset: nameInputResest,
  } = useInput((val) => val.trim() !== '')
  const {
    value: enteredLastName,
    isValid: enteredLastNameIsVadid,
    hasError: lastNameInputHasError,
    valueChangeHandler: lastNameInputChangeHandler,
    valueBlurHandler: lastNameInputBlurHandler,
    reset: lastNameInputResest,
  } = useInput((val) => val.trim() !== '')
  const {
    value: enteredEmail,
    isValid: enteredEmailIsVadid,
    hasError: emailInputHasError,
    valueChangeHandler: emailInputChangeHandler,
    valueBlurHandler: emailInputBlurHandler,
    reset: emailInputReset,
  } = useInput((val) => val.includes('@'))

  let formIsValid = false

  if (enteredNameIsVadid && enteredLastNameIsVadid && enteredEmailIsVadid) {
    formIsValid = true
  }

  const submitHandler = (event) => {
    event.preventDefault()

    if (
      !enteredNameIsVadid ||
      !enteredLastNameIsVadid ||
      !enteredEmailIsVadid
    ) {
      return
    }

    console.log('Submitted')
    console.log(enteredName, enteredLastName, enteredEmail)

    nameInputResest()
    lastNameInputResest()
    emailInputReset()
  }

  const nameInputClasses = nameInputHasError
    ? 'form-control invalid'
    : 'form-control'
  const lastNameInputClasses = lastNameInputHasError
    ? 'form-control invalid'
    : 'form-control'
  const emailInputClasses = emailInputHasError
    ? 'form-control invalid'
    : 'form-control'

  return (
    <form onSubmit={submitHandler}>
      <div className="control-group">
        <div className={nameInputClasses}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            onChange={nameInputChangeHandler}
            onBlur={nameInputBlurHandler}
            value={enteredName}
          />
          {nameInputHasError && (
            <p className="error-text">Name must not be empty</p>
          )}
        </div>
        <div className={lastNameInputClasses}>
          <label htmlFor="lastname">Last Name</label>
          <input
            type="text"
            id="lastname"
            onChange={lastNameInputChangeHandler}
            onBlur={lastNameInputBlurHandler}
            value={enteredLastName}
          />
          {lastNameInputHasError && (
            <p className="error-text">Last Name must not be empty</p>
          )}
        </div>
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="email">E-Mail Address</label>
        <input
          type="email"
          id="email"
          onChange={emailInputChangeHandler}
          onBlur={emailInputBlurHandler}
          value={enteredEmail}
        />
        {emailInputHasError && (
          <p className="error-text">Email must be valid</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  )
}

export default BasicForm
