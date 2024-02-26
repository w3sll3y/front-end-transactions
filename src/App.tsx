import { Route, Routes } from "react-router-dom";

import useAuth from "./hooks/useAuth";

import { Login } from "./screens/Login";
import { SignUp } from "./screens/SignUp";
import { Home } from "./screens/Home";
import { NewTransaction } from "./screens/NewTransaction";
import { Transactions } from "./screens/Transactions";

const Private = ({ Item }) => {
  const { signed } = useAuth();

  return signed == true ? <Item /> : <Login />
}

const Logged = ({ Item }) => {
  const { signed } = useAuth();

  return signed == false ? <Login /> : <Home />
}

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Logged Item={Login} />} />
        <Route path="*" element={<Logged Item={Login} />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<Private Item={Home} />} />
        <Route path="/new-transaction" element={<Private Item={NewTransaction} />} />
      </Routes>
    </>
  )
}

export default App
