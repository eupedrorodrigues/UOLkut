import { useState } from 'react';
import styles from './EditProfileInf.module.css';

const EditProfileInf = () => {

  const [relationship, setRelationship] = useState('')
  const civilStatusOptions = [
    'Solteiro',
    'Casado',
    'Divorciado',
    'Namorando',
    'Preocupado'
  ];

  return (
    <section className={styles.profileInfoContainer}>
        <h2>Editar informações</h2>
        <section className={styles.contentBox}>
        <div>
          <div className={styles.inputBox}>
            <input type="text" placeholder='Profissão'/>
          </div>
          <div className={styles.inputBox}>
            <input type="text" placeholder='Nome'/>
          </div>
          <div className={styles.inputBox}>
            <input type="text" placeholder='Cidade'/>
          </div>
          <div className={styles.inputBox}>
            <input type="text" placeholder='País'/>
          </div>
          <div className={styles.inputBox}>
            <input type="text" placeholder='País'/>
          </div>
          <div className={styles.inputBox}>
            <input type="date" />
          </div>
          <div className={styles.inputBox}>
            <input type="password" placeholder='Senha'/>
          </div>
          <div className={styles.inputBox}>
            <input type="password" placeholder='Repetir senha'/>
          </div>
        </div>
        <div className={styles.wrapperSelect}>
          <select value={relationship} onChange={(e) => setRelationship(e.target.value)}>
            <option value="" disabled>Relacionamento</option>
              {civilStatusOptions.map(status => (<option key={status} value={status}>
                    {status}
            </option>
            ))}
          </select>
        </div>
      </section>
      <button className={styles.BtnSalve}>Salvar</button>
    </section>
  )
}

export default EditProfileInf