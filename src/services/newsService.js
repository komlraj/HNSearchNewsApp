import axios from "../axios";

const searchNewsBySlug = (slug) => {
  return axios.get(`/search?query=${slug}`);
};

const getNewsById = (id) => {
  return axios.get(`/items/${id}`);
};

const NewsService = {
  searchNewsBySlug,
  getNewsById,
};

export default NewsService;
