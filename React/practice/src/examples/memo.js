import {useState, useMemo} from 'react';

function App() {

  function complexComputed(el) {
    let num = 1;
    while (num < 1000000000) num++;
    return el * 2;
  }



  const [value, setValue] = useState(42);
  const [colored, setColored] = useState(false);

  const computed = useMemo(() => {
    return complexComputed(value)
  }, [value]);

  const styles = {
    color: colored ? 'red' : 'blue',
  }

  return (
    <div className="App">
      <h1 style={styles}>Значение: {computed}</h1>
      <button onClick={() => setValue(prev => prev - 1)}>Минус</button>
      <button onClick={() => setValue(prev => prev + 1)}>Плюс</button>
      <button onClick={() => setColored(prev => !prev)}>Change</button>
    </div>
  );
}

export default App;
