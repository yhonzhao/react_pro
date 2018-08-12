import React from 'react';
import { Card, Form, Button, Input, Icon } from 'antd';
import { push } from 'react-router-redux'
import { connect } from 'react-redux';
import styles from "../../asset/less/login.less"

const FormItem = Form.Item;

@connect(state => ({
}), {
        push
    })
@Form.create()
export default class LoginLayout extends React.Component {

    constructor(props) {
        super(props)

    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                this.props.push("/")
                console.log('Received values of form: ', values);
            }
        });
    }

    
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div className={styles.main}>
                <div className={styles.body}>
                    <Card>
                        <Form onSubmit={this.onSubmit} >
                            <FormItem>
                                {getFieldDecorator('username', {
                                    rules: [{ required: true, message: '请输入用户名' }],
                                })(
                                    <Input addonBefore={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="用户名" />
                                )}
                            </FormItem>
                            <FormItem>
                                {getFieldDecorator('password', {
                                    rules: [{ required: true, message: '请输入密码' }],
                                })(
                                    <Input addonBefore={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="密码" />
                                )}
                            </FormItem>
                            <FormItem style={{ textAlign: "center" }}>
                                <Button style={{ borderRadius: "45px", width: "85%" }} type="primary" htmlType="submit" >
                                    立即登录
                            </Button>
                            </FormItem>
                        </Form>
                    </Card>
                </div>
            </div>
        );
    }
}