import styled from "styled-components";

const StyledConfirmButton = styled.button`
    background-color: #32E0C4;
    color: #1e1e1e;
    border-radius: 8px;
    padding: 8px 20px;
    border: none;
    font-size: 1rem;
    cursor: pointer;
    transition: all .3s ease;

    &:hover{
        background-color: #1e1e1e;
        color: #fff;
    }
`;

export default StyledConfirmButton;