import styled from "styled-components";

export const Container = styled.header`
  padding: 1rem;
`;

export const Heading = styled.h1`
  font-weight: 400;
  font-size: x-large;
  color: #303030;
  display: flex;
  flex-direction: column;
  @media (min-width: 480px) {
    font-size: xx-large;
  }
`;

export const Build = styled.span`
  font-size: 1rem;
  width: max-content;
  align-self: center;
  background: #000;
  padding: 0.3rem 0.5rem;
  margin-top: 0.5rem;
  border-radius: 4px;
  color: #fff;
  font-weight: 700;
  letter-spacing: 2px;
`;
