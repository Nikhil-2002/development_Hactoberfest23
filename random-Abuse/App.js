
import React, { useState, useEffect } from 'react';
import generateEmoji from './emoji';
import cuss from './cuss'
import './App.css';
function App() {

  const [gaali, setGaali] = useState('');
  const [emoji, setEmoji] = useState('😝')
  var myHeaders = new Headers();
  myHeaders.append("apikey", "RdjLZk8iRWhN2whZ1lvetJBKSb6M0Ll5");

  useEffect(() => {
    generateGaali()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  const generateGaali = async () => {
    setEmoji(generateEmoji)

    setGaali(cuss)

  }
  return (
    <div className="App">
      <header className='App-header'>
     
        <p style={{ fontSize: 128 , margin:8 }}>{emoji}</p>

        <h3 style={{ fontSize: 100 , margin:8 }}>{gaali}</h3>

        <p>
          Random Gaali Generator
        </p>

        <button style={{
          marginTop: '32px',
          marginBottom: '32px',
          padding: '16px',
          width: '120px',
          boxShadow: '0px 0px 7px 2px gray',
          background: 'antiquewhite',
          borderRadius: '8px'
        }} onClick={generateGaali}>generate</button>
    
    </header>


    </div>
  );
}

export default App;
