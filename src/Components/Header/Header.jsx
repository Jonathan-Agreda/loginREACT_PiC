import './Header.css'

import wonkaLogo from '../../assets/WonkaLogo.png'

export const Header = () => {
    return (
        <header className='header' style={{ backgroundColor: 'red' }}>
            <img src={wonkaLogo} alt="WonkaLogo" />
            <div className='register'>
                <button className='register-button'>Register</button>
            </div>
        </header>
    )
}
