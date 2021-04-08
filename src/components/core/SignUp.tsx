import { Button, Form, Input, Result } from 'antd';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { signUp, SignUpPayload } from '../../store/actions/auth.action';
import { AppState } from '../../store/reducers';
import { AuthState } from '../../store/reducers/auth.reducer';
import Layout from './Layout';

const SignUp = () => {
  // 获取dispatch方法
  const dispatch = useDispatch();
  const auth = useSelector<AppState, AuthState>( state => state.auth );

  const [ form ] = Form.useForm();
  // 注册表单提交
  const onFinish = ( value: SignUpPayload ) => {
    // 发送注册请求
    dispatch( signUp( value ) );
  };
  // 注册成功，清空表单
  useEffect( () => {
    if ( auth.signUp.loaded && auth.signUp.success ) {
      form.resetFields();
    }
  }, [ auth ] );
  // 注册成功，显示成功信息
  const showSuccess = () => {
    if ( auth.signUp.loaded && auth.signUp.success ) {
      return (
        <Result
          status="success"
          title="注册成功"
          extra={ [
            <Button type="primary">
              <Link to='/signin'>登录</Link>
            </Button>,
          ] }
        />
      );
    }
  };
  // 注册失败，显示失败信息
  const showError = () => {
    if ( auth.signUp.loaded && !auth.signUp.success ) {
      return (
        <Result
          status="error"
          title="注册失败"
          subTitle={ auth.signUp.msg }
        />
      );
    }
  };
  // 离开页面，重置状态
  useEffect( () => {
    return () => {

    };
  }, [] );

  const SignUpForm = () => {
    return (
      <Form form={ form } onFinish={ onFinish }>
        <Form.Item
          label="账号"
          name="username"
          rules={ [ { required: true, message: '请输入账号' } ] }
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="邮箱"
          name="email"
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
            注册
        </Button>
        </Form.Item>
      </Form>
    );
  };

  return (
    <Layout title='注册' subTitle='请你注册用户'>
      {showSuccess() }
      {showError() }
      <SignUpForm />
    </Layout>
  );
};

export default SignUp;
