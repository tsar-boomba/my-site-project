import styles from '../styles/Music.module.css'
import Image from 'next/image'

const Track = (track) => {
	return (
		
	<a className={styles.card} href={track.songUrl}>
		<Image src={track.imageUrl} width='64' height='64' alt='track image'/><h3>{track.ranking}</h3>  <h3>{track.title} by {track.artist}</h3>
	</a>

	)
}

export default Track