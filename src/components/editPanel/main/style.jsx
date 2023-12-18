import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

export const Menu = styled.ul`
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-top: 2rem;
`;

export const Option = styled.li`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  padding: 0.5rem;
  border: 1px solid #fff;
  border-radius: 0.5rem;
  color: #fff;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);
  list-style: none;

  &:hover {
    background-color: #fff;
    color: #686868;
  }
`;
