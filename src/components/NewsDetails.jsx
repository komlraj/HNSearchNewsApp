import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getNewsById } from "../actions/news";
import Loading from "./Common/Loading";
import ErrorMessage from "./Common/ErrorMessage";

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
          console.log("res", res);
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
  if (isLoading) return <Loading />;
	// if there is any error, then we are showing the error message
  else if (error) return <ErrorMessage message={error} />;
	// if the news details are present, then we are showing the news details
  else
    return (
      <div>
        <h4>{newsDetails?.title}</h4>
        <p>{newsDetails?.points}</p>
        <ul>
          {newsDetails?.children?.map(({ text, objectID }) => (
            <li key={objectID}>{text}</li>
          ))}
        </ul>
      </div>
    );
};

export default NewsDetails;
