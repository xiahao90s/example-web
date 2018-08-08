import React from 'react'
import Button from '../../component/button'

class Login extends React.Component {
	constructor(props) {
    super(props);
	    this.state = {
	      count: 0
	    };
 	}
	componentWillMount() {
		console.log('页面加载时触发此事件')
	}

	componentWillReceiveProps(nextProps) {
		console.log('下次页面更新前调用次方法' + nextProps)
	}
	addNum() {
		this.setState({'count': this.state.count + 1})
	}
    render() {
        return (
        	<div>
	    		<h2>登录页</h2>
	   	 		<Button value={'自增'} onClick={this.addNum.bind(this)} type={'queren'} />
	   	 		<br/>
	   	 		<br/>
	   	 		count = {this.state.count}
	   	 	</div>
    	)
    }
}

export default Login