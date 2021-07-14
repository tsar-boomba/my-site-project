import useSWR from "swr"
import fetcher from '../pages/api/Fetcher'
import Track from '../components/Track'

const TopTracks = () => {
    const { data } = useSWR('/api/top-tracks', fetcher)

    if (!data) {
        return null
    }

    return data.tracks.map((track, index) => (
        <Track ranking={index + 1} key={track.songUrl} {...track} />
    ))
}

export default TopTracks
