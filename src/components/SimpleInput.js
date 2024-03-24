import { useRef, useState } from 'react'

// There are two approaches to read the input value
// the state and ref

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState('')
  const [inputIsValid, setInputIsValid] = useState(true)
  const inpRef = useRef()

  const inputHandler = (event) => {
    setEnteredName(event.target.value)
  }

  const submitHandler = (event) => {
    event.preventDefault()

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

  const inputClasses = inputIsValid ? 'form-control' : 'form-control invalid'

  return (
    <form onSubmit={submitHandler}>
      <div className={inputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={inputHandler}
          ref={inpRef}
          value={enteredName}
        />
        {!inputIsValid && <p className="error-text">Name must not be empty</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  )
}

export default SimpleInput
