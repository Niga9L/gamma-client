import React, {useRef} from "react";
import {useDispatch, useSelector} from "react-redux";
import {DesktopList, DesktopListsBox, ListDesktop} from "../styled/Desktop";
import {useOutside} from "../hooks/outside.hook";
import {changeDesktop, swapDesktop} from "../redux/actions";

export const DesktopLists = props => {
  const lists = useSelector(state => state.desktop.desktopState)
  const currentDesktop = useSelector(state => state.desktop.currentDesktop)
  const dispatch = useDispatch()
  const ref = useRef(null)
  useOutside(ref, props.onClose)

  const clickHandler = (widgetId, desktopId) => {
    dispatch(swapDesktop(widgetId, desktopId))
    dispatch(changeDesktop(desktopId))
    props.onClose()
  }

  return (
    <DesktopListsBox ref={ref}>
      <ListDesktop>
        {lists
          .filter(node => node.desktopId !== currentDesktop)
          .map(list => {
          return (
            <DesktopList key={list.desktopId} onClick={() => clickHandler(props.widgetId, list.desktopId)}>
              Переместить на {list.name}
            </DesktopList>
          )
        })}
      </ListDesktop>
    </DesktopListsBox>
  )
}