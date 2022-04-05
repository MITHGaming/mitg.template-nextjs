import { getSession, signOut, useSession } from 'next-auth/react';
import React from 'react';

export const getServerSideProps = async (context) => {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: `/login`,
        permanent: false,
      },
    };
  }

  return {
    props: {
      session,
    },
  };
};

export const Alguma = () => {
  const { data } = useSession();

  return (
    <>
      <div>Conteudo Logado</div>
      {data && <button onClick={() => signOut()}>Sair</button>}
    </>
  );
};

export default Alguma;
