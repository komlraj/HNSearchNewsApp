// Desc: This file contains the main component which is the home page of the application
import { useCallback, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import debounce from 'lodash.debounce';
import ResponsivePagination from 'react-responsive-pagination';
import 'react-responsive-pagination/themes/classic.css';

import { setSearchText, searchNewsBySlug } from '../../actions/news';
import {
  searchBoxPlaceholder,
  searchNewsLoadingMessage,
  noNewsFoundMessage,
  emptySearchMessage,
} from '../../constants';
import NewsCard from './NewsCard';
import Loading from '../Common/Loading';

const Main = () => {
  // using redux hooks
  const dispatch = useDispatch();
  const searchTextFromStore = useSelector((state) => state?.news?.searchText);
  const newsList = useSelector((state) => state?.news?.newsList) || [];

  const [isSearching, setSearching] = useState(false);
  const [currentSearchText, setCurrentSearchText] = useState(
    searchTextFromStore || ''
  );
  const [currentNewsList, setCurrentNewsList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    if(newsList?.length) setCurrentNewsList(newsList?.slice(0, 10));
  }, [newsList]);

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
    setCurrentPage(1);
  };

  // handlePageChange is called when the page is changed
  const handlePageChange = (num) => {
    setCurrentPage(num);
    setCurrentNewsList(newsList?.slice((num - 1) * 10, num * 10));
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
          <>
            <div className="pagination-wrapper">
              <h4 className="search-result">
                Search Results{' '}
                <span className="search-result__count">
                  ({newsList?.length})
                </span>
              </h4>
              <ResponsivePagination
                current={currentPage}
                total={newsList?.length / 10}
                onPageChange={(num) => handlePageChange(num)}
              />
            </div>
            {currentNewsList?.map(
              (
                news // Link is used to navigate to the news details page
              ) => (
                <NewsCard key={news?.objectID} news={news} />
              )
            )}
          </>
        ) : (
          <div className="mt-50 fs-24">
            {noNewsFoundMessage}{' '}
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
