const ErrorMessage = ({ message = "Oops!, something went wrong" }) => {
  // if the message is present, then we are showing the message
  return <div className="error-message">{message}</div>;
};

export default ErrorMessage;
