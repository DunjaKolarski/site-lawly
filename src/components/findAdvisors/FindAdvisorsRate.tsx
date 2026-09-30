import "./FindAdvisorsRate.css";
import { useState } from "react";

const bars = [
  8, 12, 18, 25, 35, 45, 60, 75, 90, 100, 95, 85, 70, 50, 35, 20, 12, 6,
];

type FindAdvisorsRateProps = {
  isMobile: boolean;
};

function FindAdvisorsRate({ isMobile }: FindAdvisorsRateProps) {
  const minimumRate = 20;
  const maximumRate = 200;

  const [minRate, setMinRate] = useState(isMobile ? 30 : 20);
  const [maxRate, setMaxRate] = useState(isMobile ? 100 : 50);

  const minPercent =
    ((minRate - minimumRate) / (maximumRate - minimumRate)) * 100;
  const maxPercent =
    ((maxRate - minimumRate) / (maximumRate - minimumRate)) * 100;

  return (
    <div className="find-advisors-rate">
      <h4>Hourly Rate</h4>

      <div className="find-advisors-rate-chart">
        <div className="find-advisors-rate-bars" aria-hidden="true">
          {bars.map((height, index) => {
            const position = ((index + 0.5) / bars.length) * 100;
            const isSelected = position >= minPercent && position <= maxPercent;

            return (
              <span
                key={index}
                className={isSelected ? "find-advisors-rate-selected" : ""}
                style={{ height: `${height}%` }}
              ></span>
            );
          })}
        </div>

        <div className="find-advisors-rate-slider">
          <div className="find-advisors-rate-track" aria-hidden="true">
            <span
              style={{
                left: `${minPercent}%`,
                width: `${maxPercent - minPercent}%`,
              }}
            ></span>
          </div>

          <input
            type="range"
            min={minimumRate}
            max={maximumRate}
            step={5}
            value={minRate}
            aria-label="Minimum hourly rate"
            aria-valuetext={`$${minRate} per hour`}
            onChange={(event) =>
              setMinRate(Math.min(Number(event.target.value), maxRate - 5))
            }
          />
          <input
            type="range"
            min={minimumRate}
            max={maximumRate}
            step={5}
            value={maxRate}
            aria-label="Maximum hourly rate"
            aria-valuetext={`$${maxRate} per hour`}
            onChange={(event) =>
              setMaxRate(Math.max(Number(event.target.value), minRate + 5))
            }
          />
        </div>
      </div>

      <div className="find-advisors-rate-values">
        <div>
          <span>Min</span>
          <p>${minRate}</p>
        </div>
        <div>
          <span>Max</span>
          <p>${maxRate}</p>
        </div>
      </div>
    </div>
  );
}

export default FindAdvisorsRate;
