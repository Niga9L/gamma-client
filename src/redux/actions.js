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
  const data = [{"time":"2020-08-05 14:21:00","sid":"11111","sip":"10.98.19.13","dip":"10.98.19.1","sp":"51181","dp":"33089","ac":"96080058","signatures":"\"NCCCI WEB Informix Error in HTTP 200 Response\"","source_country":"","dest_country":""},{"time":"2020-08-04 16:36:21","sid":"1022","sip":"140.61.242.6","dip":"193.56.179.54","sp":"51180","dp":"33089","ac":"2011667","signatures":"\"ET ATTACK_RESPONSE Backdoor reDuh http initiate\"","source_country":"united states","dest_country":"united kingdom"},{"time":"2020-08-04 16:36:11","sid":"1022","sip":"199.242.225.0","dip":"219.202.20.111","sp":"51180","dp":"33089","ac":"2007757","signatures":"\"ET SCAN w3af User Agent\"","source_country":"united states","dest_country":"japan"},{"time":"2020-08-04 16:36:01","sid":"1022","sip":"69.157.174.106","dip":"104.27.136.56","sp":"51180","dp":"33089","ac":"2011487","signatures":"\"ET FTP Suspicious Percentage Symbol Usage in FTP Username\"","source_country":"canada","dest_country":"united states"},{"time":"2020-08-04 16:35:51","sid":"1003","sip":"10.98.19.1","dip":"120.53.38.0","sp":"51180","dp":"33089","ac":"900522004","signatures":"","source_country":"","dest_country":""},{"time":"2020-08-04 16:30:34","sid":"1022","sip":"76.63.198.44","dip":"146.18.208.121","sp":"51180","dp":"33089","ac":"38586","signatures":"\"MALWARE-CNC Win.Backdoor.DFSCook variant outbound connection\"","source_country":"united states","dest_country":"united states"},{"time":"2020-08-04 16:30:24","sid":"1022","sip":"202.13.190.70","dip":"47.27.42.27","sp":"51180","dp":"33089","ac":"2022004","signatures":"","source_country":"japan","dest_country":"united states"},{"time":"2020-08-04 16:30:14","sid":"1003","sip":"81.8.83.27","dip":"163.6.31.26","sp":"51180","dp":"33089","ac":"48394","signatures":"\"OS-WINDOWS Microsoft Windows Win32k information disclosure attempt\"","source_country":"","dest_country":""},{"time":"2020-08-04 16:30:04","sid":"1003","sip":"163.6.31.26","dip":"120.53.38.0","sp":"51180","dp":"33089","ac":"2009022","signatures":"\"ET TROJAN Zlob User Agent (securityinternet)\"","source_country":"","dest_country":""},{"time":"2020-08-04 16:29:54","sid":"1022","sip":"49.102.235.125","dip":"27.111.18.20","sp":"51180","dp":"33089","ac":"2008919","signatures":"\"ET USER_AGENTS Suspicious User-Agent pricers.info related (section)\"","source_country":"singapore","dest_country":"nepal"},{"time":"2020-08-04 16:29:44","sid":"1003","sip":"81.8.83.27","dip":"52.177.30.87","sp":"51180","dp":"33089","ac":"2009022","signatures":"\"ET TROJAN Zlob User Agent (securityinternet)\"","source_country":"","dest_country":""},{"time":"2020-08-04 16:29:34","sid":"1029","sip":"63.58.109.107","dip":"137.213.239.31","sp":"51180","dp":"33089","ac":"2011667","signatures":"\"ET ATTACK_RESPONSE Backdoor reDuh http initiate\"","source_country":"united states","dest_country":"united kingdom"},{"time":"2020-08-04 16:29:24","sid":"1003","sip":"81.8.83.27","dip":"163.6.31.26","sp":"51180","dp":"33089","ac":"48394","signatures":"\"OS-WINDOWS Microsoft Windows Win32k information disclosure attempt\"","source_country":"","dest_country":""},{"time":"2020-08-04 16:29:14","sid":"1022","sip":"114.174.116.113","dip":"114.84.3.0","sp":"51180","dp":"33089","ac":"48394","signatures":"\"OS-WINDOWS Microsoft Windows Win32k information disclosure attempt\"","source_country":"japan","dest_country":"china"},{"time":"2020-08-04 16:29:04","sid":"1029","sip":"165.24.168.37","dip":"79.101.243.121","sp":"51180","dp":"33089","ac":"2011667","signatures":"\"ET ATTACK_RESPONSE Backdoor reDuh http initiate\"","source_country":"united states","dest_country":"serbia"}]
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
