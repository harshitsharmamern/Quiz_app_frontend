

// TimerContext.js
import React, { createContext, useState, useEffect } from 'react';

const TimerContext = createContext();

export const TimerProvider = ({ children }) => {
  const [time, setTime] = useState(() => {
    const storedTime = JSON.parse(localStorage.getItem('timer'));
    return storedTime || { minutes: 30, seconds: 10 };
  });


// useEffect(() => {
//     const intervalId = setInterval(() => {
//       const currentTime = timeRef.current;
//       if (currentTime.minutes === 0 && currentTime.seconds === 0) {
//         clearInterval(intervalId);
//         handlesubmit();
//       } else {
//         const newTime = {
//           minutes: currentTime.seconds === 0 ? currentTime.minutes - 1 : currentTime.minutes,
//           seconds: currentTime.seconds === 0 ? 59 : currentTime.seconds - 1
//         };
//         timeRef.current = newTime;
//         setTime(newTime);
//         localStorage.setItem('timer', JSON.stringify(newTime)); // Update timer value in local storage
//       }
//     }, 1000);

//     return () => clearInterval(intervalId);
//   }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(prevTime => {
        if (prevTime.minutes === 0 && prevTime.seconds === 0) {
          clearInterval(intervalId);
          return prevTime;
        } else {
          const newTime = {
            minutes: prevTime.seconds === 0 ? prevTime.minutes - 1 : prevTime.minutes,
            seconds: prevTime.seconds === 0 ? 59 : prevTime.seconds - 1
          };
          localStorage.setItem('timer', JSON.stringify(newTime));
          return newTime;
        }
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);
  console.log("hello timer provider",time);

  return (
    <TimerContext.Provider value={{ time, setTime }}>
      {children}
    </TimerContext.Provider>
  );
};

export default TimerContext;
