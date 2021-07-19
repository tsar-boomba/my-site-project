// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import querystring from 'querystring';

const clientId = process.env.SPOTIFY_CLIENT_ID;
const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
const refreshToken = process.env.SPOTIFY_REFRESH_TOKEN;

const basic = Buffer.from(`${clientId}:${clientSecret}`).toString('base64');
const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;
const TOP_TRACKS_ENDPOINT = [`https://api.spotify.com/v1/me/top/tracks?time_range=long_term`, `https://api.spotify.com/v1/me/top/tracks?time_range=medium_term`, `https://api.spotify.com/v1/me/top/tracks?time_range=short_term`];
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

const getAccessToken = async () => {
  const response = await fetch(TOKEN_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: querystring.stringify({
      grant_type: 'refresh_token',
      refresh_token: refreshToken
    })
  });

  return response.json();
};

export const getNowPlaying = async () => {
  const { access_token } = await getAccessToken();

  return fetch(NOW_PLAYING_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`
    }
  });
};

export const getTopTracks = async () => {
  const { access_token } = await getAccessToken();
  const timeFrame = [];

  for (let i = 0; i < 3; i++) {
    timeFrame.push(fetch(TOP_TRACKS_ENDPOINT[i], {
      headers: {
        Authorization: `Bearer ${access_token}`
      }
    }));
  };

  console.log(timeFrame);

  return { timeFrame };
};
