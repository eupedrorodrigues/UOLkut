import { initializeApp } from "firebase/app";
import { useEffect, useState } from "react";
import styles from "./ProfileUser.module.css";
import imageUser from "../../assets/images/profileIcon.svg";

export const UserProfile = () => {

  return (
    <section className={styles.container_profile_user}>
      <div className={styles.container_desc_img_user}>
        <div className={styles.circle_image_user}>
          <img className={styles.image_user} src={imageUser} alt="" />
        </div>
        <p className={styles.name_user}>Gabriel Barbosa</p>
        <p className={styles.desc_user}>Solteiro, Brasil</p>
      </div>
    </section>
  );
};