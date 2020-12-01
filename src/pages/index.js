import Head from 'next/head'
import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {fetchposts} from '../store/actions/postAction'
import styles from '../styles/Home.module.css'

export default function Home() {

  const dispatch = useDispatch()
  const allpost= useSelector(state=> state.allpost)
  const {posts} = allpost

useEffect(() => {
  dispatch(fetchposts());
}, [])

  return (
    <div className={styles.container}>
      <Head>
        <title>Next with Redux</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>All Post</h1>
        {posts && posts.map((post, index) => (
          <h3 key={index}> {post.title}</h3>
        ))}
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
