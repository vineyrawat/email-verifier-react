import React from "react";
import styled from "styled-components";

function ErrorHolder({ error }) {
  return <Container>{error}</Container>;
}

export default ErrorHolder;
const Container = styled.p`
  color: red;
  font-size: larger;
`;
