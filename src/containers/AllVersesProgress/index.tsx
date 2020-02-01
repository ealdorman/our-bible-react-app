import React from 'react';
import styled from 'styled-components';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';

import { Creators } from '../../redux/actions';
import { IRootState } from '../../redux/reducers';
import { getProgressBar } from '../../utils';

type Props = ReturnType<typeof mapState> & ReturnType<typeof mapDispatch>;

class AllVersesProgress extends React.Component<Props> {
  render() {
    return (
      <Wrapper>
        {this.props.bible && (
          <TotalProgress>
            <ProgressBarWrapper>
              {getProgressBar(this.props.bible.percentageAdded)}
            </ProgressBarWrapper>

            <div>
              {this.props.bible.percentageAdded}% of all verses preserved
            </div>
          </TotalProgress>
        )}
      </Wrapper>
    );
  }
}

function mapState(state: IRootState) {
  return {
    bible: state.bible.bible,
  };
}

function mapDispatch(dispatch: Dispatch) {
  return bindActionCreators(Creators, dispatch);
}

export default connect(mapState, mapDispatch)(AllVersesProgress);

const Wrapper = styled.div`
  padding-top: 15px;
  height: 60px;
  font-size: 14px;
`;

const TotalProgress = styled.div`
  max-width: 200px;
`;

const ProgressBarWrapper = styled.div`
  padding-bottom: 3px;
`;
