import styles from './EditUser.module.css';
import imageUser from "../../assets/User.svg";
import Edit from '../../assets/Mode edit.svg'


const EditUser = () => {
  return (
    <section className={styles.container_profile_user}>
      <div className={styles.container_desc_img_user}>
        <div className={styles.circle_image_user}>
          <img className={styles.image_user} src={imageUser} />
          <img src={Edit} className={styles.EditMet} />
        </div>
      </div>
    </section>
  )
}

export default EditUser