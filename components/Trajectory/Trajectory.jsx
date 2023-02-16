import style from "./Trajectory.module.scss";
import uuid from "react-uuid";

const Trajectory = ({ trajectories }) => {
  return (
    <div className={style.trajectory}>
      <div className={style.trajectory_container}>
        {trajectories.map((trajectory) => (
          <div className={style.trajectory_container_item} key={uuid()}>
            <h4 className={style.trajectory_container_item_heading}>
              {trajectory.heading}
            </h4>
            <div className={style.trajectory_container_item_divider}></div>
            <p className={style.trajectory_container_item_text}>
              {trajectory.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trajectory;
