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
  name: string;
  email: string;
  password: string;
  country: string;
  city: string;
  date: string;
  work: string;
  relationship: string;
  age: number;
  uid: string;
} 

export function ProfileInfo() {

  const [ profileData, setProfileData ] = useState<UserData | null>(null)
  const { userUid } = useContext(MyContext)!;


  useEffect(() => {
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
    }
  },[])
  
  


  return (
    <section className={styles.profileInfoContainer}>
      <header>
        <h2>Boa tarde, Gabriel Barbosa</h2>
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
          <dd>Solteiro</dd>
        </div>
        <div>
          <dt>Aniversário:</dt>
          <dd>21 de Julho</dd>
        </div>
        <div>
          <dt>Idade:</dt>
          <dd>22</dd>
        </div>
        <div>
          <dt>Quem sou eu:</dt>
          <dd>Programador</dd>
        </div>
        <div>
          <dt>Moro:</dt>
          <dd>Guarantã</dd>
        </div>
        <div>
          <dt>País:</dt>
          <dd>Brasil</dd>
        </div>
        <div style={{marginBottom: '15rem'}}>
          <dt>Cidade:</dt>
          <dd>São Paulo</dd>
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
