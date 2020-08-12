import React,{useRef} from "react";
import {Rnd} from "react-rnd";
import {RnDHeader, RnDIcon, RnDropMenu, RnDTitle, RnDTools} from "../styled/Desktop";
import {DesktopLists} from "../components/DesktopLists";
import {changePosition, changeSize, changeZIndex, deleteWidget} from "../redux/actions";
import {useDispatch} from "react-redux";

const {useState} = require("react");

export const Widget = props => {
  const [open, setOpen] = useState(false)
  const dispatch = useDispatch()
  const [full, setFull] = useState(false)
  const ref = useRef(null)
  const widget = props.widget

  return (
    <Rnd
      ref={ref}
      onClick={() => dispatch(changeZIndex(widget.widgetId))}
      position={{
        x: full ? 4 : widget.x,
        y: full ? -120 : widget.y,
      }}
      size={{
        width: full ? window.innerWidth - 20 : widget.width,
        height: full ? window.innerHeight - 20 : widget.height,
      }}
      cancel='.widgetContent'
      minWidth={550}
      minHeight={350}
      onDrag={() => dispatch(changeZIndex(widget.widgetId))}
      onDragStop={(e, d) => {
        const newPosition = {x: d.x, y: d.y}
        dispatch(changePosition(widget.widgetId, newPosition))
      }}
      disableDragging={full || props.preview}
      // onResizeStop={(e, direction, ref, delta, position) => {
      //   const newSize = {width: ref.style.width, height: ref.style.height}
      //   dispatch(changeSize(widget.widgetId, newSize, position))
      // }}
      onResize={(e, direction, ref, delta, position) => {
        const newSize = {width: ref.style.width, height: ref.style.height}
        dispatch(changeSize(widget.widgetId, newSize, position))
      }}
      bounds={full ? null : '.ResContainer'}
      style={{
        position: props.preview ? "none" : "absolute",
        boxShadow: '0 2px 3px 2px rgba(0, 0, 0, .06)',
        background: '#fff',
        zIndex: widget.zIndex
      }}
    >
      <RnDHeader>
        <RnDTitle>{widget.title}</RnDTitle>
        {!props.preview && <RnDTools>
          <RnDropMenu>
            <RnDIcon className="material-icons" onClick={() => setOpen(true)}
                     style={{fontSize: '22px'}}>swap_horiz</RnDIcon>
            {open && (
              <DesktopLists widgetId={widget.widgetId} onClose={() => setOpen(false)}/>
            )}
          </RnDropMenu>
          <RnDIcon className="material-icons" style={{fontSize: '16px'}}>build</RnDIcon>
          <RnDIcon className="material-icons">cached</RnDIcon>
          <RnDIcon
            className="material-icons"
            style={{fontSize: '16px'}}
            onClick={() => {
              setFull(!full)
            }}
          >
            {full ? 'close_fullscreen' : 'open_in_full'}
          </RnDIcon>
          <RnDIcon
            className="material-icons"
            style={{fontSize: '20px'}}
            onClick={() => {
              const confirm = window.confirm('Вы точно хотите удалить виджет?')
              if (confirm) {
                dispatch(deleteWidget(widget.widgetId))
              }
            }}
          >
            close
          </RnDIcon>
        </RnDTools>}
      </RnDHeader>
      {props.children}
    </Rnd>
  )
}