import { useEffect, useState } from 'react';
import { createGlobalStyle } from 'styled-components';
import { ThemeProvider } from 'styled-components';
import Footer from './components/Footer';
import Form from './components/Form';
import Header from './components/Header';
import ListTask from './components/ListTask';
import Menu from './components/Menu';
import { lightTheme, darkTheme } from './components/Themes';
import Wrapper from './components/Wrapper';
import './normalize.css';

const GlobalStyled = createGlobalStyle`
  html{
    font-family: 'Josefin Sans', sans-serif;
    font-size: 18px;
    box-sizing:border-box;
  }

  *,
  *::after,
  *::before{
    box-sizing:inherit
  }

  body{
    width:100vw;
    margin:0;
    color:${({ theme }) => theme.text};
    background-color: ${({ theme }) => theme.body};
    overflow-x:hidden;
  }

`;
const initTasks = [
  {
    id: '1',
    text: 'Follow me on GitHub',
    status: false,
  },
  {
    id: '2',
    text: 'Set up Alexa',
    status: false,
  },
];
function App() {
  const [theme, setTheme] = useState('dark');
  const [tasks, setTasks] = useState(initTasks);
  const [filter, setFilter] = useState('all');

  const changeTheme = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };
  const getTaskForm = (e) => {
    e.preventDefault();

    addNewTaskList(e.target.task.value);
  };

  const addNewTaskList = (task) => {
    const newTask = {
      id: Date.now().toString(),
      text: task,
      status: false,
    };

    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const changeStatusTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? {
              ...task,
              status: !task.status,
            }
          : task
      )
    );
  };

  const handleOnDragEnd = (e) => {
    if (!e.destination) return;
    const items = Array.from(tasks);
    const [reorderedItem] = items.splice(e.source.index, 1);
    items.splice(e.destination.index, 0, reorderedItem);
    setTasks(items);
  };

  const changeFilterMenu = (filterMenu) => {
    setFilter(filterMenu);
  };
  const clearCompleted = () => {
    setTasks(tasks.filter((task) => !task.status));
  };
  useEffect(() => {
    if (localStorage.getItem('todoApp')) {
      setTasks(JSON.parse(localStorage.getItem('todoApp')));
    } else {
      setTasks(initTasks);
      localStorage.setItem('todoApp', JSON.stringify(initTasks));
    }
  }, []);

  useEffect(() => {
    if (tasks) localStorage.setItem('todoApp', JSON.stringify(tasks));
  }, [tasks]);

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyled />
      <Header changeTheme={changeTheme} />
      <Wrapper>
        <Form getTaskForm={getTaskForm} />
        <ListTask
          tasks={tasks}
          deleteTask={deleteTask}
          changeStatusTask={changeStatusTask}
          filter={filter}
          clearCompleted={clearCompleted}
          handleOnDragEnd={handleOnDragEnd}
        />
        <Menu filter={filter} changeFilterMenu={changeFilterMenu} tasks={tasks} clearCompleted={clearCompleted}/>
        <Footer />
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
