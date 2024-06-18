import { useState, useEffect } from "react";

type TimberCoolDownProps = {
  initialNumber: string | number;
};

const TimberCoolDown = (props: TimberCoolDownProps) => {
  const [seconds, setSeconds] = useState(Number(props.initialNumber));

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prevSeconds) => {
        if (prevSeconds === 0) {
          clearInterval(interval);
          return 0;
        }
        return prevSeconds - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  return (
    <>
      <p className="text-center mb-3" style={{fontSize:'18px'}}>
        {minutes < 10 ? `0${minutes}` : minutes}:
        {remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds}
      </p>
    </>
  );
};

export default TimberCoolDown;
