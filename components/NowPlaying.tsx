import styles from '/styles/Music.module.css'
import Image from 'next/image'
import useSWR from 'swr'
import fetcher from '../pages/api/Fetcher'

const NowPlaying = () => {
    const { data }: any = useSWR('/api/now-playing', fetcher)

    if (data.isPlaying === true) {
        return (
            
        <a className={styles.card} href={data.songUrl}>
            <Image src={data.imageUrl} width='64' height='64' alt='song image'/><h3>{data.ranking}  {data.title} by {data.artist}</h3>
        </a>

        )
    }

    if (data.isPlaying === false) {
        return (
            
        <a className={styles.card} href={data.songUrl}>
            <h3>Not playing</h3>
        </a>

        )
    }
}

export default NowPlaying