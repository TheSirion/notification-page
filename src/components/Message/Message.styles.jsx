import styled from "styled-components";

export const StyledMessage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const SenderName = styled.a`
  color: var(--very-dark-blue);
  font-weight: 800;
  text-decoration: none;

  &:hover {
    color: var(--blue);
  }
`

export const StyledPost = styled.a`
  color: var(--dark-grayish-blue);
  font-weight: 800;
  text-decoration: none;

  &:hover {
    color: var(--blue);
    cursor:pointer;
  }
`

export const StyledGroup = styled.a`
  color: var(--blue);
  font-weight: 800;
  text-decoration: none;
`

export const StyledTime = styled.div`
  color: var(--grayish-blue);
`

export const StyledPrivateMessage = styled.div`
  padding: .75rem 1rem;
  margin-top: .75rem;
  border: 1px solid var(--light-grayish-blue-1);
  border-radius: 5px;

  &:hover {
    background-color: var(--light-grayish-blue-1);
    cursor: pointer;
  }
`