import fs from 'fs'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '/styles/Home.module.css'

const Posts = ({ id }: any) => {
	return (
		<div className={styles.container}>
		<Head>
			<title>Posts</title>
			<meta name="description" content="Generated by create next app" />
			<link rel="icon" href="/favicon.ico" />
		</Head>

		<main className={styles.main}>
			<h1 className={styles.title}>
			Posts below
			</h1>

			<div className={styles.grid}>

				<a key={id} className={styles.listcard}>
					<h2>Posts</h2>
						{id.map(id => {
							return (
									<div key={id}>
									<a href={"/posts/" + id}>{id}</a>
									</div>
							)
						})}
				</a>

			</div>
			<div className={styles.container}>
				
			</div>
		</main>

		</div>
	)
}

//function gets post files' names to be linked to
export const getStaticProps = async () => {
	const files = fs.readdirSync('posts')
	return {
		props: {
			id: files.map(filename => filename.replace('.md', ''))
		}
	}
}

export default  Posts;
