import React from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Intent } from '@blueprintjs/core';

import Select, { IOptionData } from '../../components/Select';
import { Creators } from '../../redux/actions';
import { IRootState } from '../../redux/reducers';
import { AppToaster } from '../../components/AppToaster';
import { verseWasPreserved, showNeedsMetaMaskToast } from '../../utils';

type Props = ReturnType<typeof mapState> & ReturnType<typeof mapDispatch>;

class Verses extends React.Component<Props> {
  onChange = async (selectedOption: any) => {
    this.props.setSelectedVerse(selectedOption);

    this.connectToWallet()
  };

  connectToWallet = async () => {
    if (!window.ethereum) {
      showNeedsMetaMaskToast();

      return;
    }

    try {
      const enabled = await window.ethereum.enable();

      if (!enabled || !Array.isArray(enabled) || enabled.length === 0) {
        showNeedsMetaMaskToast();
      }
    } catch (_) {
      AppToaster.show({
        message: "This dapp must connect to your wallet to preserve a verse.",
        intent: Intent.DANGER,
        action: {
          onClick: () => this.connectToWallet(),
          text: <strong>Connect</strong>,
        },
      });
    }
  }

  render = () => {
    const {
      loadingVerses,
      verses,
      selectedBook,
      selectedChapter,
      selectedVerse,
      preserved,
    } = this.props;

    const items: IOptionData[] = (verses || []).map(item => {
      const verse: IOptionData = {
        value: item.name,
        label: {
          left: `Verse ${item.name}`,
          right: '',
        },
        text: item.text,
        isDisabled: false,
      };

      const wasPreserved = verseWasPreserved(preserved, verse);

      if (wasPreserved || item.added) {
        verse.isDisabled = true;
        verse.label.right = 'Already preserved';
      }

      return verse;
    });

    return (
      <Wrapper>
        <Select
          items={items}
          loading={loadingVerses}
          disabled={
            loadingVerses ||
            !selectedBook ||
            !selectedChapter ||
            !verses ||
            !Array.isArray(verses) ||
            verses.length === 0
          }
          placeholder="Pick a verse"
          onChange={this.onChange}
          value={selectedVerse}
        />
      </Wrapper>
    );
  };
}

function mapState(state: IRootState) {
  return {
    verses: state.bible.verses,
    loadingVerses: state.bible.loadingVerses,
    selectedBook: state.bible.selectedBook,
    selectedChapter: state.bible.selectedChapter,
    selectedVerse: state.bible.selectedVerse,
    preserved: state.bible.preserved,
  };
}

function mapDispatch(dispatch: Dispatch) {
  return bindActionCreators(Creators, dispatch);
}

export default connect(mapState, mapDispatch)(Verses);

const Wrapper = styled.div`
  height: 100%;
`;
