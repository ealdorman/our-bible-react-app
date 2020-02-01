import React, { RefObject } from 'react';
import styled from 'styled-components';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';

import { Creators } from '../../redux/actions';
import logo from '../../images/ealdorman_logo.svg';

interface IState {
  footerHeight?: number;
}

type Props = ReturnType<typeof mapDispatch>;

class Footer extends React.Component<Props, IState> {
  footerWrapper: RefObject<any>;

  constructor(props: Props) {
    super(props);

    this.state = {};

    this.footerWrapper = React.createRef();
  }

  componentDidMount() {
    if (!this.footerWrapper || !this.footerWrapper.current || !this.footerWrapper.current.offsetHeight) {
      return;
    }

    this.setState({ footerHeight: this.footerWrapper.current.offsetHeight });
  }

  render() {
    return (
      <Wrapper ref={this.footerWrapper}>
        <ContentWrapper>
          <Company>
            <Logo src={logo} alt="Ealdorman logo" />
            <CompanyLink href="https://ealdorman.com" target="_blank">
              Ealdorman, Inc.
            </CompanyLink>
          </Company>

          <OverlayLinks>
            <OverlayLink onClick={() => this.props.setShowAbout(true)}>
              About
            </OverlayLink>

            <OverlayLink onClick={() => this.props.setShowHowThisWorks(true)}>
              How this works
            </OverlayLink>

            <OverlayLink onClick={() => this.props.setShowDidYouKnow(true)}>
              Did you know?
            </OverlayLink>
          </OverlayLinks>
        </ContentWrapper>

        {this.state.footerHeight && (
          <WaveWrapper>
            <svg xmlns="http://www.w3.org/2000/svg" height={this.state.footerHeight + 85} width="100%" preserveAspectRatio="none" viewBox="0 0 1440 320">
              <defs>
                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" style={{ stopColor: '#F6BB33', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#72B95D', stopOpacity: 1 }} />
                </linearGradient>
              </defs>
              <path fill="url(#grad1)" fillOpacity="1" d="M0,96L80,96C160,96,320,96,480,117.3C640,139,800,181,960,197.3C1120,213,1280,203,1360,197.3L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
            </svg>
          </WaveWrapper>
        )}
      </Wrapper>
    );
  }
}

function mapDispatch(dispatch: Dispatch) {
  return bindActionCreators(Creators, dispatch);
}

export default connect(null, mapDispatch)(Footer);

const Wrapper = styled.div`
  padding-left: 25px;
  padding-right: 10px;
  padding-top: 35px;
  padding-bottom: 55px;
  display: flex;
  align-items: center;
  background-color: #fcfcfc;
  position: relative
`;

const ContentWrapper = styled.div`
  z-index: 900;
`;

const Company = styled.div``;

const CompanyLink = styled.a`
  text-decoration: none;
  color: #4a4a4a;

  &:hover {
    color: #182026;
  }
`;

const OverlayLinks = styled.div`
  padding-top: 12px;
`;

const OverlayLink = styled.div`
  text-decoration: underline;
  color: #4a4a4a;
  cursor: pointer;
  padding-top: 15px;

  &:hover {
    color: #4a4a4a;
  }
`;

const Logo = styled.img`
  height: 14px;
  padding-right: 3px;
`;

const WaveWrapper = styled.div`
  position: absolute;
  bottom: 0px;
  left: 0px;
  right: 0px;
  hight: 300px;
  width: 100%;
  z-index: 800;
`;
