import React from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';

import Select, { IOptionData } from '../../components/Select';
import { Creators } from '../../redux/actions';
import { IRootState } from '../../redux/reducers';
import PercentageAdded from '../../components/Select/percentageAdded';

type Props = ReturnType<typeof mapState> & ReturnType<typeof mapDispatch>;

class Books extends React.Component<Props> {
  render() {
    const { loadingBooks, books } = this.props;

    const items: IOptionData[] = (books || []).map(item => {
      return {
        value: item.name,
        label: {
          left: item.name,
          right: <PercentageAdded {...item} />,
        },
      };
    });

    return (
      <Select
        items={items}
        loading={loadingBooks}
        disabled={
          loadingBooks || !books || !Array.isArray(books) || books.length === 0
        }
      />
    );
  }
}

function mapState(state: IRootState) {
  return {
    books: state.bible.books,
    loadingBooks: state.bible.loadingBooks,
  };
}

function mapDispatch(dispatch: Dispatch) {
  return bindActionCreators(Creators, dispatch);
}

export default connect(mapState, mapDispatch)(Books);
