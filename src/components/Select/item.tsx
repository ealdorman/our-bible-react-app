import React from 'react';
import styled from 'styled-components';

import { ISelectOption, ISingleValue } from './index';

type Props = ISelectOption | ISingleValue;

class Item extends React.PureComponent<Props> {
  render() {
    const { data } = this.props;

    return (
      <ItemStyled>
        <Left>{data.label.left}</Left>

        <Right>{data.label.right}</Right>
      </ItemStyled>
    );
  }
}

export default Item;

const ItemStyled = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
`;

const Left = styled.div`
  float: left;
`;

const Right = styled.div`
  float: right;
  font-size: 12px;
`;
