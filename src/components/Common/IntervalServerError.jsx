import { somethingWentWrongMessage, tryAgainMessage } from '../../constants';

function IntervalServalError({ error, resetErrorBoundary }) {
  return (
    <div role="alert" className="internal-server-error">
      <p>{somethingWentWrongMessage}</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>{tryAgainMessage}</button>
    </div>
  );
}

export default IntervalServalError;
