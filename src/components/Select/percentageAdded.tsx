import React from 'react';
import styled from 'styled-components';

import { getProgressBar } from '../../utils';

interface IIncomingProps {
  percentageAdded: number;
}

type Props = IIncomingProps;

class PercentageAdded extends React.PureComponent<Props> {
  render() {
    const { percentageAdded } = this.props;

    return (
      <Wrapper>
        <Item>{percentageAdded}% added</Item>
        <Item>{getProgressBar(percentageAdded)}</Item>
      </Wrapper>
    );
  }
}

export default PercentageAdded;

const Wrapper = styled.div`
  text-align: center;
`;

const Item = styled.div``;
