// Desc: This file contains the main component which is the home page of the application
import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import debounce from "lodash.debounce";
import { setSearchText, searchNewsBySlug } from "../actions/news";
import {
  searchBoxPlaceholder,
  searchNewsLoadingMessage,
  noNewsFoundMessage,
  emptySearchMessage,
  noTitleText
} from "../constants";
import Loading from "./Common/Loading";

const Main = () => {
  // using redux hooks
  const dispatch = useDispatch();
  const searchTextFromStore = useSelector((state) => state?.news?.searchText);

  const [isSearching, setSearching] = useState(false);
  const [currentSearchText, setCurrentSearchText] = useState(
    searchTextFromStore || ""
  );
  const newsList = useSelector((state) => state?.news?.newsList);

  // debouncing the search functionality
  const delayedFunc = useCallback(
    debounce(async (text) => {
      dispatch(setSearchText(text));
      if (text) await dispatch(searchNewsBySlug(text));
      setSearching(false);
      // debouncing for 2 seconds
    }, 2000),
    []
  );

  // handleOnSearch is called on every key press
  const handleOnSearch = ({ target }) => {
    setCurrentSearchText(target?.value);
    setSearching(true);
    delayedFunc(target?.value);
  };

  return (
    <div className="main-section">
      <input
        placeholder={searchBoxPlaceholder}
        value={currentSearchText}
        onChange={handleOnSearch}
        className="search-box"
      />

      {isSearching ? (
        // if the news list is loading, then we are showing the loading component
        <Loading additionalMessage={searchNewsLoadingMessage} />
      ) : // if the news list is present, then we are showing the news list
      currentSearchText ? (
        newsList?.length > 0 ? (
          newsList?.map(({ title, objectID }) => (
            // Link is used to navigate to the news details page
            <Link
              to={`/news/${objectID}`}
              style={{ marginTop: "10px", padding: "8px" }}
              key={objectID}
            >
              <h4>{title || noTitleText}</h4>
            </Link>
          ))
        ) : (
          <div className="mt-50 fs-24">
            {noNewsFoundMessage}{" "}
            <bold className="bold-text">{currentSearchText}</bold>
          </div>
        )
      ) : (
        // if the news list is not present, then we are showing the message
        <h4 className="mt-50">{emptySearchMessage}</h4>
      )}
    </div>
  );
};

export default Main;
