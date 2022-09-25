import styled from "styled-components";

export const Container = styled.div`
    background-color: #27282F;
    color: #FFF;
    min-height: 100vh;
`

export const Area = styled.div`
    margin: auto;
    max-width: 980px;
    padding: 30px 0;
`

export const Header = styled.h1`
    text-align: center;
    margin-bottom: 30px;
`

export const ScreenWarning = styled.div`
    text-align: center;
    .emoji {
        font-size: 50px;
        margin-bottom: 20px;
    }
`

export const PhotoList = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
`;


export const UploadForm = styled.form`
    background-color: #3D3F43;
    padding: 15px;
    border-radius: 10px;
    margin-bottom: 10px;

    input[type="submit"] {
        display: inline-block;
        padding: 8px 10px;
        margin-left: 10px;
        background-color: #756DF4;
        border-radius: 3px;
        border: none;
        color: #FFF;
        cursor: pointer;
        font-size: 1rem;
        opacity: 9;
        transition: all ease .3s;

        &:hover {
            opacity: .8;
        }
    }
`;