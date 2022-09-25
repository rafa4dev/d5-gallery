import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    background-color: #3D3F43;
    padding: 10px;
    border-radius: 10px;

    img {
        max-width: 100%;
        display: block;
        margin-bottom: 10px;
        border-radius: 10px;
    }
`;

export const DeleteButtonFile = styled.button`
    position: absolute;
    padding: 3px;
    background-color: #FFF;
    box-shadow: 0 0 5px #000;
    cursor: pointer;
    border-radius: 5px;
    border: 0;
    bottom: 50%;
    right: calc(50% - 9px);
`