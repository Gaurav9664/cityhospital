import { styled } from "styled-components";


const BaseButton = styled.button`
border-radius: 50px;
padding: 8px 25px;
white-space: nowrap;
transition: 0.3s;
font-size: 14px;

`;

export const PrimaryButton = styled(BaseButton)`
background: ${props => props.disabled = true ? 'grey' : '#FF6337'};
color: #fff;


&:hover {
    background: ${props => props.disabled = true ? 'grey' : 'blue'};
}

`

export const SecondaryButton = styled(BaseButton)`
background: black;
color: #fff;


&:hover {
    background: red;
}

`

export const OutlineButton = styled(BaseButton)`
background: none;
color: black;
border: 1px solid black;

&:hover {
    background: green;
}
`