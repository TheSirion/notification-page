import { createContext } from "react";
import Data from "../data.json";

export const NotificationContext = createContext([{
  "id": 0,
  "user": "",
  "userPic": "",
  "action": "",
  "post": "",
  "group": "",
  "privateMessage": "",
  "time": "",
  "isRead": false
}]);

export const NOTIFICATION_ACTION_TYPES = {
  MARK_ALL_AS_READ: "notification/MARK_ALL_AS_READ",
  MARK_NOTIFICATION_AS_READ: "notification/MARK_NOTIFICATION_AS_READ",
  RESET: "notification/RESET"
}

export const createAction = (type, payload) => ({ type, payload });

export const NotificationReducer = (state, action) => {
  switch (action.type) {
    case NOTIFICATION_ACTION_TYPES.MARK_ALL_AS_READ:
      return [...action.payload];
    case NOTIFICATION_ACTION_TYPES.MARK_NOTIFICATION_AS_READ:
      return [...action.payload];
    default:
      throw new Error("Unhandled action error:");
  }
}

export const NotificationProvider = ({ children }) => {
  const state = Data;

  return (
    <NotificationContext.Provider value={state}>
      {children}
    </NotificationContext.Provider>
  )
}