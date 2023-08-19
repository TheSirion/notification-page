import { StyledCounter, StyledNumber } from "./NotificationCounter.styles";

const NotificationCounter = ({ numNotifications }) => {
  return (
    <StyledCounter>
      Notifications <StyledNumber>{numNotifications ? numNotifications : "0"}</StyledNumber>
    </StyledCounter>
  )
}

export default NotificationCounter;