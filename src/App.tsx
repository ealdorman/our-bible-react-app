import React from 'react';
import { History } from 'history';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { Route, Switch } from 'react-router-dom';

import { Creators } from './redux/actions';
import HeaderAndContent from './containers/HeaderAndContent';
import Home from './containers/Home';

import 'bootstrap/dist/css/bootstrap.min.css';

type Props = typeof Creators & {
  history: History<any>;
};

class App extends React.Component<Props> {
  render() {
    const { history } = this.props;

    return (
      <ConnectedRouter history={history}>
        <HeaderAndContent>
          <Switch>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </HeaderAndContent>
      </ConnectedRouter>
    );
  }
}

function mapDispatch(dispatch: Dispatch) {
  return bindActionCreators(Creators, dispatch);
}

export default connect(null, mapDispatch)(App);
