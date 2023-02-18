import style from "./Trajectory.module.scss";
import uuid from "react-uuid";
import Stats from "./_chidren/Stats";

const Trajectory = ({ trajectories }) => {
  return (
    <div className={style.trajectory}>
      <div className={style.trajectory_container}>
        {trajectories.map((trajectory) => (
          <Stats key={uuid()} trajectory={trajectory} />
        ))}
      </div>
    </div>
  );
};

export default Trajectory;
