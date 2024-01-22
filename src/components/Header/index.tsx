import Logo from '../../assets/logo.svg';
import { HeaderContainer } from './styles';
import { Timer, Scroll } from '@phosphor-icons/react';
import { NavLink } from 'react-router-dom';

export function Header() {
  return (
    <HeaderContainer>
      <img src={Logo} alt="logo inicial" />
      <nav>
        <NavLink to="/" title="Timer">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history" title="Histórico">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  );
}
