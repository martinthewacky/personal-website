import styles from "./ProfileCard.module.css";

export default function ProfileCard() {
  return (
    <section className={styles.profileSection}>
      <div className={styles.profileCard}>
        <div className={styles.profileCardFlow}>
          <div className={styles.profileCardImageWrapper}></div>
          <div className={styles.profileCardContents}>
            <h1 className={styles.profileName}>Martin Matovu</h1>
            <h2 className={styles.profileHandle}>@mart__mat</h2>
          </div>
        </div>
      </div>
    </section>
  );
}
