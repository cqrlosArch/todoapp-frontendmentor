import styled from 'styled-components';
import Button from './Button';
import {} from 'react-beautiful-dnd';

const TaskStyled = styled.li`
  list-style: none;
  height: 50px;
  display: flex;
  align-items: center;
  padding-left: 1rem;
  padding-right: 1rem;
  position: relative;
  border-bottom: 1px solid ${({ theme }) => theme.border};
  [draggable] {
    user-select: none;
  }

  .task__text {
    margin-left: 2rem;
    font-size: 16px;
    letter-spacing: 0.05rem;
    text-decoration: ${({ status }) => status && 'line-through'};
    color: ${({ status, theme }) => status && theme.border};
  }

  .button__close {
    position: absolute;
    right: 20px;
    background-image: url('images/icon-cross.svg');
    background-repeat: no-repeat;
    background-size: cover;
    height: 15px;
    width: 15px;
    background-color: transparent;
    border: none;
    outline: none;
    display: block;
    opacity: 0.5;
  }
`;

const Task = ({ task, deleteTask, changeStatusTask, provided }) => {
  const { id, text, status } = task;
  return (
    <TaskStyled
      status={status}
      draggable
      ref={provided.innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
    >
      <Button changeStatusTask={changeStatusTask} id={id} status={status}/>
      <p className="task__text">{text}</p>
      <button className="button__close" onClick={() => deleteTask(id)}></button>
    </TaskStyled>
  );
};

export default Task;
