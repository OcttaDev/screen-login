import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 380px;
    margin: auto;

    .title{
        margin: 16px 16px;
    }
    form{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }
    form > input{
        height: 2rem;
        width: 300px;
        padding: 3px;
        border: 1px solid gray;
        border-radius: 4px;
        margin: inherit 0px 16px;
        font-size: 18px;
    }
    form .btn{
        width: 300px;
        height: 2rem;
        background-color: rgb(0, 0, 255);
        border: none;
        border-radius: 3px;
        color: #fff;
        font-size: 18px;
    }
    .link-to-register{
        margin: 16px 0px;
    }
`