import styles from '/styles/Music.module.css'
import Image from 'next/image'
import useSWR from 'swr'
import fetcher from '../pages/api/Fetcher'

const NowPlaying = () => {
    const { data } = useSWR('/api/now-playing', fetcher)

    if (!data) {
        return null
    }

    if (data.isPlaying === true) {
        return (
                <a className={styles.nowplaying} href={data.songUrl}>
                    <Image src={data.imageUrl} width='64' height='64' alt='song image'/><h3>Isaiah is now listening to {data.title} by {data.artist}</h3>
                </a>
        )
    }

    if (data.isPlaying === false) {
        return (
            <a className={styles.nowplaying}>
                <Image src='https://www.freepnglogos.com/uploads/spotify-logo-png/spotify-icon-marilyn-scott-0.png' width='64' height='64' alt='spotify logo from freepnglogos.com'/><h3>Isaiah is not listening to anything</h3>
            </a>
        )
    }
}

export default NowPlaying