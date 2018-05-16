import axios from 'axios';

import {apiUrl} from "../config/constants"
import {cafesTypes} from '../reducers/types'

export const getCafes = (params) => (dispatch) => {

  dispatch({type: cafesTypes.loaderStart});

  axios.get(`${apiUrl}/api/cafes`).then(response => {
    const payload = response.data.map(cafe => {
      cafe.image = cafe.pictures[0] != undefined
        ? {url: `${apiUrl}/${cafe.pictures[0].url.replace('.jpg', '-100x100.jpg')}`}
        : require('../themes/cup.png')
      return cafe;
    });

    dispatch({type: cafesTypes.listReceive, payload})

  }).finally(() => {
    dispatch({type: cafesTypes.loaderEnd});
  })
};

export const setCafe = cafe => dispatch =>
  dispatch({type: cafesTypes.itemReceive, payload: cafe});


export const editReview = (id,text)=> dispatch=>{
  /*axios.put(`${apiUrl}/api/reviews/${id}`, {text}).then((review)=>{
    dispatch({type: cafesTypes.reviewEdit, payload: review})
  });*/
  dispatch({type: cafesTypes.reviewEdit, payload: {text, id, averageRating: 4}});
};

export const getCafe = (params) => {
  const {id} = params;

  return axios.get(`${apiUrl}/api/cafes/${id}`)
    .then(response => {
      const cafe = response.data;

      cafe.image = cafe.pictures[0] != undefined
        ? {url: `${apiUrl}/${cafe.pictures[0].url}`}
        : require('../themes/logo.png')

      cafe.images = cafe.pictures.map(picture => {
        return {url: `${apiUrl}/${picture.url}`, id: picture.id}
      })
      return cafe;
    })
    .catch(error => {
      console.log(error);
    });
}