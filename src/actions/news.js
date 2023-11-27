import { SET_SEARCH_TEXT, SEARCH_NEWS_BY_SLUG } from "./types";
import NewsPostService from "../services/newsService";

export const setSearchText = (text) => (dispatch) => {
  dispatch({
    type: SET_SEARCH_TEXT,
    payload: text,
  });
};

export const searchNewsBySlug = (slug) => async (dispatch) => {
  try {
    const res = await NewsPostService.searchNewsBySlug(slug);

    dispatch({
      type: SEARCH_NEWS_BY_SLUG,
      payload: res?.data,
    });

    return Promise.resolve(res?.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const getNewsById = (id) => async () => {
  try {
    const res = await NewsPostService.getNewsById(id);
    return Promise.resolve(res?.data);
  } catch (err) {
    return Promise.reject(err);
  }
};
