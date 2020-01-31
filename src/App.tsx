import React from 'react';
import { History } from 'history';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { Route, Switch } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faTimes, faCog } from '@fortawesome/free-solid-svg-icons';

import { Creators } from './redux/actions';
import HeaderAndContent from './containers/HeaderAndContent';
import Home from './containers/Home';
import Footer from './containers/Footer';
import OverlayAbout from './containers/OverlayAbout';
import OverlayHowThisWorks from './containers/OverlayHowThisWorks';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'normalize.css/normalize.css';
import '@blueprintjs/icons/lib/css/blueprint-icons.css';
import '@blueprintjs/core/lib/css/blueprint.css';

library.add(faGithub, faTimes, faCog);

type Props = typeof Creators & {
  history: History<any>;
};

class App extends React.Component<Props> {
  render() {
    const { history } = this.props;

    return (
      <ConnectedRouter history={history}>
        <GlobalStyle />

        <OverlayAbout />

        <OverlayHowThisWorks />

        <HeaderAndContent>
          <Switch>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </HeaderAndContent>

        <Footer />
      </ConnectedRouter>
    );
  }
}

function mapDispatch(dispatch: Dispatch) {
  return bindActionCreators(Creators, dispatch);
}

export default connect(null, mapDispatch)(App);

const GlobalStyle = createGlobalStyle`
  html, body {
    overflow-x: hidden;
    height: 100%;
    padding: 0;
    margin: 0;
    max-width: 100%;
  }

  body {
    overflow-x: hidden;
  }
`;
