import { getTopTracks } from '../api/spotify';

const handler = async (_, res) => {
	const Terms = await getTopTracks();
	const longTerm = await Terms[0];
	const medTerm = await Terms[1];
	const shortTerm = await Terms[2];
	const terms = {  } = await [{ items: longTerm }, { items: medTerm }, { items: shortTerm }]

	for (var i = 0; i < 3; i ++) {
		const parsedTerms = terms[i].items.slice(0, 10).map((track) => ({
			artist: track.artists.map((_artist) => _artist.name).join(', '),
			songUrl: track.external_urls.spotify,
			title: track.name,
			imageUrl: track.album.images[2].url
		}));
	}

	res.setHeader(
		'Cache-Control',
		'public, s-maxage=86400, stale-while-revalidate=43200'
	);

	return res.status(200).json({ terms });
}

export default handler;
