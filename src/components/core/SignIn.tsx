import { Button, Form, Input } from 'antd';
import React from 'react';
import Layout from './Layout';

const SignIn = () => {
  return (
    <Layout title='登录' subTitle='欢迎登录'>
      <Form>
        <Form.Item
          label="邮箱"
          name="username"
          rules={ [ { required: true, message: '请输入邮箱' } ] }
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="密码"
          name="password"
          rules={ [ { required: true, message: '请输入密码' } ] }
        >
          <Input.Password />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            登录
          </Button>
        </Form.Item>
      </Form>
    </Layout>
  );
};

export default SignIn;
