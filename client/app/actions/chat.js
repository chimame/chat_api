import {
  ADD_MESSAGE,
  CREATE_MESSAGE_LIST,
  TOGGLE_DISPLAY_MESSAGE,
  UPDATE_MESSAGE,
  DELETE_MESSAGE
} from '../constants/chat'

export const addMessage = (message) => ({
  type: ADD_MESSAGE,
  message,
})

export const createMessageList = (messages) => ({
  type: CREATE_MESSAGE_LIST,
  messages,
})

export const toggleDisplayMessage = (id) => ({
  type: TOGGLE_DISPLAY_MESSAGE,
  id,
})

export const updateMessage = (message) => ({
  type: UPDATE_MESSAGE,
  message,
})

export const deleteMessage = (id) => ({
  type: DELETE_MESSAGE,
  id,
})

