import styles from "./ProfileInfo.module.css";
import star from "../../assets/images/Star.svg";
import smiley from "../../assets/images/Smiley.svg";
import thumbsUp from "../../assets/images/ThumbsUp.svg";
import heart from "../../assets/images/Heart.svg";
import bubble from "../../assets/images/Bubble.svg";
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import { useContext, useEffect, useState } from "react";
import { MyContext } from "../../context/UserContext";

type UserData = {
  uid: string;
  name: string;
  work: string;
  country: string;
  city: string;
  date: string;
  relationship: string;
  calculatedAge: number;
} 

export function ProfileInfo() {

  const [ profileData, setProfileData ] = useState<UserData | null>(null)
  const { userUid } = useContext(MyContext)!;

  function calculateAge(birthdayDate: string) {
    const today = new Date();
    const birth = new Date(birthdayDate);
    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
      age--;
    }

    return age;
  }
  const date = profileData?.date
  const calculatedAge = calculateAge(date!)


  const getProfileData = async () => {
    try {
      console.log(userUid);
      console.log('teste');
      const db = getFirestore();
      const get = query(collection(db, "datausers"), where("uid", "==", userUid));

      const querySnapshot = await getDocs(get);
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
    <section className={styles.profileInfoContainer}>
      <header>
        <h2>Boa tarde, {profileData?.name}</h2>
        <blockquote>
          <img src={bubble} alt="" />
          <p>Programar sem café é igual poeta sem poesia.</p>
        </blockquote>
      </header>

      <dl className={styles.user_status}>
        <div>
          <dt>Fãs</dt>
          <dd>
            <img src={star} alt="" />
            <span>85</span>
          </dd>
        </div>
        <div>
          <dt>Confiável</dt>
          <dd>
            <img src={smiley} alt="" />
            <img src={smiley} alt="" />
          </dd>
        </div>
        <div>
          <dt>Legal</dt>
          <dd>
            <img src={thumbsUp} alt="" />
            <img src={thumbsUp} alt="" />
            <img src={thumbsUp} alt="" />
          </dd>
        </div>
        <div>
          <dt>Sexy</dt>
          <dd>
            <img src={heart} alt="" />
            <img src={heart} alt="" />
          </dd>
        </div>
      </dl>

      <dl className={styles.user_details}>
        <div>
          <dt>Relacionamento:</dt>
          <dd>{profileData?.relationship}</dd>
        </div>
        <div>
          <dt>Aniversário:</dt>
          <dd>{profileData?.date}</dd>
        </div>
        <div>
          <dt>Idade:</dt>
          <dd>{calculatedAge}</dd>
        </div>
        <div>
          <dt>Quem sou eu:</dt>
          <dd>{profileData?.work}</dd>
        </div>
        <div>
          <dt>Moro:</dt>
          <dd>{profileData?.city}</dd>
        </div>
        <div>
          <dt>País:</dt>
          <dd>{profileData?.country}</dd>
        </div>
        <div style={{marginBottom: '15rem'}}>
          <dt>Cidade:</dt>
          <dd>{profileData?.city}</dd>
        </div>
        <div className={styles.multiple_options_field_details}>
          <dt>Músicas:</dt>
          <dd>Trap</dd>
          <dd className={styles.isMobile}>Rap</dd>
          <dd className={styles.isMobile}>Indie</dd>
          <span>Ver todos</span>
        </div>
        <div className={styles.multiple_options_field_details}>
          <dt>Filmes:</dt>
          <dd>A rede social</dd>
          <dd className={styles.isMobile}>Meu amigo totoro</dd>
          <span>Ver todos</span>
        </div>
      </dl>
    </section>
  );
}
