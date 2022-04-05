import { AppProps } from 'next/app';
import { Layout } from '@/layout';
import { SessionProvider } from 'next-auth/react';
import '@/styles/fonts.css';
import '@/styles/resets/reset.css';
import '@/styles/resets/_modern-normalize.css';

export const MyApp = ({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) => {
  return (
    <SessionProvider session={session}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  );
};

export default MyApp;
