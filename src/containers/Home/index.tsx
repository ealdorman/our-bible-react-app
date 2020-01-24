import React from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';

import { Creators } from '../../redux/actions';
import { IRootState } from '../../redux/reducers';
import Books from '../Books';

interface IStoreProps {
  books: IRootState['bible']['books'];
  loadingBooks: IRootState['bible']['loadingBooks'];
}

type Props = IStoreProps & typeof Creators;

class Home extends React.Component<Props> {
  render() {
    return (
      <div>
        <Books />
      </div>
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

export default connect(mapState, mapDispatch)(Home);
