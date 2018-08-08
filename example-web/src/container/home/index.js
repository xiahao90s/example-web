import React from 'react';
import Button from '../../component/button';
import { connect } from 'react-redux';
import P from "prop-types";

@connect(
  state => ({
    count: state.home.count, // 引入model中的count数据
    msg: state.home.msg
  }),
  model => ({
    actions: {
      onTestAdd: model.home.onTestAdd, // 引入model中的数字+1 action
      onTestSave: model.home.onTestSave
    }
  })
)

export default class Home extends React.Component {
	static propTypes = {
		count: P.number,
		msg: P.string
 	};
	constructor(props) {
  	 	super(props);
	    this.state = {
	      count: 0,
	      msg: ''
	    };
 	}
	componentWillMount() {
		console.log('页面加载时触发此事件');
	}

	componentWillReceiveProps(nextProps) {
		console.log('下次页面更新前调用次方法' + nextProps);
		console.log(nextProps);
	}
    render() {
        return (
        	<div>
	    		<h1>首页</h1>
	   	 		<Button value={'自增'} onClick={() => this.props.actions.onTestAdd(this.props.count)} type={'queren'} />
	   	 		<br/>
	   	 		<br/>
	   	 		count = {this.props.count}
	   	 		<br/>
	   	 		<br/>
	   	 		<Button value={'新增UserInfo'} onClick={() => this.props.actions.onTestSave()} type={'queren'} />
	   	 		<br/>
	   	 		<br/>
	   	 		msg = {this.props.msg}
	   	 	</div>
    	)
    }
}
