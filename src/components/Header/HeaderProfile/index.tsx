import { useContext, useEffect, useState } from "react";
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import { MyContext } from "../../../context/UserContext";
import { InputSearch } from "../../InputSearch";
import styles from "./HeaderProfile.module.css";
import profileSettingsIcon from "../../../assets/User.svg";
import caretDownSettingsIcon from "../../../assets/CaretDown.svg";
import Logo from '../../../assets/UOLkut.svg'
import { profile } from "console";

type UserData = {
  uid: string;
  name: string;
  country: string;
  city: string;
  relationship: string;
}

export const HeaderProfile = () => {

  const [ profileData, setProfileData ] = useState<UserData | null>(null)
  const { userUid } = useContext(MyContext)!;


  const getProfileData = async () => {
    try {
      console.log(userUid);
      console.log('teste');
      const db = getFirestore();
      const q = query(collection(db, "datausers"), where("uid", "==", userUid));

      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
        setProfileData(doc.data() as UserData);
      });
    } catch (error) { 
      console.error("Error fetching user data:", error);
    }
    console.log(profileData)
  }
  
  useEffect(() => {
    getProfileData();
  },[])


  return (
    <>
      <img src={Logo} alt="" />
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
        <p>{profileData?.name}</p>
        <img src={caretDownSettingsIcon} className={styles.widthIcon}/>
      </div>
    </>
  );
};
