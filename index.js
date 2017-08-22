import React from 'react';
import { Modal, View, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

import default class Picker extends React.PureComponent {
  static Item({ label }) {
    if (!label) {
      throw Error('key "label" is required on a picker item');
    }
    return <ItemWrapper>
      <ItemText>{label}</ItemText>
    </ItemWrapper>
  }
  render() {
    const { children, onChange } = this.props;
    if (!onChange) throw Error('function "onChange" is required');
    <Modal {...this.props} transparent={true}>
      <View style={{ justifyContent: 'flex-end', flex: 1 }}>
        {children.map(this._renderItem)}
      </View>
    </Modal>
  }
  _renderItem = (item, index) => {
    const { onChange } = this.props;
    let { value, label } = item.props;
    if(!value) value = JSON.stringify(label);
    return <TouchableOpacity onPress={onChange.bind(null, value)}>{item}</TouchableOpacity>
  }
}

const ItemWrapper = styled.View`
height: 50px;
border-top-width: 1;
border-color: #ebebeb;
`
const ItemText = styled.Text`
line-height: 50px;
text-align: center;
color: #333;
font-size: 18px;
`