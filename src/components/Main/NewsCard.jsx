import { Link } from "react-router-dom";
import { noTitleText } from "../../constants";

const NewsCard = ({ news }) => {
  const { title, objectID, author, points, num_comments } = news;

  const generateRandomColor = () => {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return `#${randomColor}`;
  };

  return (
    <Link to={`/news/${objectID}`}>
      <div className="news-card">
        <div className="news-card__inner">
          <span
            className="news-card__image"
            style={{ backgroundColor: generateRandomColor() }}
          ></span>
          <div className="news-card__details">
            <p className="news-card__sub-details">
              <span className="news-card__author">{points || 0} point(s)</span>
              <span className="news-card__author">
                by <bold className="bold-text">{author}</bold>
              </span>
              <span>{num_comments || 0} comment(s)</span>
            </p>
            <p className="news-card__details__title">{title || noTitleText}</p>
          </div>
        </div>
        <span className="right-side-arrow">→</span>
      </div>
    </Link>
  );
};

export default NewsCard;
