import style from "./MeetOurTeam.module.scss";
import AddFill from "../../public/assets/SVGs/Add-Fill.svg";
import Person from "./_children/Person";
import { useState } from "react";
import uuid from "react-uuid";

const MeetOurTeam = ({ collaborators }) => {
  const [team, setTeam] = useState("t1");
  const [limit, setLimit] = useState(6);

  return (
    <div className={style.meet}>
      <div className={style.meet_container}>
        <div className={style.meet_container_header}>
          <div className={style.meet_container_header_heading}>
            <h2>Conoce a nuestro equipo</h2>
            <p>
              Nuestro equipo es nuestra mayor fortaleza; juntos, formamos un
              equipo fuerte y comprometido con el éxito de NEO.
            </p>
          </div>

          <div className={style.meet_container_header_select}>
            <select
              className={style.meet_container_header_select_teams}
              onChange={(e) => setTeam(e.target.value)}
            >
              <option value="t1">Canales digitales y Growth Haking</option>
              <option value="t2">E-commerce</option>
              <option value="t3">Digital Talent Solutions</option>
              <option value="t4">Consultoría CRM</option>
              <option value="t5">
                Analítica Digital e Inteligencia Artificial
              </option>
              <option value="t6">
                Diseño de experiencia y Transformación Digital
              </option>
              <option value="t7">Publicidad digital</option>
            </select>

            <button className={style.meet_container_header_select_btn}>
              Únete a nuestro equipo
            </button>
          </div>
        </div>

        <div className={style.meet_container_sector}>
          <div className={style.meet_container_sector_container}>
            <div className={style.meet_container_sector_container_btn}>
              <button
                onClick={() => setTeam("t1")}
                className={
                  team === "t1"
                    ? style.meet_container_sector_container_btn_active
                    : ""
                }
              >
                Canales digitales y Growth Haking
              </button>
              <button
                onClick={() => setTeam("t2")}
                className={
                  team === "t2"
                    ? style.meet_container_sector_container_btn_active
                    : ""
                }
              >
                E-commerce
              </button>
              <button
                onClick={() => setTeam("t3")}
                className={
                  team === "t3"
                    ? style.meet_container_sector_container_btn_active
                    : ""
                }
              >
                Digital Talent Solutions
              </button>
              <button
                onClick={() => setTeam("t4")}
                className={
                  team === "t4"
                    ? style.meet_container_sector_container_btn_active
                    : ""
                }
              >
                Consultoría CRM
              </button>
              <button
                onClick={() => setTeam("t5")}
                className={
                  team === "t5"
                    ? style.meet_container_sector_container_btn_active
                    : ""
                }
              >
                Analítica Digital e Inteligencia Artificial
              </button>
              <button
                onClick={() => setTeam("t6")}
                className={
                  team === "t6"
                    ? style.meet_container_sector_container_btn_active
                    : ""
                }
              >
                Diseño de experiencia y Transformación Digital
              </button>
              <button
                onClick={() => setTeam("t7")}
                className={
                  team === "t7"
                    ? style.meet_container_sector_container_btn_active
                    : ""
                }
              >
                Publicidad digital
              </button>
            </div>

            <div className={style.meet_container_sector_btn_join}>
              <button className={style.meet_container_header_select_btn}>
                Únete a nuestro equipo
              </button>
            </div>
          </div>

          <div className={style.meet_container_sector_team}>
            <div className={style.meet_container_sector_team_container}>
              {collaborators[team].slice(0, limit).map((person) => (
                <Person person={person} key={uuid()} />
              ))}
            </div>
            <button
              className={style.meet_container_sector_team_vm}
              onClick={() => setLimit(12)}
              style={
                collaborators[team].length < limit
                  ? { pointerEvents: "none" }
                  : {}
              }
            >
              <span>Ver más</span>
              <img src={AddFill.src} alt="View more" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetOurTeam;
