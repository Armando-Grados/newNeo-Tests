import style from "../Trajectory.module.scss";
import { useState, useEffect, useRef } from "react";

const Stats = ({ trajectory }) => {
  const [count, setCount] = useState(0);
  const intervalIdRef = useRef(null);
  const counterRef = useRef(null);

  // Start the counter only when the component comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (count < parseInt(trajectory.stat)) {
            intervalIdRef.current = setInterval(() => {
              setCount((count) => count + 1);
            }, 20);
          }
        } else {
          clearInterval(intervalIdRef.current);
        }
      },
      { threshold: 0.5 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      clearInterval(intervalIdRef.current);
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, [count]);

  return (
    <div className={style.trajectory_container_item} ref={counterRef}>
      <h4 className={style.trajectory_container_item_heading}>+{count}</h4>
      <div className={style.trajectory_container_item_divider}></div>
      <p className={style.trajectory_container_item_text}>{trajectory.text}</p>
    </div>
  );
};

export default Stats;
