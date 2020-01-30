import React from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import styled from 'styled-components';

import Select, { IOptionData } from '../../components/Select';
import { Creators } from '../../redux/actions';
import { IRootState } from '../../redux/reducers';
import PercentageAdded from '../../components/Select/percentageAdded';

type Props = ReturnType<typeof mapState> & ReturnType<typeof mapDispatch>;

class Chapters extends React.Component<Props> {
  onChange = (selectedOption: any) => {
    this.props.setSelectedChapter(selectedOption);

    this.props.setSelectedVerse(undefined);
    this.props.setVerses([]);

    this.props.getVersesThunk();
  };

  render = () => {
    const {
      loadingChapters,
      chapters,
      selectedBook,
      selectedChapter,
    } = this.props;

    const items: IOptionData[] = (chapters || []).map(item => {
      return {
        value: item.name,
        label: {
          left: `Chapter ${item.name}`,
          right: <PercentageAdded {...item} />,
        },
        isDisabled: item.percentageAdded === 100,
      };
    });

    return (
      <Wrapper>
        <Select
          items={items}
          loading={loadingChapters}
          disabled={
            loadingChapters ||
            !selectedBook ||
            !chapters ||
            !Array.isArray(chapters) ||
            chapters.length === 0
          }
          placeholder="Pick a chapter"
          onChange={this.onChange}
          value={selectedChapter}
        />
      </Wrapper>
    );
  };
}

function mapState(state: IRootState) {
  return {
    chapters: state.bible.chapters,
    loadingChapters: state.bible.loadingChapters,
    selectedBook: state.bible.selectedBook,
    selectedChapter: state.bible.selectedChapter,
  };
}

function mapDispatch(dispatch: Dispatch) {
  return bindActionCreators(Creators, dispatch);
}

export default connect(mapState, mapDispatch)(Chapters);

const Wrapper = styled.div`
  height: 100%;
`;
