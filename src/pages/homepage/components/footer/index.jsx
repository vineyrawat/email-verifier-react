import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <Container>
      Made by Vinay Rawat |
      <a href="https://github.com/vineyrawat/email-verifier-react">Github</a>
    </Container>
  );
}

export default Footer;

const Container = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: auto;
  color: gray;
  a {
    margin-left: 5px;
    font-weight: 600;
    color: #000;
  }
`;
