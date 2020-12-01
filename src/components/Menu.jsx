import styled from 'styled-components';
import MenuItem from './MenuItem';


const MenuStyled = styled.nav`
  height: 50px;
  display: flex;
  align-items: center;
  margin: 0 2rem;
  margin-top: -3rem;
  background-color: ${({ theme }) => theme.task};
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${({ theme }) => theme.buttonInput};
  box-shadow: 2px 14px 34px 6px rgba(0, 0, 0, 0.2);


  .menu__list {
    padding: 0 2.5rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

`;

const Menu = ({ filter, changeFilterMenu}) => {
  return (
    <MenuStyled>
      <ul className="menu__list">
        
        <MenuItem
          text={'All'}
          filter={filter}
          value={'all'}
          changeFilterMenu={changeFilterMenu}
        />
        <MenuItem
          text={'Active'}
          filter={filter}
          value={'active'}
          changeFilterMenu={changeFilterMenu}
        />
        <MenuItem
          text={'Completed'}
          filter={filter}
          value={'completed'}
          changeFilterMenu={changeFilterMenu}
        />
       
      </ul>

    </MenuStyled>
  );
};

export default Menu;
