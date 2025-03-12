import styles from './Header.module.css'

import wonkaLogo from '../../assets/WonkaLogo.png'

export const Header = () => {
    return (
        <header className={styles.header}>
            <img className={styles.headerImg} src={wonkaLogo} alt="WonkaLogo" />
            <div className={styles.register}>
                <button className={styles.registerButton}>Register</button>
            </div>
        </header>
    )
}
