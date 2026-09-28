import "./MatchQuizBudget.css";

const minimumBudget = 65;
const maximumBudget = 150;

const bars = [
  5, 8, 12, 18, 25, 32, 40, 52, 65, 80, 95, 92, 85, 78, 90, 100, 88, 55, 30, 18,
  12, 8, 5, 3,
];

type MatchQuizBudgetProps = {
  minBudget: number;
  maxBudget: number;
  onMinChange: (value: number) => void;
  onMaxChange: (value: number) => void;
};

function MatchQuizBudget({
  minBudget,
  maxBudget,
  onMinChange,
  onMaxChange,
}: MatchQuizBudgetProps) {
  const minimumPercent =
    ((minBudget - minimumBudget) / (maximumBudget - minimumBudget)) * 100;

  const maximumPercent =
    ((maxBudget - minimumBudget) / (maximumBudget - minimumBudget)) * 100;

  return (
    <div className="match-quiz-budget">
      <p>What's your budget?</p>

      <div className="match-quiz-budget-value">
        <strong>
          ${minBudget} - ${maxBudget}
          {maxBudget === maximumBudget ? "+" : ""}
        </strong>
        <span>per 60-minute session</span>
      </div>

      <div className="match-quiz-budget-chart">
        <div className="match-quiz-budget-bars" aria-hidden="true">
          {bars.map((height, index) => {
            const position = ((index + 0.5) / bars.length) * 100;
            const isSelected =
              position >= minimumPercent && position <= maximumPercent;

            return (
              <span
                key={index}
                className={isSelected ? "match-quiz-budget-bar-selected" : ""}
                style={{ height: `${height}%` }}
              ></span>
            );
          })}
        </div>

        <div className="match-quiz-budget-slider">
          <div className="match-quiz-budget-track" aria-hidden="true">
            <div
              className="match-quiz-budget-track-selected"
              style={{
                left: `${minimumPercent}%`,
                width: `${maximumPercent - minimumPercent}%`,
              }}
            ></div>
          </div>

          <input
            type="range"
            min={minimumBudget}
            max={maximumBudget}
            step={5}
            value={minBudget}
            aria-label="Minimum budget"
            aria-valuetext={`$${minBudget} per session`}
            onChange={(event) =>
              onMinChange(Math.min(Number(event.target.value), maxBudget - 5))
            }
          />

          <input
            type="range"
            min={minimumBudget}
            max={maximumBudget}
            step={5}
            value={maxBudget}
            aria-label="Maximum budget"
            aria-valuetext={`$${maxBudget}${
              maxBudget === maximumBudget ? " or more" : ""
            } per session`}
            onChange={(event) =>
              onMaxChange(Math.max(Number(event.target.value), minBudget + 5))
            }
          />
        </div>
      </div>
    </div>
  );
}

export default MatchQuizBudget;
