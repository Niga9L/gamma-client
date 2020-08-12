import React from "react";
import {ReactSortable} from 'react-sortablejs'
import {useDispatch, useSelector} from "react-redux";
import {addDesktop, changeDesktop, isChangeName, sortable} from "../redux/actions";
import {
  TabAdd,
  TabAddIcon,
  TabItem,
  TabsContent
} from "../styled/Tabs";
import {Tab} from "../components/Tab";
import {NameChange} from "../components/NameChange";

export const Tabs = () => {
  const tabs = useSelector(state => state.desktop.desktopState)
  const currentDesktop = useSelector(state => state.desktop.currentDesktop)
  const change = useSelector(state => state.desktop.isChangeName)
  const dispatch = useDispatch()


  const onDoubleClickHandler = () => {
    dispatch(isChangeName())
  }

  const onClickHandler = id => {
    if (change) {
      return dispatch(isChangeName())
    }
    dispatch(changeDesktop(id))
  }


  return (
    <TabsContent>
      <ReactSortable filter={'.ignore'} list={tabs} setList={ newState => dispatch(sortable(newState)) } className='sortable_tabs'>
        {tabs.map((item) => {
          if (item.desktopId === currentDesktop) {
            if (change) {
              return (
                <TabItem key={item.desktopId}>
                  <Tab active onClickHandler={onDoubleClickHandler} item={item}/>
                  <NameChange value={item.name}/>
                </TabItem>
              )
            }
            return (
                <Tab
                  key={item.desktopId}
                  active
                  onClickHandler={onDoubleClickHandler}
                  item={item}
                />
              )
          } else {
            return (
              <Tab key={item.desktopId} onClickHandler={onClickHandler} item={item}/>
            )
          }
        })}
      </ReactSortable>
      <TabAdd><TabAddIcon onClick={() => dispatch(addDesktop())} className="material-icons">add</TabAddIcon></TabAdd>
    </TabsContent>
  )
}