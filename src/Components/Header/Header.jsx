import './Header.css'

import stayled from 'styled-components'

import wonkaLogo from '../../assets/WonkaLogo.png'

const StyledHeader = stayled.header`
    width: 100%;
    padding: 20px;
    background-color: #684fa3;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
`
const StyledImg = stayled.img`
    width: 140px;
    margin-left: 40px;
`

const ButtonRegister = stayled.button.attrs(props => ({
    disabled: props.disabled || false
}))`
    background-color: ${({ primary, bgColor = "gray" }) => primary ? bgColor : 'red'};
    color: #5c5a72;
    border: 1px solid #e3d7ff;
    padding: 10px 20px;
    border-radius: 10px;
    cursor: pointer;
    margin-left: 40px;
    transition: 0.5s ease-in all;
`

export const Header = () => {
    return (
        <StyledHeader>
            <StyledImg src={wonkaLogo} alt="WonkaLogo" />
            <div className='register'>
                <ButtonRegister primary bgColor="yellow" >Register</ButtonRegister>
            </div>
        </StyledHeader>
    )
}
