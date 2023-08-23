import { useState } from 'react';
import Icon from '../../../assets/ps_orkut.svg';
import styles from './MyFormRegister.module.css';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../../../services/firebaseconfig';


type Props = {  }

const MyFormRegister = (props: Props) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth)

    function handleSignOut(e:any){
        e.preventDefault();
        createUserWithEmailAndPassword(email, password);
    }

    if(loading){
        return <p>Carregando...</p>
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
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    />
            </div>
            <div className={styles.inputBox}>
                <input 
                    placeholder='Senha' 
                    type="password" 
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    />
            </div>
            
            <div className={styles.inputRow}>
                <div className={styles.inputBox}>
                    <input type="date" />
                </div>
                <div className={styles.inputBox}>
                    <input type="text" placeholder='Profissão'/>
                </div>
            </div>
            <div className={styles.inputRow}> 
                <div className={styles.inputBox}>
                    <input type="text" placeholder='País'/>
                </div>
                <div className={styles.inputBox}>
                    <input type="text" placeholder='Cidade'/>
                </div>
            </div>
            <div className={styles.inputRow}>
                <div className={styles.inputSelect}>
                    <select>
                        <option value="">Solteiro</option>
                        <option value="">Casado</option>
                        <option value="">Divorciado</option>
                        <option value="">Namorando</option>
                        <option value="">Preocupado</option>
                    </select>
                </div>
            </div>
            <button className={styles.btnLogin} onClick={handleSignOut}>Criar conta</button>
        </form>
    </div>
    </div>
  )
}

export default MyFormRegister