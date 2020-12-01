import { useEffect, useState } from 'react';
import styled from 'styled-components';

const MenuItemStyled = styled.li`
  display: block;
  list-style: none;
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
  color: ${({ theme, active }) => active && theme.active};

  @media screen and (min-width: 600px) {
    &:hover {
      color: ${({ theme }) => theme.hover};
    }
  }
`;

const MenuItem = ({ text, filter, value, changeFilterMenu, children }) => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (filter === value) {
      setActive(true);
    } else {
      setActive(false);
    }
  }, [filter, value]);

  return (
    <MenuItemStyled active={active} onClick={() => changeFilterMenu(value)}>
      {text}
      {children}
    </MenuItemStyled>
  );
};

export default MenuItem;
