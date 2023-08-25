import { useState } from 'react';
import Icon from '../../../assets/ps_orkut.svg'
import styles from './MyFormLogin.module.css'
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';



const MyFormLogin = () => {

  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const AuthLogin =  () => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
      navigate('/Profile');
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode,errorMessage);
    });
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
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    />
            </div>
            <div className={styles.inputBox}>
                <input 
                    placeholder='Senha' 
                    type="password"
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)}
                    />
            </div>

            <p className={styles.checkboxContainer}>
                <input type="checkbox" name="remember-password" />
                <label htmlFor="remember-password" style={{fontSize: '14px'}}>Lembrar minha senha</label>
            </p>
            <button className={styles.btnLogin} onClick={AuthLogin}>Entrar na conta</button>

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