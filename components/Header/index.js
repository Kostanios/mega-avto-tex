import styles from './styles.module.css';

export default () => {
    return (
    <div className={styles.header}>    
      <div className={styles.container}>
        <p className={styles.name}>Mega Auto Tex</p>
      </div>
      <div className={styles.bottomContainer}>
        <div className={styles.bottom}></div>
        <div className={styles.bottom}></div>
      </div>
      <p className={styles.intro}>quality tires for machinery</p>
    </div>)
}