import React, { Component } from 'react';
import { elementType } from 'react-prop-types';

export default class Button extends Component {
  static propTypes = {
    value: elementType,
    onClick: elementType,
    type: elementType
  };
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  render() {
    let btnStyle = null;
    let btnIcon = null;
    if (this.props.type && this.props.type !== '') {
      if (this.props.type === 'queren') {
        btnStyle = 'queren_btn';
        btnIcon = 'icon-save';
      } else if (this.props.type === 'quxiao') {
        btnStyle = 'quxiao_btn';
        btnIcon = 'icon-close';
      } else if (this.props.type === 'shanchu') {
        btnStyle = 'shanchu_btn';
        btnIcon = 'icon-delete';
      } else if (this.props.type === 'zengjia') {
        btnStyle = 'zengjia_btn';
        btnIcon = 'icon-add';
      } else {
        btnStyle = 'queren_btn';
        btnIcon = 'icon-save';
      }
    } else {
      btnStyle = 'queren_btn';
      btnIcon = 'icon-save';
    }
    return (
      <div>
        <div ref="btn" className={'btn_model ' + btnStyle} onClick={this.props.onClick}><i className={btnIcon} />{this.props.value}</div>
      </div>
    );
  }
}
