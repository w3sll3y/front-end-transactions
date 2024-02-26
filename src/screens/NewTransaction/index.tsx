import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import useAuth from '../../hooks/useAuth';
import { Header } from '../Home/components/Header';
import * as Styled from './styles';

export function NewTransaction() {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const [name, setName] = useState('');
  const [numberCard, setNumberCard] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [validateCode, setValidateCode] = useState('');
  const [valueTransaction, setValueTransaction] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const createdAt: Date = new Date();

  const notify = () => toast.success("Transacao realizada com sucesso");
  const notifyErr = (err) => toast.error(err);

  const { user } = useAuth();

  const options = [
    { value: 'R$ 50,00', label: 'R$ 50,00' },
    { value: 'R$ 100,00', label: 'R$ 100,00' },
    { value: 'R$ 150,00', label: 'R$ 150,00' },
    { value: 'R$ 200,00', label: 'R$ 200,00' },
    { value: 'R$ 250,00', label: 'R$ 250,00' },
    { value: 'R$ 300,00', label: 'R$ 300,00' },
    { value: 'R$ 350,00', label: 'R$ 350,00' },
    { value: 'R$ 400,00', label: 'R$ 400,00' },
    { value: 'R$ 450,00', label: 'R$ 450,00' },
    { value: 'R$ 500,00', label: 'R$ 500,00' },
    { value: 'R$ 1000,00', label: 'R$ 1000,00' },
  ];

  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);
    setValueTransaction(selectedValue);
  };

  function formatarDataParaEnvio(data: Date): string {
    const dia: string = String(data.getDate()).padStart(2, '0');
    const mes: string = String(data.getMonth() + 1).padStart(2, '0'); // Mês começa do zero
    const ano: number = data.getFullYear();

    return `${dia}/${mes}/${ano}`;
  }
  function handleGoHome() {
    navigate("/home");
  }
  const handleNewTransaction = async (e) => {
    const createdBy = user?.id
    e.preventDefault();

    if (name === '') {
      return notifyErr('Preencha o nome do titular')
    }
    if (numberCard === '') {
      return notifyErr('Preencha o numero do cartao')
    }
    if (dueDate === '') {
      return notifyErr('Preencha a data de validade')
    }
    if (validateCode === '') {
      return notifyErr('Preencha o cvv')
    }
    if (valueTransaction === '') {
      return notifyErr('Preencha o valor da transacao')
    }

    const dataFormatada: string = formatarDataParaEnvio(createdAt);

    try {
      const response = await axios.post('http://localhost:3000/new-transaction',
        JSON.stringify({ name, numberCard, createdAt: dataFormatada, createdBy, dueDate, validateCode, numberCard, valueTransaction }),
        {
          headers: {
            'Content-Type': 'application/json',
            'access-token': JSON.parse(token).token
          }
        }
      );
      await notify();
      return setTimeout(() => {
        handleGoHome()
      }, 1000)
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Header />
      <Styled.Container>
        <Styled.Title>
          Nova transacao
        </Styled.Title>
        <Styled.ContainerTransaction>
          <Styled.SectionInput>
            <Styled.LabelInput>
              Nome no cartao:
            </Styled.LabelInput>
            <Styled.InputBox
              type="text"
              name="name"
              placeholder="nome"
              onChange={e => setName(e.target.value)}
              required
            />
          </Styled.SectionInput>
          <Styled.SectionInput>
            <Styled.LabelInput>
              Numero do cartao:
            </Styled.LabelInput>
            <Styled.InputBoxNumberCard
              mask="9999 9999 9999 9999"
              maskChar={null}
              placeholder="**** **** **** ****"
              type="text"
              id="creditCard"
              name="numberCard"
              onChange={e => setNumberCard(e.target.value)}
              required
            />
          </Styled.SectionInput>
          <Styled.SectionInputDate>
            <Styled.SectionInput>
              <Styled.LabelInput>
                Validade:
              </Styled.LabelInput>
              <Styled.InputBoxNumber
                mask='99/99'
                type="text"
                name="name"
                placeholder="MM/AA"
                maskChar={null}
                onChange={e => setDueDate(e.target.value)}
                required
              />
            </Styled.SectionInput>
            <Styled.SectionInput>
              <Styled.LabelInput>
                CVV:
              </Styled.LabelInput>
              <Styled.InputBoxNumber
                maxLength={3}
                type="text"
                name="name"
                onChange={e => setValidateCode(e.target.value)}
                placeholder="***"
                required
              />
            </Styled.SectionInput>
          </Styled.SectionInputDate>
          <Styled.SectionInput>

            <Styled.LabelInput>
              Valor R$:
            </Styled.LabelInput>
            <Styled.SelectOption id="selectOptions" value={selectedOption} onChange={handleSelectChange}>
              <option value="">Selecione...</option>
              {options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </Styled.SelectOption>
          </Styled.SectionInput>
          <Styled.ButtonContainer>
            <Styled.ButtonSend onClick={handleNewTransaction}>Finalizar</Styled.ButtonSend>
          </Styled.ButtonContainer>
        </Styled.ContainerTransaction>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </Styled.Container>
    </>
  )
}