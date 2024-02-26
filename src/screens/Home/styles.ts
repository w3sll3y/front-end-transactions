import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.text`
  font-weight: bold;
  font-size: 24px;
  @media (max-width: 768px) {
    font-size: 18px;
    margin-top: 50px;
  }
`;

export const EmptyTransactions = styled.div``;

export const ListTransactions = styled.div`
  margin-top: 25px;
  @media (max-width: 768px) {
    max-width: 25rem;
  }
`;