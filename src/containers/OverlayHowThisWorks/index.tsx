import React from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';

import Overlay, { OverlayParagraph } from '../../components/Overlay';
import { Creators } from '../../redux/actions';
import { IRootState } from '../../redux/reducers';

type Props = ReturnType<typeof mapState> & ReturnType<typeof mapDispatch>;

class OverlayHowThisWorks extends React.Component<Props> {
  render() {
    const body = (
      <div>
        <OverlayParagraph>
          This site interacts with a <a href="https://github.com/ealdorman/our-bible-contracts" target="_blank" rel="noopener noreferrer">smart contract</a> on the Ethereum blockchain to add verses from the Bible to the blockchain. 
        </OverlayParagraph>
        <OverlayParagraph>
          That smart contract includes an <a href="https://provable.xyz/" target="_blank" rel="noopener noreferrer">oracle</a> that pulls KJV Bible verses from the Our Bible API. Once the oracle retrieves a verse, it sends the verse back to the smart contract where the verse is preserved on the blockchain.
        </OverlayParagraph>
        <OverlayParagraph>
          All of Our Bible is open source! Take a look at how the <a href="https://github.com/ealdorman/our-bible-react-app" target="_blank" rel="noopener noreferrer">site</a>, <a href="https://github.com/ealdorman/our-bible-api" target="_blank" rel="noopener noreferrer">API</a>, and <a href="https://github.com/ealdorman/our-bible-contracts" target="_blank" rel="noopener noreferrer">smart contract</a> work for yourself.
        </OverlayParagraph>
      </div>
    );

    return (
      <Overlay
        show={this.props.showHowThisWorks}
        title="How this works"
        body={body}
        onClose={() => this.props.setShowHowThisWorks(false)}
      />
    );
  }
}

function mapState(state: IRootState) {
  return {
    showHowThisWorks: state.overlays.showHowThisWorks,
  };
}

function mapDispatch(dispatch: Dispatch) {
  return bindActionCreators(Creators, dispatch);
}

export default connect(mapState, mapDispatch)(OverlayHowThisWorks);
