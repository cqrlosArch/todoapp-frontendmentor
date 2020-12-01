import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';
import Counter from './Counter';
import DeleteAll from './DeleteAll';
import Task from './Task';

const ListTaskStyled = styled.div`
  width: 100%;
  height: auto;
  padding: 0 2rem;
  position: relative;
  top: -100px;

  .list__tasks {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    background-color: ${({ theme }) => theme.task};
    overflow: hidden;
  }

  .countainer__counter {
    width: inherit;
    height: 50px;
    display: flex;
    align-items: center;
    background-color: ${({ theme }) => theme.task};
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 1rem;
    color: ${({ theme }) => theme.buttonInput};
    box-shadow: 2px 14px 22px -5px rgba(0, 0, 0, 0.3);
    
  }
`;

const ListTask = ({
  tasks,
  deleteTask,
  changeStatusTask,
  filter,
  clearCompleted,
  handleOnDragEnd,
}) => {
  return (
    <ListTaskStyled>
      <DragDropContext onDragEnd={(e) => handleOnDragEnd(e)}>
        <Droppable droppableId="tasks">
          {(provided) => (
            <ul
              className="list__tasks tasks"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {tasks?.map((task, index) => {
                return (
                  (filter === 'all' ||
                    (filter === 'completed' && task.status) ||
                    (filter === 'active' && !task.status)) && (
                    <Draggable
                      key={task.id}
                      draggableId={task.id}
                      index={index}
                    >
                      {(provided) => (
                        <Task
                          key={task.id}
                          task={task}
                          deleteTask={deleteTask}
                          changeStatusTask={changeStatusTask}
                          provided={provided}
                        ></Task>
                      )}
                    </Draggable>
                  )
                );
              })}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
      <div className="countainer__counter">
        <Counter tasks={tasks} />
        <DeleteAll clearCompleted={clearCompleted} text={'Clear Completed'} />
      </div>
    </ListTaskStyled>
  );
};

export default ListTask;
