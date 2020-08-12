import React from "react";
import {ResizerBox} from "../styled/Desktop";
import {Widget} from "./Widget";
import {useSelector} from "react-redux";
import {SqlWidget} from "../components/SqlWidget";

export const Desktop = () => {
  const widgetState = useSelector(state => state.desktop.widgetState)
  const currentDesktop = useSelector(state => state.desktop.currentDesktop)

  return (
    <ResizerBox className='ResContainer'>
      {widgetState
        .filter(node => node.desktopPosition === currentDesktop)
        .map(widget => {
          if (widget.type === 'sql') {
            return (
              <Widget key={widget.widgetId} widget={widget}>
                <SqlWidget data={widget.data} maxHeight={widget.height}/>
              </Widget>
            )
          } else {
            return <Widget key={widget.widgetId} widget={widget}/>
          }

      })}
    </ResizerBox>
  )
}