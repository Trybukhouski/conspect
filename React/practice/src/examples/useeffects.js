import {useState, useEffect} from 'react';

function App() {

  const [type, setType] = useState('users');
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then(response => response.json())
      .then(json => console.log(json))
  }, [type]);

  return (
    <div className="App">
      <h1>Ресурс: {type}</h1>
      <button onClick={() => setType('users')}>Пользователи</button>
      <button onClick={() => setType('todos')}>ToDo</button>
      <button onClick={() => setType('posts')}>Посты</button>
    </div>
  );
}

export default App;