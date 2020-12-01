import styled from 'styled-components';

const ButtonStyled = styled.button`
  outline: none;
  border: none;
  display: block;
  position: absolute;
  z-index: 9990;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.buttonInput};
  top: 13px;
  left: ${({ left }) => left};
  background-color: transparent;
  cursor: pointer;
`;

const Button = ({ left, changeStatusTask, id }) => {
  const handleClick = () => {
    if (changeStatusTask) {
      changeStatusTask(id);
    }
  };

  return <ButtonStyled left={left} onClick={handleClick}></ButtonStyled>;
};

export default Button;
