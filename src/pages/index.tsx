import useTranslation from '@/hooks/useTranslation';
import { Page } from '@/typings/page';
import axios from 'axios';
import Head from 'next/head';
import { useEffect } from 'react';

export const Home: Page = () => {
  const { t, changeLanguage, locale } = useTranslation();

  const handleClickLanguage = () => {
    if (locale == `ptBr`) {
      changeLanguage(`enUs`);
    } else {
      changeLanguage(`ptBr`);
    }
  };

  useEffect(() => {
    const testDomain = async () => {
      window?.xdomain({
        'http://t54542.vtexcommercestable.com.br': `/bn-api`,
        'https://t54542.vtexcommercestable.com.br': `/bn-api`,
        'http://t54542.myvtex.com': `/bn-api`,
        'https://t54542.myvtex.com': `/bn-api`,
        'http://belezanatural.com.br': `/bn-api`,
        'https://belezanatural.com.br': `/bn-api`,
        'http://www.belezanatural.com.br': `/bn-api`,
        'https://www.belezanatural.com.br': `/bn-api`,
      });

      const data = await axios.get(
        `https://www.belezanatural.com.br/api/sessions?items=*`,
      );

      console.log(data);
    };

    testDomain();
  }, []);

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
      <button onClick={handleClickLanguage}>{t(`home/template`)}</button>
    </div>
  );
};

export default Home;
