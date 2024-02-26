import styled from "styled-components";
import InputMask from 'react-input-mask';

export const Container = styled.div`
  display: flex;
  width: 100vw;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

export const ContainerTransaction = styled.section`
  width: 550px;
  display: flex;
  flex-direction: column;
  height: 250px;
  position: relative;
  background-color: white;
  padding: 25px;
  margin-top: 25px;
  border-radius: 15px;
  display: flex;
`;

export const Title = styled.text`
  font-weight: bold;
  font-size: 24px;
`;

export const InputBox = styled.input`
  margin: 5px 0;
  background-color: transparent;
  border: 0px solid;
  border-bottom-width: 1px;
  border-color: #8e44ad;
  color: #2c3e50;
  outline: none;
  min-width: 60%;
  max-width: 60%;
  padding: 10px;
  border-radius: 5px;
`;

export const InputBoxNumberCard = styled(InputMask)`
  margin: 5px 0;
  background-color: transparent;
  border: 0px solid;
  border-bottom-width: 1px;
  border-color: #8e44ad;
  color: #2c3e50;
  outline: none;
  min-width: 60%;
  max-width: 60%;
  padding: 10px;
  border-radius: 5px;
`;

export const InputBoxNumber = styled(InputMask)`
  margin: 5px 0;
  background-color: transparent;
  border: 0px solid;
  border-bottom-width: 1px;
  border-color: #8e44ad;
  color: #2c3e50;
  outline: none;
  display: flex;
  max-width: 15%;
  padding: 10px;
  border-radius: 5px;
`;

export const LabelInput = styled.label`
  color: #2c3e50;
  min-width: 80px;
  margin-right: 10px;
  font-weight: bold;
`;

export const SectionInput = styled.div`
  display: flex;
  align-items: center;
`;

export const SectionInputDate = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
`;

export const ButtonsContainer = styled.div`
  margin-top: 35px;
  display: flex;
  flex-direction: column;
`;

export const FormLogin = styled.form`
  width: 90%;
  max-width: 25px;
`;

export const SelectOption = styled.select`
  background-color: #2c3e50;
  border: none;
  border-radius: 5px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: flex-end;
  flex: 1;
`;

export const ButtonSend = styled.button`
  background-color: #2ecc71;
  width: 100%;
  &:hover {
    background-color: #27ae60;
  }
`;