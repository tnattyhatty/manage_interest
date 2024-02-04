'use client';

import { Button, Checkbox, Form, Input } from 'antd';
import { signIn } from 'next-auth/react';
import Link from 'next/link';
import { FC, memo, useCallback } from 'react';

type FieldType = {
  email: string;
  password: string;
  remember?: string;
};

const LoginComponent: FC<{}> = memo(() => {
  const onFinish = useCallback(async (values: FieldType) => {
    console.log(' ========== ', values);
    const res = await signIn('credentials', {
      ...values,
      redirect: false,
      callbackUrl: '/login',
    });
    console.log('RES: ', res);
  }, []);

  return (
    <div>
      <Form className="space-y-4 md:space-y-6" layout="vertical" name="loginForm" onFinish={onFinish} autoComplete="on">
        <Form.Item<FieldType>
          label={<span className="font-light text-gray-500 dark:text-gray-400">Username</span>}
          name="email"
          rules={[
            { required: true, message: 'Email Required' },
            { type: 'email', message: 'Invalid email' },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
          label={<span className="font-light text-gray-500 dark:text-gray-400">Password</span>}
          name="password"
          rules={[{ required: true, message: 'Password Required' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item<FieldType> name="remember" valuePropName="checked">
          <Checkbox>
            <span className="font-light text-gray-500 dark:text-gray-400">Remember me</span>
          </Checkbox>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" danger block>
            Submit
          </Button>
        </Form.Item>
        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
          <span>Don’t have an account yet? </span>
          <Link href="/register" className="font-medium text-primary-600 hover:underline dark:text-primary-500">
            Sign up
          </Link>
        </p>
      </Form>
    </div>
  );
});

export default LoginComponent;
