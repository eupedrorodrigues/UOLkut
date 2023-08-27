import { useContext, useState } from 'react';
import Icon from '../../../assets/ps_orkut.svg';
import styles from './MyFormLogin.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { MyContext } from '../../../context/UserContext';

const MyFormLogin = () => {
  const navigate = useNavigate();

  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { setUserUid } = useContext(MyContext)!;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, field: string) => {
    const value = e.target.value;

    if (field === 'email') {
      setEmail(value);
      setEmailError(value.trim() === '');
    } else if (field === 'password') {
      setPassword(value);
      setPasswordError(value.trim() === '' && value.length < 6 );
    }
  }

  const AuthLogin = (event: React.SyntheticEvent) => {
    event.preventDefault();
    const auth = getAuth();
    
      signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setUserUid(userCredential.user?.uid)
        console.log(user);
        navigate('/Profile');
      })
      .catch((error) => {
        setEmailError(true);
        setPasswordError(true);
        console.log("Autentição de email e senhas não conferem", error.code, error.message);
      });
      setLoading(false)
  }   

  return (
    <div className={styles.formBox}>
      <img style={{ margin: '10px' }} src={Icon} /> 
      <h2>Acesse o Uolkut</h2>
      <form>
        <div className={styles.inputBox}>
          <input 
            placeholder='Email' 
            type="email"
            value={email}
            className={`${emailError ? styles.emailError : styles.defaultInput}`}
            onChange={(e) => handleInputChange(e, 'email')} 
          />
        </div>
        
        <div className={styles.inputBox}>
          <input 
            placeholder='Senha' 
            type="password"
            value={password} 
            className={`${passwordError ? styles.emailError : styles.defaultInput}`}
            onChange={(e) => handleInputChange(e, 'password')}
          />
        </div>

        <p className={styles.checkboxContainer}>
          <input type="checkbox" name="remember-password" />
          <label htmlFor="remember-password" style={{fontSize: '14px'}}>Lembrar minha senha</label>
        </p>
        <button className={styles.btnLogin} onClick={AuthLogin}>
          {loading ? 'Caregando...' : 'Entrar na conta'}
        </button>

        <div className={styles.btnCreate}>
          <Link to="/Register">Criar uma conta</Link>
        </div>

        <div className={styles.forgot}>
          <Link to='/ForgotPass'>Esqueci minha senha</Link>
        </div>
      </form>
    </div>
  )
}

export default MyFormLogin;
