import React from 'react';
import './App.css';
import NavBar from './components/navbar/NavBar';
import ItemListContainer from './components/ItemListContainer/itemListContainer';

function App() {
  return (
    <>
      <div className="App">
        <NavBar />
        <ItemListContainer greeting={'Bienvenidos a 3ER Brothers. Sitio actualmente en mantenimiento, los esperamos dentro de poco.'} />
      </div>
      <p className="read-the-docs"></p>
    </>
  );
}

export default App;
