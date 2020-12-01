import styled from 'styled-components'

const WrapperStyled = styled.div`
    max-width:600px;
    margin-left:auto;
    margin-right:auto;
    display:flex;
    flex-direction:column;
    justify-content:space-evenly;
    align-items:stretch;
    margin-bottom:1rem;
`;

const Wrapper = ({children}) =>{
  return(
    <WrapperStyled>
       {children}
    </WrapperStyled>
    );
}

export default Wrapper