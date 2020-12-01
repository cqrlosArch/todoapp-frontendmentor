import styled from 'styled-components';

const HeaderStyled = styled.header`
  background-image: url('images/${({ theme }) => theme.backgroundImg}');
  background-repeat: no-repeat;
  background-size: cover;
  height: 250px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  padding: 2rem;
  @media screen and (min-width: 600px) {
    background-image: url('images/${({ theme }) => theme.backgroundImgDesktop}');
  }
  .title {
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${({ theme }) => theme.title};
    @media screen and (min-width: 600px) {
      justify-content: space-evenly;
     padding:0 2rem;
    }
    &__text {
      letter-spacing: 0.5rem;
      margin: 0;
      font-weight: 500;
     
    }
    &__icon {
      cursor: pointer;
      width: 30px;
      height: 30px;
      background-image: url('images/${({ theme }) => theme.iconMode}');
      background-repeat: no-repeat;
      background-size: 100%;
      background-position: center center;
    
    }
  }
`;

const Header = ({ changeTheme }) => {
  return (
    <HeaderStyled>
      <div className="title">
        <h1 className="title__text">TODO</h1>
        <span className="title__icon" onClick={changeTheme}></span>
      </div>
    </HeaderStyled>
  );
};

export default Header;
