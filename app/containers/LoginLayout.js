import React from 'react';
import Login from '../component/Login';
import { Checkbox,Icon } from 'antd';
import { Link } from 'react-router'
import styles from "../asset/less/login.less"

const { Tab, UserName, Password, Mobile, Captcha, Submit } = Login;

export default class LoginLayout extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            notice: '',
            type: 'account',
            autoLogin: true,
        }
    }

    onSubmit = (err, values) => {
        console.log('value collected ->', { ...values, autoLogin: this.state.autoLogin });
        if (this.state.type === 'tab1') {
            this.setState({
                notice: '',
            }, () => {
                if (!err && (values.username !== 'admin' || values.password !== '888888')) {
                    setTimeout(() => {
                        this.setState({
                            notice: 'The combination of username and password is incorrect!',
                        });
                    }, 500);
                }
            });
        }
    }
    onTabChange = (key) => {
        this.setState({
            type: key,
        });
    }
    changeAutoLogin = (e) => {
        this.setState({
            autoLogin: e.target.checked,
        });
    }
    render() {
        return (
            <div className={styles.main}>
                <Login defaultActiveKey={this.state.type} onTabChange={this.onTabChange} onSubmit={this.handleSubmit}>
                    <Tab key="account" tab="账户密码登录">
                        <UserName name="userName" placeholder="admin/user" />
                        <Password name="password" placeholder="888888/123456" />
                    </Tab>
                    <Tab key="mobile" tab="手机号登录">
                        <Mobile name="mobile" />
                        <Captcha name="captcha" />
                    </Tab>
                    <div>
                        <Checkbox checked={this.state.autoLogin} onChange={this.changeAutoLogin}>
                            自动登录
                        </Checkbox>
                        <a style={{ float: 'right' }} href="">
                            忘记密码
                        </a>
                    </div>
                    <Submit loading={false}>登录</Submit>
                    <div className={styles.other}>
                        其他登录方式
                        <Icon className={styles.icon} type="alipay-circle" />
                        <Icon className={styles.icon} type="taobao-circle" />
                        <Icon className={styles.icon} type="weibo-circle" />
                        <Link className={styles.register} to="/user/register">
                            注册账户
                        </Link>
                    </div>
                </Login>
            </div>
        );
    }
}