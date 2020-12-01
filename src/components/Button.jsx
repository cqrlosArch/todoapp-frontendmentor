import styled, { css } from 'styled-components';

const ButtonStyled = styled.button.attrs((props) => ({
  type: props.submit && 'submit',
}))`
  outline: none;
  border: none;
  display: block;
  position: absolute;
  z-index: 10;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  border: 1px solid
    ${({ theme, status }) => (status ? 'none' : theme.buttonInput)};
  top: 13px;
  left: ${({ left }) => left};
  background: ${({ status, theme }) =>
    status ? `${theme.checkbg}` : 'transparent'};
  cursor: pointer;
  ${({ status }) =>
    status &&
    css`
      &::after {
        content: '';
        width: 10px;
        height: 10px;
        position: absolute;
        z-index: 15;
        top: 4px;
        left: 5px;
        background: url('images/icon-check.svg') no-repeat center;
        background-size: 100%;
      }
    `}
`;

const Button = ({ left, changeStatusTask, id, status }) => {
  const handleClick = () => {
    if (changeStatusTask) {
      changeStatusTask(id);
    }
  };

  return (
    <ButtonStyled
      type="button"
      left={left}
      onClick={handleClick}
      status={status}
    ></ButtonStyled>
  );
};

export default Button;
