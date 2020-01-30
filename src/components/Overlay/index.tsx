import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface IIncomingProps {
  title: string;
  body: React.ReactNode;
  show: boolean;
  onClose: () => void;
}

type Props = IIncomingProps;

class Overlay extends React.Component<Props> {
  render() {
    if (!this.props.show) {
      return null;
    }

    return (
      <Wrapper>
        <CloseButton onClick={() => this.props.onClose()}>
          <FontAwesomeIcon icon={['fas', 'times']} />
        </CloseButton>

        <Title>{this.props.title}</Title>

        <BodyWrapper>{this.props.body}</BodyWrapper>
      </Wrapper>
    );
  }
}

export default Overlay;

const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #fcfcfc;
  z-index: 1200;
  padding: 10px;
  overflow: auto;

  animation: fadeIn ease 0.5s;
  -webkit-animation: fadeIn ease 0.5s;
  -moz-animation: fadeIn ease 0.5s;
  -o-animation: fadeIn ease 0.5s;
  -ms-animation: fadeIn ease 0.5s;

  @keyframes fadeIn {
    0% {
      opacity:0;
    }
    100% {
      opacity:1;
    }
  }
  
  @-moz-keyframes fadeIn {
    0% {
      opacity:0;
    }
    100% {
      opacity:1;
    }
  }
  
  @-webkit-keyframes fadeIn {
    0% {
      opacity:0;
    }
    100% {
      opacity:1;
    }
  }
  
  @-o-keyframes fadeIn {
    0% {
      opacity:0;
    }
    100% {
      opacity:1;
    }
  }
  
  @-ms-keyframes fadeIn {
    0% {
      opacity:0;
    }
    100% {
      opacity:1;
  }
`;

const Title = styled.div.attrs({ className: 'display-3' })`
  background: rgb(34, 193, 195);
  background: radial-gradient(
    circle,
    rgba(34, 193, 195, 1) 0%,
    rgba(253, 187, 45, 1) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const CloseButton = styled.div`
  position: absolute;
  top: 15px;
  right: 15px;
  color: #182026;
  font-size: 24px;
  cursor: pointer;
`;

const BodyWrapper = styled.div`
  max-width: 450px;
  margin: 0 auto;
  padding-top: 60px;
`;

export const OverlayParagraph = styled.div.attrs({ className: 'lead' })`
  padding-bottom: 17px;
`;
