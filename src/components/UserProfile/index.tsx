import styles from "./ProfileUser.module.css";
import imageUser from "../../assets/User.svg";
import { useContext, useEffect, useState } from "react";
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import { MyContext } from "../../context/UserContext";

type UserData = {
  uid: string;
  name: string;
  country: string;
  city: string;
  relationship: string;
}

export const UserProfile = () => {

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
    <section className={styles.container_profile_user}>
      <div className={styles.container_desc_img_user}>
        <div className={styles.circle_image_user}>
          <img className={styles.image_user} src={imageUser} alt="" />
        </div>
        <p className={styles.name_user}>{profileData?.name}</p>
        <p className={styles.desc_user}>{profileData?.relationship}, {profileData?.country}</p>
      </div>
    </section>
  );
};
