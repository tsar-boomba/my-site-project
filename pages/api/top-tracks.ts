import { getTopTracks } from '../api/spotify';

const handler = async (_, res) => {
	const frames = []
	const temp = []
	for (let i = 0; i < 3; i++){
		const response = await getTopTracks(i);
		frames.push(await response.json());
	}
	const tempFrames = {  } = await frames;

	for (let j = 0; j < 3; j ++) {
		const tracks = await tempFrames[j].items.slice(0, 10).map((track) => ({
			artist: track.artists.map((_artist) => _artist.name).join(', '),
			songUrl: track.external_urls.spotify,
			title: track.name,
			imageUrl: track.album.images[0].url
		}));
		if (j === 0) {
			var longTerm = {  } = tracks;
		} else if (j === 1) {
			var medTerm = {  } = tracks;
		} else if (j === 2) {
			var shortTerm = {  } = tracks;
		};
	}

	const timeFrames = { 
		longTerm: longTerm,
		medTerm: medTerm,
		shortTerm: shortTerm
	}

	res.setHeader(
		'Cache-Control',
		'public, s-maxage=86400, stale-while-revalidate=43200'
	);

	return res.status(200).json({ timeFrames });
}

export default handler;
