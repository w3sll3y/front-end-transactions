import { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import * as Styled from './styles';
import { Header } from "./components/Header";
import axios from "axios";
import useAuth from "../../hooks/useAuth";

export function Home() {
  const notifyErr = (err) => toast.error(err);
  const { user } = useAuth();
  const [data, setData] = useState();
  const token = localStorage.getItem('token');

  async function getMyTransactions() {
    try {
      const response = await axios.get(`http://localhost:3000/transactions/${user?.id}`,
        {
          headers: {
            'Content-Type': 'application/json',
            'access-token': JSON.parse(token).token
          },
        }
      );
      setData(response?.data);
    } catch (err) {
      notifyErr("Erro buscar transações. Tente novamente.");
    }
  }
  useEffect(() => {
    getMyTransactions();
  }, []);
  return (
    <Styled.Container>
      <Header />
      {data?.length > 0 ? (
        <>
          <Styled.Title>
            Minhas Transações
          </Styled.Title>
          <Styled.ListTransactions>

            <TableContainer component={Paper} style={{ maxHeight: '600px', scrollbarWidth: '0.1em' }}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell><b>Id da compra</b></TableCell>
                    <TableCell align="right"><b>Data da compra</b></TableCell>
                    <TableCell align="right"><b>Valor</b></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data?.map((row) => (
                    <TableRow
                      key={row.name}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {row.id}
                      </TableCell>
                      <TableCell align="right">{row.createdAt}</TableCell>
                      <TableCell align="right">{row.value}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Styled.ListTransactions>
        </>
      ) : (
        <Styled.EmptyTransactions>
          <Styled.Title>
            Voce ainda nao possui transações
          </Styled.Title>
        </Styled.EmptyTransactions>
      )}
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
  )
}