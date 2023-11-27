import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getNewsById } from "../actions/news";
import Loading from "./Common/Loading";
import ErrorMessage from "./Common/ErrorMessage";
import { searchNewsLoadingMessage, noCommentsText } from "../constants";
import { generateRandomColor } from "../utils";

const NewsDetails = () => {
  // using react hooks
  const { id } = useParams();
  const dispatch = useDispatch();
  const [newsDetails, setNewsDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // useEffect is called only once when the component is mounted
  // if the id is present in the url, then we are fetching the news details
  useEffect(() => {
    setIsLoading(true);
    if (id) {
      dispatch(getNewsById(id))
        .then((res) => {
          setNewsDetails(res);
          setIsLoading(false);
        })
        .catch((err) => {
          setError(err?.message);
          setIsLoading(false);
        });
    }
  }, []);

  // if the news details are loading, then we are showing the loading component
  if (isLoading)
    return <Loading additionalMessage={searchNewsLoadingMessage} />;
  // if there is any error, then we are showing the error message
  else if (error) return <ErrorMessage message={error} />;
  // if the news details are present, then we are showing the news details
  else {
    const { title, points, children, author, type } = newsDetails || {};
    return (
      <div className="details-page">
        <h4 className="details-page__title">{title}</h4>
        <p className="news-card__sub-details">
          <span className="news-card__author">{points || 0} point(s)</span>
          <span className="news-card__author">
            by <bold className="bold-text">{author}</bold>
          </span>
          <span>{children?.length || 0} comment(s)</span>
        </p>
        {children?.length ? (
          <ul className="comment-list">
            {children?.map(({ text, author, objectID }) => (
              <li className="comment" key={objectID}>
                <p className="comment__details">
                  <span
                    className="comment__details__user-box"
                    style={{ backgroundColor: generateRandomColor() }}
                  ></span>
                  <span className="comment__author">{author}</span>
                </p>
                <p className="comment__text" dangerouslySetInnerHTML={{ __html: text }}></p>
              </li>
            ))}
          </ul>
        ) : (
          <div className="no-comments">{noCommentsText}</div>
        )}
      </div>
    );
  }
};

export default NewsDetails;
