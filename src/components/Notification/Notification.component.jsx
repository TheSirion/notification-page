import { useReducer } from "react";

import { NOTIFICATION_ACTION_TYPES, NotificationReducer, createAction } from "../../Contexts/Notification.context";
import Message from "../Message/Message.component";

import { NotificationWrapper, UserImage, UserImageWrapper } from "./Notification.styles";

import Data from "../../data.json";

const Notification = (props) => {
  const [state, dispatch] = useReducer(NotificationReducer, Data);
  const { user, userPic, picture, isRead } = props.notification;

  const markNotificationAsRead = () => {
    const updatedNotificationStatus = props.notification;
    updatedNotificationStatus.isRead = true;

    const updatedState = state.map(notification => {
      if (notification.id === updatedNotificationStatus.id) {
        notification = updatedNotificationStatus;
      }
      return notification;
    })

    dispatch(createAction(
      NOTIFICATION_ACTION_TYPES.MARK_NOTIFICATION_AS_READ, updatedState
    ),
    );
  }

  const handleClick = (e) => {
    e.preventDefault();
    markNotificationAsRead();
  }
  return (
    <NotificationWrapper isRead={isRead} onClick={(event) => handleClick(event)}>
      <UserImageWrapper>
        <UserImage src={userPic} alt={user} />
      </UserImageWrapper>
      <Message message={{ ...props }} />
      {
        picture ?
          (
            <UserImageWrapper>
              <UserImage src={picture} alt={"picture"} />
            </UserImageWrapper>
          ) :
          null
      }
    </NotificationWrapper>
  )
}

export default Notification;