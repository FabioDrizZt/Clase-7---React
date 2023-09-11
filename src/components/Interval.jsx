import { useEffect, useState } from "react";

const Interval = () => {
  const [cantidad, setCantidad] = useState(2);

  useEffect(() => {
    const interval = setInterval(() => {
      setCantidad((prevState) => ++prevState);
    }, 1000);
  }, []);


  return (
    <>
      <p>Quiero {cantidad} chocolates</p>
    </>
  );
};

export default Interval;
