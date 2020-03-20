import React from 'react';
import './App.css';
import styled from 'styled-components/macro';
import GlobalFonts from './fonts/fonts';
import Home from 'containers/Home/Home';
import OldSchoolHome from 'containers/OldSchoolHome/OldSchoolHome';
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
  overflow: hidden;
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: calc(10px + 2vmin);
  color: white;
  padding: 20px;
  box-sizing: border-box;
`;

function App() {
  return (
    <>
      <GlobalFonts />
      <AppStyled>
        <OldSchoolHome />
        <Home />
        <Regular>Yaphet Abraha</Regular>
        <Medium>Yaphet Abraha</Medium>
        <Bold>Yaphet Abraha</Bold>
      </AppStyled>
    </>
  );
}

export default App;
