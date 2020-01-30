import React from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Button, Intent } from '@blueprintjs/core';
import Web3 from 'web3';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Creators } from '../../redux/actions';
import { IRootState } from '../../redux/reducers';
import SelectedVerse from '../SelectedVerse';
import Config from '../../config';
import { AppToaster } from '../../components/AppToaster';
import { showNeedsMetaMaskToast, verseWasPreserved } from '../../utils';

const config = Config[Config.env];

interface IState {
  loading: boolean;
}

type Props = ReturnType<typeof mapState> & ReturnType<typeof mapDispatch>;

class AddVerse extends React.Component<Props, IState> {
  constructor(props: Props) {
    super(props);

    this.state = {
      loading: false,
    };
  }

  onPreserveItClick = async () => {
    const { selectedBook, selectedChapter, selectedVerse } = this.props;

    this.setState({ loading: true });

    if (!window.ethereum) {
      showNeedsMetaMaskToast();

      return this.setState({ loading: false });
    }

    if (
      !selectedBook ||
      !selectedBook.value ||
      !selectedChapter ||
      !selectedChapter.value ||
      !selectedVerse ||
      !selectedVerse.value
    ) {
      AppToaster.show({
        message: "We couldn't find the verse.",
        intent: Intent.DANGER,
        action: {
          href: '.',
          text: <strong>Reload</strong>,
        },
      });

      return this.setState({ loading: false });
    }

    try {
      // @ts-ignore
      const web3 = new Web3(window.ethereum);

      const enabled = await window.ethereum.enable();

      if (!enabled || !Array.isArray(enabled) || enabled.length === 0) {
        showNeedsMetaMaskToast();

        return this.setState({ loading: false });
      }

      const theBibleContract = new web3.eth.Contract(
        config.contracts.theBible.abi,
        config.contracts.theBible.address
      );

      const address = window.ethereum.selectedAddress;

      if (!address) {
        AppToaster.show({
          message: 'Please create an address in your wallet.',
          intent: Intent.WARNING,
        });

        return this.setState({ loading: false });
      }

      const res = await theBibleContract.methods
        .setVerse(
          `${selectedBook.value}/${selectedChapter.value}/${selectedVerse.value}`
        )
        .send({
          from: address,
          value: web3.utils.toWei('0.015', 'ether'),
        });

      if (!res || !res.transactionHash) {
        AppToaster.show({
          message: 'The transaction failed. You may want to try again.',
          intent: Intent.DANGER,
        });

        return this.setState({ loading: false });
      }

      AppToaster.show({
        message: 'The verse has been added to the ETH blockchain!',
        intent: Intent.SUCCESS,
        action: {
          href: `https://twitter.com/intent/tweet?text=I%20just%20added%20a%20bible%20verse%20to%20the%20%23Ethereum%20blockchain%20at%20ourbible.io%21%0A%0A${encodeURIComponent(
            `${selectedBook.value} ${selectedChapter.value}:${selectedVerse.value} -- ${selectedVerse.text}`
          )}`,
          target: '_blank',
          text: <strong>Tweet</strong>,
        },
      });

      this.props.setPreserved([...this.props.preserved, selectedVerse]);

      this.setState({ loading: false });
    } catch (e) {
      AppToaster.show({
        message: 'The transaction failed. You may want to try again.',
        intent: Intent.DANGER,
      });

      console.log('txn error:', e);

      this.setState({ loading: false });
    }
  };

  render() {
    const { loading } = this.state;

    const { selectedVerse, preserved } = this.props;

    let icon: any = 'plus';

    if (loading) {
      icon = <FontAwesomeIcon icon="cog" pulse />;
    }

    const alreadyPreserved =
      !!selectedVerse && verseWasPreserved(preserved, selectedVerse);

    if (alreadyPreserved) {
      icon = 'tick';
    }

    return (
      <Wrapper>
        <Button
          color="#22c1c3"
          large
          disabled={!selectedVerse || loading || alreadyPreserved}
          icon={icon}
          onClick={() => this.onPreserveItClick()}
        >
          {alreadyPreserved ? 'Already preserved!' : 'Preserve it'}
        </Button>

        <SelectedVerse />
      </Wrapper>
    );
  }
}

function mapState(state: IRootState) {
  return {
    selectedBook: state.bible.selectedBook,
    selectedChapter: state.bible.selectedChapter,
    selectedVerse: state.bible.selectedVerse,
    preserved: state.bible.preserved,
  };
}

function mapDispatch(dispatch: Dispatch) {
  return bindActionCreators(Creators, dispatch);
}

export default connect(mapState, mapDispatch)(AddVerse);

const Wrapper = styled.div`
  text-align: center;
`;
