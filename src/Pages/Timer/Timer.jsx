import React, { useEffect, useState } from "react";
import "./Timer.css";

// Define the type for timeLeft state
const TimeLeft = {
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0
}

const Timer = () => {
  const targetDate = (() => {
    const date = new Date();
    date.setDate(date.getDate() + 10);
    return date;
  })();

  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft);

  useEffect(() => {
    const timer = setInterval(() => {
      const newTimeLeft = calculateTimeLeft();
      setTimeLeft(newTimeLeft);

      if (
        newTimeLeft.days === 0 &&
        newTimeLeft.hours === 0 &&
        newTimeLeft.minutes === 0 &&
        newTimeLeft.seconds === 0
      ) {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (

    <div className="counter-number">
      <div className="row justify-content-center">
        <div className="counter-box col-2 p-3 rounded shadow mx-2">
          <h2 className="display-4 fw-bold">{timeLeft.days}</h2>
          <p className="lead">Days</p>
        </div>
        <div className="counter-box col-2 p-3 rounded shadow mx-2">
          <h2 className="display-4 fw-bold">{timeLeft.hours}</h2>
          <p className="lead">Hours</p>
        </div>
        <div className="counter-box col-2 p-3 rounded shadow mx-2">
          <h2 className="display-4 fw-bold">{timeLeft.minutes}</h2>
          <p className="lead">Minutes</p>
        </div>
        <div className="counter-box col-2 p-3 rounded shadow mx-2">
          <h2 className="display-4 fw-bold">{timeLeft.seconds}</h2>
          <p className="lead">Seconds</p>
        </div>
      </div>
    </div>
  );
};

export default Timer;
