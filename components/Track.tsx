import styles from '/styles/Home.module.css'

const Track = (track) => {
	return (
		
	<a className={styles.card} href={track.songUrl}>
		<h3>{track.ranking}  {track.title} by {track.artist}</h3>
	</a>

	)
}

export default Track