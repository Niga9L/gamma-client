import {
  ADD_DESKTOP, ADD_WIDGET,
  CHANGE_DESKTOP,
  CHANGE_NAME, CHANGE_POSITION, CHANGE_SIZE, CHANGE_ZINDEX,
  DELETE_DESKTOP, DELETE_WIDGET,
  SHOW_CHANGE_NAME,
  SORTABLE,
  SWAP_DESKTOP
} from "./types"
import uniqid from "uniqid"

export function addDesktop() {
  const payload = {
    desktopId: uniqid(),
    name: 'Новый рабочий стол'
  }
  return {
    type: ADD_DESKTOP,
    payload
  }
}

export function sortable(newState) {
  return {
    type: SORTABLE,
    newState
  }
}

export function changeDesktop(id) {
  return {
    type: CHANGE_DESKTOP,
    id
  }
}

export function isChangeName() {
  return {
    type: SHOW_CHANGE_NAME
  }
}

export function changeDesktopName(id, name) {
  return {
    type: CHANGE_NAME,
    id, name
  }
}

export function deleteDesktop(id) {
  return {
    type: DELETE_DESKTOP,
    id
  }
}

export function swapDesktop(widgetId, desktopId) {
  return {
    type: SWAP_DESKTOP,
    widgetId, desktopId
  }
}

export function addWidget(desktopId, type, value) {
  const data = [{"sid":"1003","name":"Sensor-1003","count":"26885"},{"sid":"1022","name":"Sensor-1022","count":"27096"},{"sid":"1029","name":"Sensor-1029","count":"27192"},{"sid":"11111","name":"Sensor-11111","count":"3"}]
  const newWidget = {
    widgetId: uniqid(),
    desktopPosition: desktopId,
    title: 'Без названия',
    code: value,
    width: 650,
    height: 380,
    type,
    data,
    x: 320,
    y: 180,
    zIndex: 102
  }
  return {
    type: ADD_WIDGET,
    newWidget
  }
}

export function deleteWidget(widgetId) {
  return {
    type: DELETE_WIDGET,
    widgetId
  }
}

export function changeZIndex(widgetId) {
  return {
    type: CHANGE_ZINDEX,
    widgetId
  }
}

export function changePosition(widgetId, position) {
  return {
   type: CHANGE_POSITION,
   position, widgetId
  }
}

export function changeSize(widgetId, size, position) {
  changePosition(widgetId, position)
  return {
    type: CHANGE_SIZE,
    widgetId, size
  }

}
