import React from "react";
import {TabBox, TabIcon, TabName} from "../styled/Tabs";
import {useDispatch} from "react-redux";
import {deleteDesktop} from "../redux/actions";

export const Tab = props => {
  const dispatch = useDispatch()

  const onClickHandler = () => {
    const isDelete = window.confirm('Вы точно хотите удалить рабочй стол?')

    if (isDelete) {
      const id = props['data-id']
      dispatch(deleteDesktop(id))
    }

  }

  if (props.active) {
    return (
      <TabBox active>
        <TabName active onDoubleClick={props.onClickHandler}>{props.item.name}</TabName>
        <TabIcon className="material-icons" onClick={() => onClickHandler()}>close</TabIcon>
      </TabBox>
    )
  } else {
    return (
      <TabBox onClick={() => props.onClickHandler(props.item.desktopId)}>
        <TabName>{props.item.name}</TabName>
        <TabIcon className="material-icons" onClick={() => onClickHandler()}>close</TabIcon>
      </TabBox>
    )
  }

}