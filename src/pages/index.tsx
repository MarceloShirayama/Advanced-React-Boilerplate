import Head from 'next/head'

import { Main } from '../components/Main'

export default function Home({ title = 'React Avançado' }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>

      <main>
        <Main />
      </main>
    </div>
  )
}
