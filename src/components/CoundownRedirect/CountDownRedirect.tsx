import { useState, useEffect } from "react";
interface Props {
  to: string;
  seconds: number;
}

const CountDownRedirect = ({ to, seconds }: Props) => {
  const [count, setCount] = useState(seconds);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => (prevCount - 1) < 0 ? 0: (prevCount - 1));
    }, 1000);

    return () => clearInterval(interval);
  }, []);
    if (count === 0) {
        window.location.href = to;
    }
   return <span> {count} </span>;
};

export default CountDownRedirect;
