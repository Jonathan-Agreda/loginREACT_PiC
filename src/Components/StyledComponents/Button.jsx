import stayled from "styled-components";

const Button = stayled.button.attrs(props => ({
    disabled: props.disabled || false
}))`
    background-color: ${({ primary, bgColor = "gray" }) => primary ? bgColor : 'red'};
    color: #5c5a72;
    border: 1px solid #e3d7ff;
    padding: ${({ size }) => {
        switch (size) {
            case 'small':
                return '5px 10px';
            case 'medium':
                return '10px 20px';
            case 'large':
                return '15px 30px';
            default:
                return '10px 25px';
        }
    }};
    border-radius: 10px;
    cursor: pointer;
    margin-left: 40px;
    transition: 0.5s ease-in all;

    &:hover {
     border-radius: 25px;
     border: 1px solid black;
    }
`

export default Button;