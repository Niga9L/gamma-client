import {
  ADD_DESKTOP,
  ADD_WIDGET,
  CHANGE_DESKTOP,
  CHANGE_NAME, CHANGE_POSITION, CHANGE_SIZE, CHANGE_ZINDEX,
  DELETE_DESKTOP, DELETE_WIDGET,
  SHOW_CHANGE_NAME,
  SORTABLE,
  SWAP_DESKTOP
} from "./types"
import uniqid from 'uniqid'

const initialState = {
  desktopState: [
    {
      desktopId:  new Date().getTime().toString(),
      name: 'Мой рабочий стол'
    },
    {
      desktopId: uniqid(),
      name: 'Рабочий стол 2'
    },
    {
      desktopId: uniqid(),
      name: 'Рабочий стол 3'
    },
    {
      desktopId: uniqid(),
      name: 'Рабочий стол 4'
    },
  ],
  widgetState: [
    {
      widgetId: uniqid(),
      desktopPosition: new Date().getTime().toString(),
      width: 650,
      type: '',
      data: {},
      title: 'Активность сенсоров',
      height: 380,
      x: 100,
      y: 50,
      zIndex: 100
    },
    {
      widgetId: uniqid(),
      desktopPosition: new Date().getTime().toString(),
      width: 550,
      height: 300,
      type: '',
      title: '10 наиболее активных атакующих по РЦМ за день',
      data: {},
      x: 1000,
      y: 150,
      zIndex: 100,
    }
  ],
  currentDesktop: new Date().getTime().toString(),
  isChangeName: false
}

export const desktopReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_DESKTOP: {
      return {...state, desktopState: state.desktopState.concat([action.payload]), currentDesktop: action.payload.desktopId}
    }
    case SORTABLE: {
      return {...state, desktopState: action.newState}
    }
    case CHANGE_DESKTOP: {
      return {...state, currentDesktop: action.id}
    }
    case SHOW_CHANGE_NAME: {
      return {...state, isChangeName: !state.isChangeName}
    }
    case CHANGE_NAME: {
      return {...state, desktopState: state.desktopState.map(node => {
        if (node.desktopId === action.id) {
          node.name = action.name
        }
        return node
        })}
    }
    case DELETE_DESKTOP: {
      return {...state, desktopState: state.desktopState.filter(node => node.desktopId !== action.id)}
    }
    case SWAP_DESKTOP: {
      return {...state, widgetState: state.widgetState.map(node => {
        if (node.widgetId === action.widgetId) {
          node.desktopPosition = action.desktopId
        }
        return node
        })}
    }
    case ADD_WIDGET: {
      return {...state, widgetState: state.widgetState.concat([action.newWidget])}
    }
    case DELETE_WIDGET: {
      return {...state, widgetState: state.widgetState.filter(node => node.widgetId !== action.widgetId)}
    }
    case CHANGE_ZINDEX: {
      return {...state, widgetState: state.widgetState.map(node => {
        if (node.widgetId !== action.widgetId) {
          node.zIndex = 100
        } else {
          node.zIndex = 101
        }
        return node
        })}
    }
    case CHANGE_POSITION: {
      return {...state, widgetState: state.widgetState.map(node => {
        if (node.widgetId === action.widgetId) {
          node.x = action.position.x
          node.y = action.position.y
        }
        return node
        })}
    }
    case CHANGE_SIZE: {
      return {...state, widgetState: state.widgetState.map(node => {
        if (node.widgetId === action.widgetId) {
          node.width = action.size.width
          node.height = action.size.height
        }
        return node
        })}
    }
    default: return state
  }
}