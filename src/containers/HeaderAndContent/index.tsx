import React from 'react';
import styled from 'styled-components';

import Header from '../Header';
// import cloudSvg from './cloud.svg';

class HeaderAndContent extends React.Component {
  render() {
    return (
      <Wrapper>
        <Header />

        {this.props.children}

        {/* <Cloud src={cloudSvg} /> */}
      </Wrapper>
    );
  }
}

export default HeaderAndContent;

const Wrapper = styled.div`
  min-height: 100vh;
  // background-color: #87ceeb;
  background-color: #fcfcfc;
  padding: 10px;
  height: 100%;
  width: 100%;
  position: relative;
  padding-bottom: 50px;
`;

// const Cloud = styled.img`
//   position: fixed;
//   bottom: -60px;
//   left: 35px;
//   height: 300px;
//   width: auto;
// `;
