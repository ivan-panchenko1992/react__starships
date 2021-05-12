import request from './request';

const SWAPI_URL = 'https://swapi.dev/api/starships/?page=';

const getStarShips = (numberOfPage) => request(`${SWAPI_URL}${numberOfPage}`);

export default getStarShips;
