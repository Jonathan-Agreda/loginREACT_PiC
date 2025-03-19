import wonkaLogo from '../../assets/WonkaLogo.png'

export const Header = () => {
    return (
        <header className='w-full p-5 bg-wonkaPurple dark:bg-gray-800 flex flex-row justify-between items-center shadow-md'>
            <img
                src={wonkaLogo}
                alt='WonkaLogo'
                className='w-[140px] sm:w-[50px] md:w-[100px] ml-10'
            />
            <div>
                <button className='buttonApp transition-all ease-in 
        duration-500 hover:rounded-[25px] hover:border-black'>
                    Register
                </button>
            </div>
        </header>
    )
}
