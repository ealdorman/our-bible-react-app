import React from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import styled from 'styled-components';

import Select, { IOptionData } from '../../components/Select';
import { Creators } from '../../redux/actions';
import { IRootState } from '../../redux/reducers';
import PercentageAdded from '../../components/Select/percentageAdded';

type Props = ReturnType<typeof mapState> & ReturnType<typeof mapDispatch>;

class Books extends React.Component<Props> {
  onChange = (selectedOption: any) => {
    this.props.setSelectedBook(selectedOption);

    this.props.setSelectedChapter(undefined);
    this.props.setChapters([]);

    this.props.setSelectedVerse(undefined);
    this.props.setVerses([]);

    this.props.getChaptersThunk();
  };

  render = () => {
    const { loadingBooks, books, selectedBook } = this.props;

    const items: IOptionData[] = (books || []).map(item => {
      return {
        value: item.name,
        label: {
          left: item.name,
          right: <PercentageAdded {...item} />,
        },
        isDisabled: item.percentageAdded === 100,
      };
    });

    return (
      <Wrapper>
        <Select
          items={items}
          loading={loadingBooks}
          disabled={
            loadingBooks ||
            !books ||
            !Array.isArray(books) ||
            books.length === 0
          }
          placeholder="Pick a book"
          onChange={this.onChange}
          value={selectedBook}
          searchable
        />
      </Wrapper>
    );
  };
}

function mapState(state: IRootState) {
  return {
    books: state.bible.books,
    loadingBooks: state.bible.loadingBooks,
    selectedBook: state.bible.selectedBook,
  };
}

function mapDispatch(dispatch: Dispatch) {
  return bindActionCreators(Creators, dispatch);
}

export default connect(mapState, mapDispatch)(Books);

const Wrapper = styled.div`
  height: 100%;
`;
