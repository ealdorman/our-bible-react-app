import React from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';

import Overlay, { OverlayParagraph } from '../../components/Overlay';
import { Creators } from '../../redux/actions';
import { IRootState } from '../../redux/reducers';

type Props = ReturnType<typeof mapState> & ReturnType<typeof mapDispatch>;

class OverlayDidYouKnow extends React.Component<Props> {
  render() {
    const body = (
      <div>
        <OverlayParagraph>
          You don't have to come to this website to preserve a Bible verse on
          the Ethereum blockchain. You can simply send at least 0.015 ETH to:
        </OverlayParagraph>
        <OverlayParagraph>ourbible.eth</OverlayParagraph>
        <OverlayParagraph>
          By sending 0.015 ETH to ourbible.eth, a randomly selected Bible verse
          will be preserved on the Ethereum blockchain.
        </OverlayParagraph>
      </div>
    );

    return (
      <Overlay
        show={this.props.showDidYouKnow}
        title="Did you know?"
        body={body}
        onClose={() => this.props.setShowDidYouKnow(false)}
      />
    );
  }
}

function mapState(state: IRootState) {
  return {
    showDidYouKnow: state.overlays.showDidYouKnow,
  };
}

function mapDispatch(dispatch: Dispatch) {
  return bindActionCreators(Creators, dispatch);
}

export default connect(mapState, mapDispatch)(OverlayDidYouKnow);
