import React from 'react';

export default class App extends React.Component {

    constructor(props) {
        super(props);
    }

    componentWillReceiveProps(props) {
        this.props = props;

    }

    render() {
        return (
            <div style={{height:"100%",margin:0}}>
                {this.props.children}
            </div>
        )
    }
}
