import axios from 'axios';

const apiUrl = 'http://coffee-points.dev2.devloop.pro';

export const getCafes = (params) =>
  axios.get(`${apiUrl}/api/cafes`).then(response=>{
  return response.data.map(cafe=>{
    cafe.image = cafe.pictures[0] != undefined
      ? {url:`${apiUrl}/${cafe.pictures[0].url.replace('.jpg','-100x100.jpg')}`}
      : require('../themes/logo.png')
    return cafe;
  });
});