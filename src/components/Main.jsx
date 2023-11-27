// Desc: This file contains the main component which is the home page of the application
import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import debounce from "lodash.debounce";
import { setSearchText, searchNewsBySlug } from "../actions/news";
import { searchBoxPlaceholder, searchNewsLoadingMessage } from "../constants";
import Loading from "./Common/Loading";

const Main = () => {
  // using redux hooks
  const dispatch = useDispatch();
  const [isSearching, setSearching] = useState(false);
  const newsList = useSelector((state) => state?.news?.newsList);
  const searchTextFromStore = useSelector((state) => state?.news?.searchText);

  // debouncing the search functionality
  const delayedFunc = useCallback(
    debounce((text) => {
      dispatch(setSearchText(text));
      dispatch(searchNewsBySlug(text));
      setSearching(false);
      // debouncing for 2 seconds
    }, 2000),
    []
  );

  // handleOnSearch is called on every key press
  const handleOnSearch = ({ target }) => {
    if (target?.value) {
      setSearching(true);
      delayedFunc(target?.value);
    }
  };

  return (
    <div>
      <input
        placeholder={searchBoxPlaceholder}
        value={searchTextFromStore}
        onChange={handleOnSearch}
      />

      {isSearching ? (
        // if the news list is loading, then we are showing the loading component
        <Loading additionalMessage={searchNewsLoadingMessage} />
      ) : (
        // if the news list is present, then we are showing the news list
        newsList?.length &&
        newsList?.map(({ title, objectID }) => (
          // Link is used to navigate to the news details page
          <Link
            to={`/news/${objectID}`}
            style={{ marginTop: "10px", padding: "8px" }}
            key={objectID}
          >
            <h4>{title}</h4>
          </Link>
        ))
      )}
    </div>
  );
};

export default Main;
