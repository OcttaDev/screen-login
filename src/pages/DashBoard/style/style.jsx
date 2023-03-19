import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const Header = styled.div`
    height: 40px;
    width: 80%;
    background-color: #000;
    color: white;
    margin: 10px auto;
    border-radius: 10px;
    text-align: center;
    backdrop-filter: blur(2deg);
    h1{
        font-size: 16px;
        margin: 10px;
    }
`