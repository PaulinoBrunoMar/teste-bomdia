import styled from "styled-components";

export const NavHeader = styled.nav`
  background-color: #282c34;
  min-height: 10vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  color: white;
  padding: 0.5rem 2rem;

  #user-photo {
    border-radius: 50%;
    overflow: hidden;
    width: 5rem;
    height: 5rem;
    img {
      width: 100%;
      height: 100%;
    }
  }

  #greetings {
    display: flex;
    align-items: center;
    font-size: 1.5rem;
    strong {
      font-weight: bold;
    }
  }

  #arrow-drop-down {
    padding: 0.5rem;
    cursor: pointer;
  }
`;
