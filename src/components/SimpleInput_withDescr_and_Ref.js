import { useRef, useState } from 'react'

// There are two approaches to read the input value
// the state and ref

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState('')
  const [inputIsValid, setInputIsValid] = useState(false)
  const [inputIsTouched, setInputIsTouched] = useState(false)
  const inpRef = useRef()

  const inputHandler = (event) => {
    setEnteredName(event.target.value)

    if (event.target.value.trim() !== '') {
      setInputIsValid(true)
    }
  }

  const inputBlurHandler = (event) => {
    setInputIsTouched(true)

    if (enteredName.trim() === '') {
      setInputIsValid(false)
    } else {
      setInputIsValid(true)
    }
  }

  const submitHandler = (event) => {
    event.preventDefault()

    setInputIsTouched(true)

    // submit validation
    if (enteredName.trim() === '') {
      setInputIsValid(false)
      return
    }

    setInputIsValid(true)

    // state
    console.log(enteredName)

    // ref
    const enteredVal = inpRef.current.value
    console.log(enteredVal)

    // reset
    setEnteredName('')
    // in case of the ref
    // inpRef.current.value = ''
    // but it's not an optimal solution
    // because we directly manipulate the DOM
  }

  const inputIsInvalid = !inputIsValid && inputIsTouched
  const inputClasses = inputIsInvalid ? 'form-control invalid' : 'form-control'

  return (
    <form onSubmit={submitHandler}>
      <div className={inputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={inputHandler}
          onBlur={inputBlurHandler}
          ref={inpRef}
          value={enteredName}
        />
        {inputIsInvalid && <p className="error-text">Name must not be empty</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  )
}

export default SimpleInput
