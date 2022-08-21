import styled from "styled-components";

const StyledInput = styled.input`
    height: 32px;
    padding: 0 12px;
    font-size: 1rem;
    outline: none;
    border: none;
    border-radius: 10px;
    border: solid 1px #eee;
    transition: all .3s;
    margin-bottom: 8px;
    &:focus{
        box-shadow: 0 7px 15px -10px #000;
    }
`;

export default StyledInput;