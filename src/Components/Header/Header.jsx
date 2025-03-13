import stayled from 'styled-components'

import Button from '../StyledComponents/Button'

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

    & img {
     width: 140px;
     margin-left: 40px;
    }
`

export const Header = () => {
    return (
        <StyledHeader>
            <img src={wonkaLogo} alt="WonkaLogo" />
            <div className='register'>
                <Button primary bgColor="yellow" size="large" >Register</Button>
            </div>
        </StyledHeader>
    )
}
