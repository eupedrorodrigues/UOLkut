import { useEffect, useState } from 'react';
import Icon from '../../../assets/ps_orkut.svg';
import styles from './MyFormRegister.module.css';
import { addDoc, collection, getDocs, getFirestore } from 'firebase/firestore';
import { firebaseConfig } from '../../../services/firebaseConfig';

type Props = {}

const MyFormRegister = (props: Props) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [work, setWork] = useState('');
    const [country, setCountry] = useState('');
    const [city, setCity] = useState('');
    const [relat, setRelat] = useState('');
    const [users, setUsers] = useState([]);

    const db = getFirestore(firebaseConfig)
    const userCollectionRef = collection(db, "datausers") 

    async function createrUser() {
        const user = await addDoc(userCollectionRef,{
            email, 
            password, 
            name, 
            date, 
            work, 
            country,
            city,
        });
        console.log("Dados salvos com sucesso",user.id)
    }

    useEffect(() => {
        const getUsers = async () => {
            const data = await getDocs(userCollectionRef);
            console.log(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
        }
        getUsers();
    },[])
        
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
            
            <div className={styles.inputRow}>
                <div className={styles.inputBox}>
                    <input 
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)} 
                    required/>
                </div>
                <div className={styles.inputBox}>
                    <input 
                    type="text" 
                    placeholder='Profissão' 
                    value={work}
                    onChange={(e) => setWork(e.target.value)} 
                    required/>
                </div>
            </div>
            <div className={styles.inputRow}> 
                <div className={styles.inputBox}>
                    <input 
                    type="text" 
                    placeholder='País'
                    value={country}
                    onChange={(e) => setCountry(e.target.value)} 
                    required/>
                </div>
                <div className={styles.inputBox}>
                    <input 
                    type="text" 
                    placeholder='Cidade' 
                    value={city}
                    onChange={(e) => setCity(e.target.value)} 
                    required/>
                </div>
            </div>
            {/* <div className={styles.inputRow}>
                <div className={styles.inputSelect}>
                    <select>
                        <option value="">Solteiro</option>
                        <option value="">Casado</option>
                        <option value="">Divorciado</option>
                        <option value="">Namorando</option>
                        <option value="">Preocupado</option>
                    </select>
                </div>
            </div> */}
            <button className={styles.btnLogin} onClick={createrUser}>Criar conta</button>
        </form>
    </div>
    </div>
  )
}

export default MyFormRegister