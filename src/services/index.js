import axios from 'axios';

export default async function getGamesApi() {
  const response = await axios.get('https://api.rawg.io/api/games?key=334045e4b78b4b5c9b2edef1e6db2d1a&dates=2019-09-01,2019-09-30&platforms=18,1,7')
  const getResponse = response.data.results;
  return getResponse;
}
