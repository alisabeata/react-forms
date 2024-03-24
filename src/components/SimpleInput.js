import { useInput } from '../hooks/useInput'

const SimpleInput = () => {
  const {
    value: enteredName,
    isValid: enteredNameIsVadid,
    hasError: nameInputHasError,
    valueChangeHandler: nameInputChangeHandler,
    valueBlurHandler: nameInputBlurHandler,
    reset: nameInputResest,
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

  if (enteredNameIsVadid && enteredEmailIsVadid) {
    formIsValid = true
  }

  const submitHandler = (event) => {
    event.preventDefault()

    if (!enteredNameIsVadid || !enteredEmailIsVadid) {
      return
    }

    nameInputResest()
    emailInputReset()
  }

  const nameInputClasses = nameInputHasError
    ? 'form-control invalid'
    : 'form-control'
  const emailInputClasses = emailInputHasError
    ? 'form-control invalid'
    : 'form-control'

  return (
    <form onSubmit={submitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
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
      <div className={emailInputClasses}>
        <label htmlFor="name">Your Email</label>
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

export default SimpleInput
