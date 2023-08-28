import { useContext, useEffect, useState } from 'react';
import styles from './EditProfileInf.module.css';
import { collection, doc, getDocs, getFirestore, query, updateDoc, where } from 'firebase/firestore';
import { firebaseConfig } from '../../services/firebaseConfig';
import { MyContext } from '../../context/UserContext';
import { useNavigate } from 'react-router-dom';

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

const EditProfileInf = () => {

  const navigate = useNavigate();
  const [relationship, setRelationship] = useState('')
  const civilStatusOptions = [
    'Solteiro',
    'Casado',
    'Divorciado',
    'Namorando',
    'Preocupado'
  ];

  const [ profileData, setProfileData ] = useState<UserData | null>(null)
  const { userUid } = useContext(MyContext)!;

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

  const handleEditForm = async () => {
    try {
      const db = getFirestore(firebaseConfig);
      const usersCollection = collection(db, 'datausers');
      const querySnapshot = await getDocs(
        query(usersCollection, where('uid', '==', userUid))
      );
      const userDoc = querySnapshot.docs[0].id;
      const docRef = doc(db, 'datausers', userDoc);
      const updateDocFields = {
        name: name,
        work: work,
        city: city,
        country: country,
        date: date,
        relationship: status,
        calculatedAge: age,
      };   
      const update = await updateDoc(docRef, updateDocFields);
      console.log(update);
      navigate('/Profile')
    } catch (e) {
      console.log(e);
    }
  };
  

  useEffect(() => {
    getProfileData();
    handleEditForm();
  }, [])


  const [name, setName] = useState('');
  const [work, setWork] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [date, setDate] = useState('');
  const [status, setStatus ] = useState('');
  const [age, setAge] = useState('');
  


  return (
    <section className={styles.profileInfoContainer}>
        <h2>Editar informações</h2>
        <section className={styles.contentBox}>
        <div>
          <div className={styles.inputBox}>
            <input 
              type="text" 
              placeholder={profileData?.work}
              onChange={(e) => setWork(e.target.value)}
            />
          </div>
          <div className={styles.inputBox}>
            <input 
              type="text" 
              placeholder={profileData?.name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className={styles.inputBox}>
            <input 
            type="text" 
            placeholder={profileData?.city}
            onChange={(e) => setCity(e.target.value)}
            />
          </div>
          <div className={styles.inputBox}>
            <input 
              type="text" 
              placeholder={profileData?.country}
              onChange={(e) => setCountry(e.target.value)}
              />
          </div>
          <div className={styles.inputBox}>
            <input 
              type="date" 
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <div className={styles.inputBox}>
            <input 
              type="password" 
              placeholder='Senha'
            />
          </div>
          <div className={styles.inputBox}>
            <input type="password" placeholder='Repetir senha'/>
          </div>
        </div>
        <div className={styles.wrapperSelect}>
          <select value={relationship} onChange={(e) => setStatus(e.target.value)} placeholder={profileData?.relationship}>
            <option value=""></option>
              {civilStatusOptions.map(status => (<option key={status} value={status}>
                    {status}
            </option>
            ))}
          </select>
        </div>
      </section>
      <button className={styles.BtnSalve} onClick={handleEditForm}>Salvar</button>
    </section>
  )
}

export default EditProfileInf