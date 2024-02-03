'use client';

import React, { FC, memo, useCallback } from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import Link from 'next/link';

type FieldType = {
  email: string;
  password: string;
  remember?: string;
};

const LoginComponent: FC<{}> = memo(() => {
  const onFinish = useCallback((values: FieldType) => {
    console.log(' ========== ', values);
  }, []);

  return (
    <div>
      <Form className="space-y-4 md:space-y-6" layout="vertical" name="loginForm" initialValues={{ remember: true }} onFinish={onFinish} autoComplete="off">
        <Form.Item<FieldType> label={<span className='font-light text-gray-500 dark:text-gray-400'>Username</span>} name="email" 
        rules={[{ required: true, message: 'Email Required' },{type: 'email', message:'Invalid email'}]}>
          <Input />
        </Form.Item>

        <Form.Item<FieldType> label={<span className='font-light text-gray-500 dark:text-gray-400'>Password</span>} name="password" rules={[{ required: true, message: 'Password Required' }]}>
          <Input.Password />
        </Form.Item>

        <Form.Item<FieldType> name="remember" valuePropName="checked">
          <Checkbox><span className='font-light text-gray-500 dark:text-gray-400'>Remember me</span></Checkbox>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" danger block>
            Submit
          </Button>
        </Form.Item>
        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
          <span>Don’t have an account yet? </span>
          <Link href="/auth/register" className="font-medium text-primary-600 hover:underline dark:text-primary-500">
            Sign up
          </Link>
        </p>
      </Form>
    </div>
  );
});

export default LoginComponent;
