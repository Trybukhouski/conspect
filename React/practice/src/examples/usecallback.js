import {useCallback, useState} from 'react';
import {ItemsList} from './examples/ItemsList';

function App() {

  const [count, setCount] = useState(1);
  const [colored, setColored] = useState(false);

  const styles = {
    color: colored ? 'red' : 'blue'
  }

  let generateCountsFromAPI = useCallback(() => {
    return new Array(count).fill('').map((_, i) => `Элемент № ${i + 1}`);
  }, [count])

  return (
    <>
      <h1 style={styles}>Количество элементов: {count}</h1>
      <button onClick={() => setCount(prev => prev + 1)}>Добавить</button>
      <button onClick={() => setColored(prev => !prev)}>Изменить</button>

      <ItemsList getItems={generateCountsFromAPI}/>
    </>
  );
}

export default App;
