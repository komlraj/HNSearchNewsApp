const Loading = ({ additionalMessage = "" }) => {
  return (
    <div>
      <div className="lds-facebook">
        <div></div>
        <div></div>
        <div></div>
      </div>
      {
        // if additionalMessage is present, then we are showing the additional message
        additionalMessage && <div>{additionalMessage}</div>
      }
    </div>
  );
};

export default Loading;
