import style from "./Person.module.scss";

const Person = ({ person }) => {
  return (
    <div className={style.person}>
      <img
        src={person.img.src}
        alt="Team 1 Person 1"
        className={style.person_img}
      />

      <div className={style.person_content}>
        <p className={style.person_content_name}>{person.name}</p>
        <p className={style.person_content_role}>{person.role}</p>
      </div>
    </div>
  );
};

export default Person;
