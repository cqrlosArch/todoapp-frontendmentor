import styled from 'styled-components';

const DeleteAllStyled = styled.button`
  border: none;
  outline: none;
  background-color: transparent;
  color: ${({ theme }) => theme.buttonInput};
  font-family: 'Josefin Sans', sans-serif;
  font-size: 14px;
  cursor: pointer;
  width: 170px;
`;

const DeleteAll = ({ text, clearCompleted }) => {
  return <DeleteAllStyled onClick={clearCompleted}>{text}</DeleteAllStyled>;
};

export default DeleteAll;
