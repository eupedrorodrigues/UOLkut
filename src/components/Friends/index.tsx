import styles from "./Friends.module.css";
import Fernando from '../../assets/images/avatars/friends/Fenando.svg'
import Ana from '../../assets/images/avatars/friends/Ana.svg'
import Carlos from '../../assets/images/avatars/friends/Carlos.svg'
import Vitor from '../../assets/images/avatars/friends/Vitort.svg'
import Matheus from '../../assets/images/avatars/friends/Matheus.svg'
import Ramos from '../../assets/images/avatars/friends/Ramos.svg'
import Eji from '../../assets/images/avatars/friends/Eji.svg'
import Julia from '../../assets/images/avatars/friends/Julia.svg'
import Carol from '../../assets/images/avatars/friends/Carol.svg'



export function Friends() {
  return (
    <section className={styles.categoryContainer}>
      <section className={styles.topicSection}>
        <span className={styles.categoryName}>Amigos (248)</span>

        <button className={styles.seeAllBtn}>Ver todos</button>
      </section>

      <section className={styles.contentSection}>
            <div className={styles.contentBox}>
              <img className={styles.contentIcon} src={Fernando} />
              <p className={styles.contentTitle}>Fernando</p>
            </div>
            <div className={styles.contentBox}>
              <img className={styles.contentIcon} src={Ana} />
              <p className={styles.contentTitle}>Ana</p>
            </div>
            <div className={styles.contentBox}>
              <img className={styles.contentIcon} src={Carlos} />
              <p className={styles.contentTitle}>Carlos</p>
            </div>
            <div className={styles.contentBox}>
              <img className={styles.contentIcon} src={Vitor} />
              <p className={styles.contentTitle}>Vitor</p>
            </div>
            <div className={styles.contentBox}>
              <img className={styles.contentIcon} src={Matheus} />
              <p className={styles.contentTitle}>Matheus</p>
            </div>
            <div className={styles.contentBox}>
              <img className={styles.contentIcon} src={Ramos} />
              <p className={styles.contentTitle}>Ramos</p>
            </div>
            <div className={styles.contentBox}>
              <img className={styles.contentIcon} src={Eji} />
              <p className={styles.contentTitle}>Eiji</p>
            </div>
            <div className={styles.contentBox}>
              <img className={styles.contentIcon} src={Julia} />
              <p className={styles.contentTitle}>Julia</p>
            </div>
            <div className={styles.contentBox}>
              <img className={styles.contentIcon} src={Carol} />
              <p className={styles.contentTitle}>Carol</p>
            </div>
      </section>
    </section>
  );
}
