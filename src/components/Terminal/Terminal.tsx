import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { xonokai as stylePrism } from 'react-syntax-highlighter/dist/esm/styles/prism';
import styled from 'styled-components/macro';

const StyledHightlighter = styled(SyntaxHighlighter)`
  white-space: pre !important;
  code:nth-child(2) {
    white-space: pre !important;
  }
`;

const TerminalWindow = styled.div`
  border-radius: 25px;
  margin: 0 auto;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  color: black;
  background-color: #2a2a2a;
  margin-top: 30px;
  margin-bottom: 30px;
  pre {
    border: none !important;
  }
`;

const Bar = styled.div`
  height: 25px;
  background-color: #dad9d9;
  border-radius: 8px 8px 0 0;
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  align-self: center;
  margin-top: -17.5px;
`;

const ButtonContainer = styled.div`
  display: flex;
  width: 70px;
  margin-left: 10px;
  div {
    border-radius: 100%;
    width: 15px;
    height: 15px;
    margin: 0 auto;
    margin-top: 5px;
  }
`;

interface Props {
  text: string;
  hideLines: boolean;
  hideBar: boolean;
  header: string;
}

const Terminal = ({ text, hideLines, hideBar, header }: Props) => {
  const buttonColours = ['#e94b35', '#f0f000', '#1aaf4c'];

  return (
    <TerminalWindow>
      {!hideBar && (
        <Bar>
          <ButtonContainer>
            {buttonColours.map((colour, index) => {
              return <div key={index} style={{ backgroundColor: colour }} />;
            })}
          </ButtonContainer>
          <Header>{header}</Header>
        </Bar>
      )}
      <StyledHightlighter
        language='jsx'
        style={stylePrism}
        showLineNumbers={!hideLines}
      >
        {`${text}`}
      </StyledHightlighter>
    </TerminalWindow>
  );
};

export default Terminal;
