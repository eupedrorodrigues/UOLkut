import { useEffect, useState } from 'react';
import { addDoc, collection, getDocs, getFirestore } from 'firebase/firestore';
import { firebaseConfig } from '../../../services/firebaseConfig';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../../../services/firebaseConfig';
import Icon from '../../../assets/ps_orkut.svg';
import styles from './MyFormRegister.module.css';
import { useNavigate } from 'react-router-dom';

 
type Props = {}
 
const MyFormRegister: React.FC = (props: Props) => {

    const navigate = useNavigate();
 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [work, setWork] = useState('');
    const [country, setCountry] = useState('');
    const [city, setCity] = useState('');
    const [relationship, setRelationship] = useState('')
    const [
        createUserWithEmailAndPassword,
        user,
        error,
    ] = useCreateUserWithEmailAndPassword(auth)
 
 
    const [loading, setLoading] = useState(false);
 
    const db = getFirestore(firebaseConfig);
    const userCollectionRef = collection(db, "datausers");
 
    async function createUser(e: any) {
        e.preventDefault();
        setLoading(true);
        if (!email || !password || !name || !date || !work || !country || !city) {
          alert("Error: Preencha todos os campos");
          setLoading(false);
          return;
        }
        try {
          const create = await createUserWithEmailAndPassword(email, password);
          const user = create?.user;
          console.log({ create });
          console.log({ user });
          const addDocFirebase = await addDoc(userCollectionRef, {
            uid: user?.uid,
            name,
            date,
            work,
            country,
            city,
          });
          console.log({ addDocFirebase });
          console.log("Dados salvos com sucesso", user?.uid);
          navigate("/");
        } catch (error) {
          console.error("Erro ao criar usuário:", error);
        } finally {
          setLoading(false);
        }
      }
 
    if (loading) {
        return <p>Carregando...</p>;
    }
 
        
  return (
    <div>
        <div className={styles.formBox}>
            <img style={{margin: '10px', paddingTop: '20px'}} src={Icon} alt="" /> 
            <h2>Acesse o Orkut</h2>
        <form>
            <div className={styles.inputBox}>
                <input 
                    placeholder='Email' 
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    />
            </div>
            <div className={styles.inputBox}>
                <input 
                    placeholder='Senha' 
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} 
                    required
                    />
            </div>
            <div className={styles.inputBox}>
                <input 
                    placeholder='Nome' 
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)} 
                    required
                    />
            </div>
            <div className={styles.wrapperInput}>
                <input 
                  type="date" 
                  value={date}
                  onChange={(e) => setDate(e.target.value)}/>

                <input 
                  type="text"
                  value={work}
                  onChange={(e) => setWork(e.target.value)}
                  placeholder='Profissão' />
            </div>
            <div className={styles.wrapperInput}>
                <input 
                  type="text"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  placeholder='País'/>

                <input 
                  type="text" 
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  placeholder='City' />
            </div>
            {/* <div className={styles.wrapperSelect}>
                <select
                  // value={relationship}
                  // onChange={(e) => setRelationship(e.target.value)}
                >
                    <option>Relacionamento</option>
                    <option>Solteiro</option>
                    <option>Casado</option>
                    <option>Divorciado</option>
                    <option>Namorando</option>
                    <option>Preocupado</option>
                </select>
            </div> */}
            
            <button className={styles.btnLogin} onClick={createUser}>Criar conta</button>
        </form>
    </div>
    </div>
  )
}
 
export default MyFormRegister