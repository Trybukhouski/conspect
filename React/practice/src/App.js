import React from 'react';
import {Main} from './examples/Main';
import {Alert} from './examples/Alert/Alert';
import {AlertProvider} from './examples/Alert/AlertContext';

function App() {

  return (
    <AlertProvider>
      <div>
        <Alert/>
        <Main/>
      </div>
    </AlertProvider>
  );
}

export default App;
