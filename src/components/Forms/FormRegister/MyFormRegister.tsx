import Icon from '../../../assets/ps_orkut.svg'
import InputEP from '../Email&Pass/InputEP';
import styles from './MyFormRegister.module.css';

type Props = {}

const MyFormRegister = (props: Props) => {
  return (
    <div>
        <div className={styles.formBox}>
            <img style={{margin: '10px', paddingTop: '20px'}} src={Icon} alt="" /> 
            <h2>Acesse o Orkut</h2>
        <form>
            <InputEP />
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
            <button className={styles.btnLogin}>Criar conta</button>
        </form>
    </div>
    </div>
  )
}

export default MyFormRegister