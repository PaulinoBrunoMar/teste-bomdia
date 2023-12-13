import styled from "styled-components";

export const Content = styled.div`
  background-color: #282c34;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  gap: 1rem;
  width: 300px;
  position: absolute;
  right: 0;
  border-radius: 0 0 0 1rem;
`;

export const Rows = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0.5rem 0;
  cursor: pointer;
  transition: 0.2s;
  gap: 0.5rem;

  &:hover {
    background-color: #3d3d3d;
    border-radius: 0 0 0 1rem;
  }
`;
