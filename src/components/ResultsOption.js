import ProgressBar from './ProgressBar';

const ResultsOption = ({ text, value, totalVoted }) => (
  <div className="results__option">
    <div>{text}</div>
    <div className="results__value"> {+value} людей</div>
    <ProgressBar percent={(+value * 100) / totalVoted} />
  </div>
);

export default ResultsOption;
