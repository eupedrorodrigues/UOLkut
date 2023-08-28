import EditProfileInf from "../../components/EditProfileInf/EditProfileInf"
import EditUser from "../../components/EditUserProfile/EditUser"
import { HeaderProfile } from "../../components/Header/HeaderProfile"
import { HeaderRoot } from "../../components/Header/HeaderRoot"
import styles from './EditProfile.module.css'



const EditProfile = () => {
  return (
    <section>
      <HeaderRoot>
        <HeaderProfile />
      </HeaderRoot>
      <section className={styles.wrapperEdit}>
        <EditUser />
        <EditProfileInf />
      </section>
    </section>
  )
}

export default EditProfile