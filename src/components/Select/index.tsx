import React from 'react';
import Select, {
  components,
  OptionProps,
  SingleValueProps,
} from 'react-select';

import Item from './item';

export interface ISelectOption extends OptionProps<any> {
  data: IOptionData;
}

export interface ISingleValue extends SingleValueProps<any> {
  data: IOptionData;
}

export interface IOptionData {
  value: string;
  label: {
    left: string | React.ReactNode;
    right: string | React.ReactNode;
  };
  text?: string;
  isDisabled: boolean;
}

interface IIncomingProps {
  items: IOptionData[];
  loading: boolean;
  disabled: boolean;
  placeholder: string;
  onChange: (selectedOption: any) => void;
  value?: IOptionData;
  searchable?: boolean;
}

type Props = IIncomingProps;

class SelectComp extends React.Component<Props> {
  render() {
    const Option = (props: ISelectOption) => (
      <components.Option {...props} isDisabled={props.isDisabled}>
        <Item {...props} />
      </components.Option>
    );

    const SingleValue = (props: ISingleValue) => (
      <components.SingleValue {...props}>
        {props.data.label.left}
      </components.SingleValue>
    );

    return (
      <Select
        components={{ Option, SingleValue }}
        options={this.props.items}
        isLoading={this.props.loading}
        isDisabled={this.props.disabled}
        placeholder={this.props.placeholder}
        onChange={this.props.onChange}
        value={this.props.value || null}
        isSearchable={this.props.searchable || false}
      />
    );
  }
}

export default SelectComp;
