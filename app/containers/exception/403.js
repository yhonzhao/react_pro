import React from 'react';
import Exception from '../../component/Exception';
import { goBack } from 'react-router-redux'
import {connect} from 'react-redux';
import { Button } from 'antd';

@connect(state=>({
  route: state.routing
}),{
  goBack
})
export default class PermissionDenied extends React.Component {

  constructor(props){
    super(props)
  }

  render(){
    const actions = (
      <div>
        <Button onClick={()=>this.props.goBack()} type="primary">返回上页</Button>
      </div>
    );
    return(<Exception type="403" actions={actions} />)
  }
}

