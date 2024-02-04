import { AntdRegistry } from '@ant-design/nextjs-registry';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Manage Interest',
  description: 'Manage interest app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={'min-h-screen'}>
        <AntdRegistry>
          {/* <AuthProvider> */}
          {children}
          {/* </AuthProvider> */}
        </AntdRegistry>
      </body>
    </html>
  );
}
