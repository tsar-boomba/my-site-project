import { getNowPlaying } from "./spotify"

const handler = async (_, res) => {
    const response = await getNowPlaying()

    if (response.status === 204 || response.status > 400) {
        return res.status(200).json({ isPlaying: false})
    }

    const song = await response.json()

    if (song.item === null) {
        return res.status(200).json({ isPlaying: false})
    }

    const isPlaying = song.is_playing
    const artist = song.item.artists.map((_artist) => _artist.name).join(', ')
    const songUrl = song.item.external_urls.spotify
    const title = song.item.name
    const imageUrl = song.item.album.images[2].url

    res.setHeader(
        'Chache-Control',
        'public, s-maxage=86400, stale-while-revalidate=43200'
    )

    return res.status(200).json({ artist, title, songUrl, imageUrl, isPlaying })
}

export default handler
