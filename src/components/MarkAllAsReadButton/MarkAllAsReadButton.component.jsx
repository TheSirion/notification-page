import { useReducer } from "react";

import { NOTIFICATION_ACTION_TYPES, NotificationReducer, createAction } from "../../Contexts/Notification.context";
import Data from "../../data.json";
import { StyledButton } from "./MarkAllAsReadButton.styles";

const MarkAllAsReadButton = () => {
  const [state, dispatch] = useReducer(NotificationReducer, Data);

  // useEffect(() => console.log("state is MarkAllButton", state));

  const markAllAsRead = () => {
    const allRead = state.map(data => {
      data.isRead = true;
      return data;
    });
    dispatch(createAction(NOTIFICATION_ACTION_TYPES.MARK_ALL_AS_READ, allRead));
    console.log(allRead);
  }

  return <StyledButton onClick={markAllAsRead}>Mark all as read</StyledButton>
}

export default MarkAllAsReadButton;