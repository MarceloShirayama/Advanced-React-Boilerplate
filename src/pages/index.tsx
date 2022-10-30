import Head from 'next/head'

export default function Home({ title = 'React Avançado' }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>

      <main>
        <h1>Welcome to React Avançado!</h1>
      </main>
    </div>
  )
}
