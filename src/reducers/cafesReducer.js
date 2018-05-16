import {cafesTypes} from './types';


const NormalizeCafeList = (state, cafes) => {
  const normalizedReviews = {
    byIds: {},
    allIds: [],
  };
  const normalizeCafes = {
    byIds: cafes.reduce((prev, current) => {
      if (current.reviews) {
        current.reviews.forEach(review => {
          normalizedReviews.byIds[review.id] = review;
          normalizedReviews.allIds.push(review.id);
        });

      }
      current.reviews = current.reviews
        ?current.reviews.map(review=>review.id)
        :[];


      prev[current.id] = current;
      return prev;
    }, {}),
    allIds: cafes.map(current => current.id)
  };

  return {
    ...state,
    cafes: normalizeCafes,
    reviews: normalizedReviews,
    loading: false,
  };

};


const INITIAL_STATE = {
  cafes: {
    byIds: {},
    allIds: [],
    current: 0,
  },
  reviews: {
    byIds: {},
    allIds: [],
    current: 0,
  },
  loading: false
};

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case cafesTypes.loaderStart:
      return {...state, loading: true};
    case cafesTypes.loaderEnd:
      return {...state, loading: false};
    case cafesTypes.listReceive:
      return NormalizeCafeList(state, action.payload);
    case cafesTypes.itemReceive:
      return {
        ...state,
        cafes: {
          ...state.cafes,
          current: action.payload
        }
      };
    case cafesTypes.reviewEdit:
      return {
        ...state,
        reviews: {
          ...state.reviews,
          byIds:{
            ...state.reviews.byIds,
            [action.payload.id] : action.payload
          }
        }
      };

    default:
      return state;
  }
}
