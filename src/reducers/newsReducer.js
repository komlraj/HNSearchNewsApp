const initialState = [];

const newsReducer = (news = initialState, action) => {
  const { type } = action;

  switch (type) {
    default:
      return news;
  }
};

export default newsReducer;
