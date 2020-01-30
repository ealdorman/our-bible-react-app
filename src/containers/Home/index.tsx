import React from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
// import { Row, Col, Input } from 'reactstrap';
import styled from 'styled-components';

import { Creators } from '../../redux/actions';
import { IRootState } from '../../redux/reducers';
import Books from '../Books';
import Chapters from '../Chapters';
import Verses from '../Verses';
import AddVerse from '../AddVerse';

type Props = ReturnType<typeof mapState> & ReturnType<typeof mapDispatch>;

class Home extends React.Component<Props> {
  render() {
    return (
      <Wrapper>
        <InputWrapper>
          <p className="lead">
            Pick a Bible verse to preserve it on the Ethereum blockchain.
          </p>
          <Books />

          <NestedWrapper>
            <Chapters />
          </NestedWrapper>

          <NestedWrapper>
            <Verses />
          </NestedWrapper>

          <NestedWrapper>
            <AddVerse />
          </NestedWrapper>
        </InputWrapper>
      </Wrapper>
    );
  }
}

function mapState(state: IRootState) {
  return {
    selectedVerse: state.bible.selectedVerse,
  };
}

function mapDispatch(dispatch: Dispatch) {
  return bindActionCreators(Creators, dispatch);
}

export default connect(mapState, mapDispatch)(Home);

const Wrapper = styled.div`
  height: 100%;
  padding-top: 60px;
  z-index: 1000;
  position: relative;
`;

const InputWrapper = styled.div`
  max-width: 450px;
  margin: 0 auto;
`;

const NestedWrapper = styled.div`
  padding-top: 25px;
`;
