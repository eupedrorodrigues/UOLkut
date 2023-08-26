import { InputSearch } from "../../InputSearch";
import styles from "./HeaderProfile.module.css";
import profileSettingsIcon from "../../../assets/images/profileIcon.svg";
import caretDownSettingsIcon from "../../../assets/CaretDown.svg";

export const HeaderProfile = () => {
  return (
    <>
      <nav className={styles.nav}>
        <ul>
          <li>Início</li>
          <li className={styles.profile_nav}>Perfil</li>
          <li>Comunidades</li>
          <li>Jogos</li>
        </ul>
      </nav>

      <InputSearch className="isDesktop" />

      <div className={styles.settings_container}>
        <img src={profileSettingsIcon} />
        <p>Gabriel Barbosa</p>
        <img src={caretDownSettingsIcon} className={styles.widthIcon}/>
      </div>
    </>
  );
};
