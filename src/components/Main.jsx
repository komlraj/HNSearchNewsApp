import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import debounce from "lodash.debounce";
import { setSearchText, searchNewsBySlug } from "../actions/news";

const Main = () => {
  const dispatch = useDispatch();
  const [isSearching, setSearching] = useState(false);
  const newsList = useSelector((state) => state?.news?.newsList);
  const searchTextFromStore = useSelector((state) => state?.news?.searchText);

  const delayedFunc = useCallback(
    debounce((text) => {
      dispatch(setSearchText(text));
      dispatch(searchNewsBySlug(text));
      setSearching(false);
    }, 2000),
    []
  );

  const handleOnSearch = ({ target }) => {
    if (target?.value) {
      setSearching(true);
      delayedFunc(target?.value);
    }
  };

  return (
    <div>
      <input
        placeholder="search news..."
        value={searchTextFromStore}
        onChange={handleOnSearch}
      />
      {isSearching && <div>Loading data</div>}
      {newsList?.length &&
        newsList?.map(({ title, objectID }) => (
          <Link
            to={`/post/${objectID}`}
            style={{ marginTop: "10px", padding: "8px" }}
          >
            <h4>{title}</h4>
          </Link>
        ))}
    </div>
  );
};

export default Main;
