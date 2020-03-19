import React from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components/macro';
import GlobalFonts from './fonts/fonts';

const Regular = styled.div`
  font-family: 'Custom Font Regular';
`;

const Medium = styled.div`
  font-family: 'Custom Font Medium';
`;

const Bold = styled.div`
  font-family: 'Custom Font Bold';
`;

const AppStyled = styled.div``;

function App() {
  return (
    <AppStyled>
      <header className='App-header'>
        <GlobalFonts />
        <Regular>Yaphet Abraha</Regular>
        <Medium>Yaphet Abraha</Medium>
        <Bold>Yaphet Abraha</Bold>
      </header>
    </AppStyled>
  );
}

export default App;
