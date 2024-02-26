import { NavLink, useNavigate } from "react-router-dom";

import * as Styled from './styles';
import useAuth from "../../../../hooks/useAuth";
import { useState } from "react";

export function Header() {

  const navigate = useNavigate();
  const { user } = useAuth();
  const [thisUser, setThisUser] = useState(user);

  function handleGoLogin() {
    navigate("/login");
  }
  const handleLoggout = async () => {
    localStorage.removeItem('token');
    await handleGoLogin();
    window.location.reload(false);
  };

  return (
    <Styled.Container>
      <Styled.MenuTextContainer>
        <p>
          Olá {thisUser?.name}
        </p>
      </Styled.MenuTextContainer>
      <Styled.MenuItems>
        <NavLink to="/home">Inicio</NavLink>
        <NavLink to="/new-transaction">Nova transacao</NavLink>
      </Styled.MenuItems>
      <Styled.ButtonLoggoutContainer>
        <Styled.ButtonLoggout onClick={handleLoggout}>
          sair
        </Styled.ButtonLoggout>
      </Styled.ButtonLoggoutContainer>
    </Styled.Container>
  )
}