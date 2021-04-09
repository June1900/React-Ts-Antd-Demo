import { Button, Form, Input, Result } from 'antd';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signIn, SignInPayload } from '../../store/actions/auth.action';
import { AppState } from '../../store/reducers';
import { AuthState } from '../../store/reducers/auth.reducer';
import Layout from './Layout';

const SignIn = () => {

  // 获取dispatch方法
  const dispatch = useDispatch();
  const [ form ] = Form.useForm();
  // 注册表单提交
  const onFinish = ( value: SignInPayload ) => {
    // 发送注册请求
    dispatch( signIn( value ) );
  };

  // 获取登录结果
  const auth = useSelector<AppState, AuthState>( state => state.auth );
  // 登录失败，显示错误信息
  const showError = () => {
    if ( auth.signIn.loaded && !auth.signIn.success ) {
      return (
        <Result
          status="error"
          title="登录失败"
          subTitle={ auth.signIn.msg }
        />
      );
    }
  };
  // 登录成功，根据角色跳转到对应界面
  const redirectToDash = () => {
    
  };
  // 处理导航连接，已登录，隐藏登录注册按钮、未登录，显示

  return (
    <Layout title='登录' subTitle='欢迎登录'>
      { showError() }
      <Form form={ form } onFinish={ onFinish }>
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
