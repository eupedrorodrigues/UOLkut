import { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../../../services/firebaseConfig';
import Icon from '../../../assets/ps_orkut.svg'
import styles from './MyFormLogin.module.css'
import { Link, useNavigate } from 'react-router-dom';

type Props = {}

const MyFormLogin = (props: Props) => {

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth)

    async function authLogin(e:any){
        e.preventDefault();
        const create = await createUserWithEmailAndPassword(email, password);
        if (!email || !password){
            alert('Error: Preencha todos os campos')
        }else{
            navigate('/Profile')
        }
    }

    if(loading){
        return <p>Carregando...</p>
    }

  return (
    <div className={styles.formBox}>
        <img style={{margin: '10px'}} src={Icon} alt="" /> 
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
            <div className={styles.rememberMe}>
                <span>
                    <span className={styles.checkColor}>
                        <input type="checkbox" required/>
                    </span>
                </span>
                <label className={styles.checkbox}>
                    Lembrar minha senha
                </label>
            </div>
            <button className={styles.btnLogin} onClick={authLogin}>Entrar na conta</button>
            <div className={styles.btnCreate}>
                <Link  to="/Register">Criar uma conta</Link>
                
            </div>
            <div className={styles.forgot}>
                <Link to='/ForgotPass'>Esqueci minha senha</Link>
            </div>
        </form>
    </div>
  )
}

export default MyFormLogin;