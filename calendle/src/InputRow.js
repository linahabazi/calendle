import './InputRow.css'

export const InputRow = () => {
  const refs = {};

  const inputChange = (index) => {
    if (index <= 6) {
      focusNextInput(refs[index + 1])
    }
  }

  const focusNextInput = (nextRef) => {
    nextRef.focus()
  }

  const deleteKeyPress = (index) => {
    //delete and focus last input
    if (index)
    focusLastInput(refs[index-1])
    //clear value of current ref input
  }

  const focusLastInput = (prevRef) => {
    
  }


  const NumberInput = (props) => (
    <input
      className="numberInput"
      maxLength="1"
      ref={(input) => refs[props.index] = input}
      onChange={() => inputChange(props.index)}
      //on enter keypress, only if index is 7, submit guess
    />
  )

  const Days = () => {
    return (
      <div className="dayInputs">
        <NumberInput index={0} />
        <NumberInput index={1} />
      </div>
    )
  }

  const Month = () => (
    <div className="monthInputs">
      <NumberInput index={2} />
      <NumberInput index={3} />
    </div>
  )

  const Year = () => (
    <div className="yearInputs">
      <NumberInput index={4} />
      <NumberInput index={5} />
      <NumberInput index={6} />
      <NumberInput index={7} />
    </div>
  )

  return (
    <div className="inputsContainer">
      <Days />
      <div>/</div>
      <Month />
      <div>/</div>
      <Year />
    </div>
  )
}