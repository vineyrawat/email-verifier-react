import styled from "styled-components";

export const Form = styled.form`
  width: 100%;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  @media (min-width: 500px) {
    flex-direction: row;
  }
`;

export const Button = styled.button`
  height: 55px;
  width: 100%;
  display: flex;
  margin-top: 10px;
  align-items: center;
  justify-content: center;
  background: #000;
  color: #fff;
  font-size: large;
  cursor: pointer;
  &:disabled {
    opacity: 0.8;
    cursor: not-allowed;
  }
  @media (min-width: 500px) {
    margin-top: 0;
    width: 200px;
  }
`;

export const Input = styled.input`
  width: 100%;
  background: #f1f1f1;
  height: 55px;
  font-size: 1.2rem;
  padding: 0.8rem;
  color: #202020;
  transition: 0.2s ease-out border-color, 0.2s ease-out background;
  border: 2px solid transparent;
  &:focus {
    border-color: #a9a9a9;
    background-color: #fafafa;
  }
  @media (min-width: 500px) {
    border-right: none;
  }
`;
