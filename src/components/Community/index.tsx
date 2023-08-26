import styles from "./Community.module.css";
import Cars  from '../../assets/images/avatars/Community/Carros.svg';
import Cartoon  from '../../assets/images/avatars/Community/Desenhos.svg';
import Crazy  from '../../assets/images/avatars/Community/Crazy.svg';
import Cute from '../../assets/images/avatars/Community/Fofos.svg';
import Anime  from '../../assets/images/avatars/Community/Animes.svg';
import Reading  from '../../assets/images/avatars/Community/Leitura.svg';
import Egg  from '../../assets/images/avatars/Community/Meu ovo.svg';
import Book  from '../../assets/images/avatars/Community/Book.svg';
import Coffee  from '../../assets/images/avatars/Community/Cafeeee.svg';

export function Community() {

  

  return (
    <section className={styles.categoryContainer}>
      <section className={styles.topicSection}>
        <span className={styles.categoryName}>Comunidade (42)</span>

        <button className={styles.seeAllBtn}>Ver todos</button>
      </section>

      <section className={styles.contentSection}>
            <div className={styles.contentBox}>
              <img className={styles.contentIcon} src={Cars} />
              <p className={styles.contentTitle}>Carros</p>
            </div>
            <div className={styles.contentBox}>
              <img className={styles.contentIcon} src={Cartoon} />
              <p className={styles.contentTitle}>Desenhos</p>
            </div>
            <div className={styles.contentBox}>
              <img className={styles.contentIcon} src={Crazy} />
              <p className={styles.contentTitle}>Crazy</p>
            </div>
            <div className={styles.contentBox}>
              <img className={styles.contentIcon} src={Cute} />
              <p className={styles.contentTitle}>Fofos</p>
            </div>
            <div className={styles.contentBox}>
              <img className={styles.contentIcon} src={Anime} />
              <p className={styles.contentTitle}>Animes</p>
            </div>
            <div className={styles.contentBox}>
              <img className={styles.contentIcon} src={Reading} />
              <p className={styles.contentTitle}>Leitura</p>
            </div>
            <div className={styles.contentBox}>
              <img className={styles.contentIcon} src={Egg} />
              <p className={styles.contentTitle}>Meu ovo</p>
            </div>
            <div className={styles.contentBox}>
              <img className={styles.contentIcon} src={Book} />
              <p className={styles.contentTitle}>My Books</p>
            </div>
            <div className={styles.contentBox}>
              <img className={styles.contentIcon} src={Coffee} />
              <p className={styles.contentTitle}>Cafeeee</p>
            </div>
      </section>
    </section>
  );
}
