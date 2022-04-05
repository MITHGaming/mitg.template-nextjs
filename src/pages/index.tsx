import { Page } from '@/typings/page';
import Head from 'next/head';

export const Home: Page = () => {
  return (
    <div>
      <Head>
        <title>Misior | Home</title>
        <meta
          name="description"
          content="TypeScript starter for Next.js that includes all you need to build amazing apps"
        />
        <link rel="icon" href="/logo/mitg-icon.svg" />
      </Head>
      <div>Home Pagina</div>
    </div>
  );
};

export default Home;
