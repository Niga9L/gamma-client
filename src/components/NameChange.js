import React, {useRef, useState} from "react"
import {ChangeBox, ChangeButton, ChangeInput, ChangeName, ChangeNameTitle} from "../styled/Tabs"
import {useOutside} from "../hooks/outside.hook"
import {useDispatch, useSelector} from "react-redux"
import {changeDesktopName, isChangeName} from "../redux/actions"

export const NameChange = props => {
  const wrapRef = useRef(null)
  const dispatch = useDispatch()
  const inRef = useRef(null)
  const [input, setInput] = useState(props.value)
  const currentId = useSelector(state => state.desktop.currentDesktop)

  useOutside(wrapRef, () => dispatch(isChangeName()))

  const pressHandler = event => {
    if (event.key === 'Enter') {
      dispatch(changeDesktopName(currentId, input))
      dispatch(isChangeName())
    }
  }

  const onClickHandler = () => {
    inRef.current.focus()
  }


  return (
    <ChangeName ref={wrapRef} className='ignore'>
      <ChangeNameTitle>Укажите название рабочего стола</ChangeNameTitle>
      <ChangeBox>
        <ChangeInput
          ref={inRef}
          placeholder={props.value}
          onChange={e => setInput(e.target.value)}
          onKeyPress={pressHandler}
          onClick={() => onClickHandler()}
        />
        <ChangeButton
          className="material-icons"
          primary
          onClick={()=> {
            dispatch(changeDesktopName(currentId, input))
            dispatch(isChangeName())
          }}
        >done</ChangeButton>
        <ChangeButton className="material-icons" onClick={() => dispatch(isChangeName())}>close</ChangeButton>
      </ChangeBox>
    </ChangeName>
  )
}