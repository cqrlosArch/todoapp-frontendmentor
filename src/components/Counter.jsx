import { useEffect, useState } from 'react';
import styled from 'styled-components';

const CounterStyled = styled.p`
  width: 100%;
  font-size: 14px;
`;

const Counter = ({ tasks }) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    let count = 0;
    tasks?.forEach((task) => {
      if (!task.status) {
        count++;
      }
    });
    setCounter(count);
  }, [tasks]);
  return <CounterStyled>{counter} items left</CounterStyled>;
};

export default Counter;
