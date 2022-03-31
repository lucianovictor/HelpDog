import { Header } from 'components/Header'
import { Main } from 'components/Main'
import Head from 'next/head'

import styles from 'styles/home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <Header />
        <Main />
      </Head>
    </div>
  )
}
