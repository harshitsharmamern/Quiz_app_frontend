import React, { useState, useEffect } from 'react';

const Clock = ({ handlesubmit,timeRef }) => {
  // const [time, setTime] = useState({
  //   minutes: 30 || 0,
  //   seconds: 10 || 0,
  // });
  useEffect(() => {
    const intervalId = setInterval(() => {
      const currentTime = timeRef.current;
      if (currentTime.minutes === 0 && currentTime.seconds === 0) {
        clearInterval(intervalId);
        handlesubmit();
      } else {
        timeRef.current = {
          minutes: currentTime.seconds === 0 ? currentTime.minutes - 1 : currentTime.minutes,
          seconds: currentTime.seconds === 0 ? 59 : currentTime.seconds - 1
        };
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timeRef, handlesubmit]);


  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     if (time.minutes === 0 && time.seconds === 0) {
  //         clearInterval(intervalId);
  //         handlesubmit()
  //       // Add any additional logic when the countdown reaches zero
  //     } else {
  //       setTime((prevTime) => {
  //         if (prevTime.seconds === 0) {
  //           return { minutes: prevTime.minutes - 1, seconds: 59 };
  //         } else {
  //           return { minutes: prevTime.minutes, seconds: prevTime.seconds - 1 };
  //         }
  //       });
  //     }
  //   }, 1000);

  //   return () => clearInterval(intervalId);
  // }, [time]);

  return (
    <div>
      <p>
        {/* {String(time.minutes).padStart(2, '0')}:{String(time.seconds).padStart(2, '0')} */}
        {String(timeRef.current.minutes).padStart(2, '0')}:{String(timeRef.current.seconds).padStart(2, '0')}

      </p>
    </div>
  );
};
export default Clock