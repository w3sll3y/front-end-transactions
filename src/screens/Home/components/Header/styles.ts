import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  justify-content: center;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100%;
  top: 0;
  background-color: #2c3e50;
`;

export const MenuTextContainer = styled.div`
  display: flex;
  margin-left: 150px;

  font-weight: bold;
`;

export const MenuItems = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 15%;

  font-weight: bold;
  color: white;
`;

export const ButtonLoggoutContainer = styled.div`
  margin-right: 100px;
`;

export const ButtonLoggout = styled.button`
  background-color: #e74c3c;
  &:hover {
    background-color: #c0392b;
  }
`;