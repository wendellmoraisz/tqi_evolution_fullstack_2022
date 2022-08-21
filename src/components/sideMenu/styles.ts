import styled from "styled-components";

export const NavContainer = styled.nav`
    width: 200px;
    height: 100vh;
    box-sizing: border-box;
    background-color: #212121;
    color: #fff;
    margin-right: 40px;

    h1 {
        padding: 16px;
    }
`;

export const ListOptions = styled.div`
    margin-top: 40px;

    li {
        padding: 16px;
        list-style: none;
        font-size: 1.2rem;
        transition: all .4s ;

        a {
            color: #fff;
            text-decoration: none;
        }

        &:hover {
            background-color: #32E0C4;

            a {
                color: #1e1e1e;
            }
        }
    }
`;