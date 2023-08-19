import {
  SenderName,
  StyledGroup,
  StyledMessage,
  StyledPost,
  StyledPrivateMessage,
  StyledTime
} from "./Message.styles";

const Message = (props) => {
  const { user, action, post, group, time, privateMessage } = props.message.notification;

  return (
    <StyledMessage>
      <div>
        <SenderName href="">{user}</SenderName>{" "}
        <span>{action}</span>{" "}
        <StyledPost>{post}</StyledPost>
        <StyledGroup href="">{group}</StyledGroup>
      </div>
      <StyledTime>{time}</StyledTime>
      {
        privateMessage ?
          <StyledPrivateMessage>{privateMessage}</StyledPrivateMessage> :
          null
      }
    </StyledMessage>
  )
}

export default Message;