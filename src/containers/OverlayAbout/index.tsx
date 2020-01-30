import React from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';

import Overlay, { OverlayParagraph } from '../../components/Overlay';
import { Creators } from '../../redux/actions';
import { IRootState } from '../../redux/reducers';

type Props = ReturnType<typeof mapState> & ReturnType<typeof mapDispatch>;

class OverlayAbout extends React.Component<Props> {
  render() {
    const body = (
      <div>
        <OverlayParagraph>
          Our Bible preserves the KJV Bible on the Ethereum blockchain one verse
          at a time.
        </OverlayParagraph>
        <OverlayParagraph>
          Christians are persecuted around the world. In China, the Communist
          party arrested pastors and{' '}
          <a
            href="https://www.theguardian.com/world/2019/jan/13/china-christians-religious-persecution-translation-bible"
            target="_blank"
            rel="noopener noreferrer"
          >
            altered the Bible's text
          </a>
          .
        </OverlayParagraph>
        <OverlayParagraph>
          The word of God faces threats from an ever-growing list of Bible
          versions as well. Bible versions besides KJV purport to improve
          readability, while in actuality they{' '}
          <a
            href="https://www.openthoumineeyes.com/articles/Bible_changes.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            change the meaning of verses and outright remove them
          </a>
          .
        </OverlayParagraph>
        <OverlayParagraph>
          Thanks to the immutable nature of Ethereum's blockchain, we have an
          opportunity to preserve the Bible. Together, we can add one verse at a
          time to the blockchain so it may be retrieved in a distributed way.
        </OverlayParagraph>
        <OverlayParagraph>
          We can work together to maintain the word of God — free from the
          tampering of those who would seek its diminishment through
          adulteration.
        </OverlayParagraph>
      </div>
    );

    return (
      <Overlay
        show={this.props.showAbout}
        title="About"
        body={body}
        onClose={() => this.props.setShowAbout(false)}
      />
    );
  }
}

function mapState(state: IRootState) {
  return {
    showAbout: state.overlays.showAbout,
  };
}

function mapDispatch(dispatch: Dispatch) {
  return bindActionCreators(Creators, dispatch);
}

export default connect(mapState, mapDispatch)(OverlayAbout);
