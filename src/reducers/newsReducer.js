import { SET_SEARCH_TEXT, SEARCH_NEWS_BY_SLUG } from '../actions/types';

const initialState = [];

const newsReducer = (newsDetails = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_SEARCH_TEXT:
      return { ...newsDetails, searchText: payload };
    case SEARCH_NEWS_BY_SLUG:
      return { ...newsDetails, newsList: payload?.hits };
    default:
      return newsDetails;
  }
};

export default newsReducer;
