import './Header.css'

import wonkaLogo from '../../assets/WonkaLogo.png'

export const Header = () => {
    return (
        <header className='w-full p-5 bg-purple-700 flex flex-row justify-between items-center shadow-md'>
            <img class="w-36 ml-10" src={wonkaLogo} alt="WonkaLogo" />
            <div className='register'>
                <button className='register-button'>Register</button>
            </div>
        </header>
    )
}
