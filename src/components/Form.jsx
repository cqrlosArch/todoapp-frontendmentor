import { useState } from 'react';
import styled from 'styled-components';
import Button from './Button';

const FormStyled = styled.form`
  position: relative;
  top: -130px;
  width: 100%;
  padding: 0 2rem;
  height: 50px;
  display: flex;
  align-items: center;

  .form__input {
    position: relative;
    width: 100%;
    outline: none;
    border: none;
    background-color: ${({ theme }) => theme.task};
    height: 50px;
    border-radius: 5px;
    padding-left: 3rem;
    padding-right: 1rem;
    font-size: 16px;
    font-family: 'Josefin Sans', sans-serif;
    color: ${({ theme }) => theme.colorInput};
  }
`;

const Form = ({ getTaskForm }) => {
  const [value, setValue] = useState('');

  const onHandleSubmit = (e) => {
    e.preventDefault();
    setValue('');
    getTaskForm(e);
  };

  return (
    <FormStyled onSubmit={(e) => onHandleSubmit(e)}>
      <Button left={'54px'} />
      <input
        type="text"
        placeholder="Create a new todo..."
        className="form__input"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        name="task"
        required
        title='Create a new todo'
      />
    </FormStyled>
  );
};

export default Form;
