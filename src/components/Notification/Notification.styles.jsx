import styled from "styled-components"

export const NotificationWrapper = styled.div`

  padding: 1rem;
  margin-bottom: .75rem;
  font-size: .85rem;
  color: var(--dark-grayish-blue);

  ${({ isRead }) => !isRead && `
    background-color: var(--very-light-grayish-blue);
  `}
  border: none;
  border-radius: .75rem;
  display: flex;
  /* justify-content: space-between; */
  gap: 1rem;
`

export const UserImageWrapper = styled.div`
height: 100%;
`

export const UserImage = styled.img`
  width: 2.5rem;
  cursor: pointer;
`

export const Message = styled.div`
  flex-grow: 2;
`