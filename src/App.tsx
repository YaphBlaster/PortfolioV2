import React, { useEffect } from 'react';
import './App.css';
import styled from 'styled-components/macro';
import GlobalFonts from './fonts/fonts';
import Home from 'containers/Home/Home';
import { persistor } from './Redux/store';
const Regular = styled.div`
  font-family: 'Custom Font Regular';
`;

const Medium = styled.div`
  font-family: 'Custom Font Medium';
`;

const Bold = styled.div`
  font-family: 'Custom Font Bold';
`;

const AppStyled = styled.div`
  font-family: 'Custom Font Regular';
`;

function App() {
  useEffect(() => {
    persistor.purge();
    return () => {
      persistor.flush();
    };
  }, []);
  return (
    <>
      <GlobalFonts />
      <AppStyled>
        <header className='App-header'>
          <Regular>Yaphet Abraha</Regular>
          <Medium>Yaphet Abraha</Medium>
          <Bold>Yaphet Abraha</Bold>
          <Home />
        </header>
      </AppStyled>
    </>
  );
}

export default App;
