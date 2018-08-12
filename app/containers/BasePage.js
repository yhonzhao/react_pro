import React from 'react';
import { Layout,Icon } from 'antd'
import { ContainerQuery } from 'react-container-query';
import classNames from 'classnames';
import { enquireScreen, unenquireScreen } from 'enquire-js';
import GlobalHeader from '../component/GlobalHeader'
import GlobalFooter from '../component/GlobalFooter';

const { Content, Header, Footer } = Layout;

const query = {
    'screen-xs': {
        maxWidth: 575,
    },
    'screen-sm': {
        minWidth: 576,
        maxWidth: 767,
    },
    'screen-md': {
        minWidth: 768,
        maxWidth: 991,
    },
    'screen-lg': {
        minWidth: 992,
        maxWidth: 1199,
    },
    'screen-xl': {
        minWidth: 1200,
        maxWidth: 1599,
    },
    'screen-xxl': {
        minWidth: 1600,
    },
};

export default class BaseLayout extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isMobile: false
        }
    }

    componentDidMount() {
        this.enquireHandler = enquireScreen(mobile => {
            this.setState({
                isMobile: mobile,
            });
        });
    }

    componentWillUnmount() {
        unenquireScreen(this.enquireHandler);
    }

    componentWillReceiveProps(props) {
        this.props = props;

    }

    render() {

        const links = [{
            key: 'a',
            title: '关于我们',
            href: '',
        }, {
            key: 'b',
            title: '联系我们',
            href: ''
        }, {
            key: 'c',
            title: '友情链接',
            href: '',
            blankTarget: true,
        }, {
            key: 'd',
            title: '帮助中心',
            href: ''
        }, {
            key: 'e',
            title: '诚聘英才',
            href: ''
        },{
            key: 'f',
            title: '网站地图',
            href: ''
        }];

        const copyright = <div>Copyright <Icon type="copyright" /> 2017 xxxxxx技术部出品</div>;
        const keepOnRecord = {
            title:"沪公网安备 31010402000977号",
            href:""
        }

        const layout = (
            <Layout>
                <Header style={{ padding: 0 }}>
                    <GlobalHeader
                        logo="/static/image/logo.svg"
                        isMobile={this.state.isMobile}
                    />
                </Header>
                <Content style={{ margin: '24px 24px 0', height: '100%' }}>{this.props.children}</Content>
                <Footer style={{ padding: 0 }}>
                    <GlobalFooter links={links} copyright={copyright} keepOnRecord={keepOnRecord} />
                </Footer>
            </Layout>
        )

        return (
            <ContainerQuery query={query}>
                {params => <div className={classNames(params)}>{layout}</div>}
            </ContainerQuery>
        )
    }
}
