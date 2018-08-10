import React from 'react';
import { Layout} from 'antd'

export default class App extends React.Component {

    constructor(props) {
        super(props);
    }

    componentWillReceiveProps(props) {
        this.props = props;

    }

    render() {
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}
