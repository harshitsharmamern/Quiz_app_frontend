import React, { useState, useEffect } from 'react';

const Clock = ({ handlesubmit }) => {
  const [time, setTime] = useState({
    minutes: 30 || 0,
    seconds: 5 || 0,
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (time.minutes === 0 && time.seconds === 0) {
          clearInterval(intervalId);
          handlesubmit()
        // Add any additional logic when the countdown reaches zero
      } else {
        setTime((prevTime) => {
          if (prevTime.seconds === 0) {
            return { minutes: prevTime.minutes - 1, seconds: 59 };
          } else {
            return { minutes: prevTime.minutes, seconds: prevTime.seconds - 1 };
          }
        });
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [time]);

  return (
    <div>
      <p>
        {String(time.minutes).padStart(2, '0')}:{String(time.seconds).padStart(2, '0')}
      </p>
    </div>
  );
};
export default Clock