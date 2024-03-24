import { useReducer } from 'react'

const initialState = {
  value: '',
  isTouched: false,
}

const inputReducer = (state, action) => {
  if (action.type === 'INPUT') {
    return { ...state, value: action.value }
  }

  if (action.type === 'BLUR') {
    return { ...state, isTouched: true }
  }

  if (action.type === 'RESET') {
    return { ...state, value: '', isTouched: false }
  }

  return initialState
}

const useInput = (validateValue) => {
  const [inputState, dispatch] = useReducer(inputReducer, initialState)

  const valueIsValid = validateValue(inputState.value)
  const hasError = !valueIsValid && inputState.isTouched

  const valueChangeHandler = (event) => {
    dispatch({ type: 'INPUT', value: event.target.value })
  }

  const valueBlurHandler = () => {
    dispatch({ type: 'BLUR' })
  }

  const reset = () => {
    dispatch({ type: 'RESET' })
  }

  return {
    value: inputState.value,
    isValid: valueIsValid,
    hasError,
    valueChangeHandler,
    valueBlurHandler,
    reset,
  }
}

export { useInput }
