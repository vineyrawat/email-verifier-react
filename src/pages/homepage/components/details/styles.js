import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin-top: 1rem;
  display: grid;
  gap: 10px;
  grid-template-columns: 1fr;
  @media (min-width: 500px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 700px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export const Title = styled.div`
  font-size: large;
`;

export const ListItem = styled.div`
  display: flex;
  align-items: center;
  .icon {
    font-size: x-large;
    margin-right: 0.5rem;
  }
`;
