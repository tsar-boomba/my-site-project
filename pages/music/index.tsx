import fs from 'fs'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '/styles/Home.module.css'
import TopTracks from '../../components/TopTracks'

const Music = ({ tracks }: any) => {
	return (
		<div className={styles.container}>
		<Head>
			<title>Music</title>
			<meta name="description" content="Generated by create next app" />
			<link rel="icon" href="/favicon.ico" />
		</Head>

		<main className={styles.main}>
			<h1 className={styles.title}>
			Top 10 Tracks
			</h1>

			<div className={styles.grid}>
                <TopTracks />
			</div>

		</main>

		</div>
	)
}

export default  Music;