import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 3rem;
  border: 1px solid #fff;
  border-radius: 0.5rem;
  padding: 1rem;
  background-color: #fff;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);

  #email-column {
    width: 95%;
  }

  button {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 0.5rem;
    background-color: #fff;
    color: #333;
    font-weight: 600;
    font-size: 0.8rem;

    &:hover {
      background-color: green;
      color: #fff;
      cursor: pointer;
    }
  }
`;

export const Row = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  gap: 3rem;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  #email {
    width: 100%;
  }

  input {
    width: 155px;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 0.5rem;
  }

  select {
    width: 170px;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 0.5rem;
  }

  label {
    font-size: 0.8rem;
    font-weight: 600;
    color: #333;
  }
`;
