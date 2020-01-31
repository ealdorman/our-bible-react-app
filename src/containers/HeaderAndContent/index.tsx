import React from 'react';
import styled from 'styled-components';

import Header from '../Header';

class HeaderAndContent extends React.Component {
  render() {
    return (
      <Wrapper>
        <Header />
        {this.props.children}
      </Wrapper>
    );
  }
}

export default HeaderAndContent;

const Wrapper = styled.div`
  min-height: 100vh;
  background-color: #fcfcfc;
  padding: 10px;
  height: 100%;
  width: 100%;
  position: relative;
  padding-bottom: 50px;
`;
