import React from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { Creators } from '../../redux/actions';
import { IRootState } from '../../redux/reducers';

type Props = ReturnType<typeof mapState> & ReturnType<typeof mapDispatch>;

class SelectedVerse extends React.Component<Props> {
  render() {
    const { selectedBook, selectedChapter, selectedVerse } = this.props;

    if (!selectedVerse || !selectedVerse.text) {
      return null;
    }

    return (
      <Wrapper>
        <VerseText>{selectedVerse.text}</VerseText>

        <VerseIdentifier>
          {selectedBook && selectedBook.value && selectedBook.value}{' '}
          {selectedChapter && selectedChapter.value && selectedChapter.value}:
          {selectedVerse && selectedVerse.value && selectedVerse.value}
        </VerseIdentifier>
      </Wrapper>
    );
  }
}

function mapState(state: IRootState) {
  return {
    selectedBook: state.bible.selectedBook,
    selectedChapter: state.bible.selectedChapter,
    selectedVerse: state.bible.selectedVerse,
  };
}

function mapDispatch(dispatch: Dispatch) {
  return bindActionCreators(Creators, dispatch);
}

export default connect(mapState, mapDispatch)(SelectedVerse);

const Wrapper = styled.div`
  color: #404040;
`;

const VerseText = styled.div`
  font-size: 1.5em;
  font-style: italic;
  padding-top: 25px;
`;

const VerseIdentifier = styled.div`
  padding-top: 5px;
`;
