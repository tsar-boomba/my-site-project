import fs from 'fs'
import { useState } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../../styles/Music.module.css'
import TopTracks from '../../components/TopTracks'
import NowPlaying from '../../components/NowPlaying'
import Footer from '../../components/Footer';

var x = 0;

const Music = () => {
	const [state, setState] = useState(0)
	const terms = ['Long Term', 'Medium Term', 'Short Term']

	const changeState = () => {
		if(state <= 1) {
			setState(state + 1);
		} else {
			x = 0;
			setState(0);
		}
	};

	return (
	<>
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

				<button onClick={changeState} className={styles.button} type='button'>{terms[state]}</button>

				<TopTracks iterator={state} />
			
			</main>

		</div>
		<div className={styles.footer}>
			<Footer />
		</div>
	</>
	)
}

export default  Music;