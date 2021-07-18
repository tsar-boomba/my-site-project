import { getTopTracks } from '../api/spotify';

const handler = async (_, res) => {
  const yomama = await getTopTracks();
  const response = await yomama[0];
  const { items } = await response.json();

  const tracks = items.slice(0, 10).map((track) => ({
    artist: track.artists.map((_artist) => _artist.name).join(', '),
    songUrl: track.external_urls.spotify,
    title: track.name,
    imageUrl: track.album.images[2].url
  }));

  res.setHeader(
    'Cache-Control',
    'public, s-maxage=86400, stale-while-revalidate=43200'
  );

  return res.status(200).json({ tracks });
}

export default handler;
