import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Header extends React.Component {
  render() {
    return (
      <Wrapper>
        <GithubIcon
          href="https://github.com/ealdorman/our-bible"
          target="_blank"
        >
          <FontAwesomeIcon icon={['fab', 'github']} />
        </GithubIcon>

        <SiteName>Our Bible</SiteName>

        <Tagline>Preserving the Bible with blockchain</Tagline>
      </Wrapper>
    );
  }
}

export default Header;

const Wrapper = styled.div`
  height: 100%;
  background: rgb(34, 193, 195);
  background: radial-gradient(
    circle,
    rgba(34, 193, 195, 1) 0%,
    rgba(253, 187, 45, 1) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const SiteName = styled.div.attrs({ className: 'display-3' })``;

const Tagline = styled.div`
  font-size: 17px;
`;

const GithubIcon = styled.a`
  position: absolute;
  top: 10px;
  right: 10px;
  color: #182026;
  font-size: 17px;

  &:hover {
    color: #182026;
  }
`;
