import styled from "styled-components";

export const Black = styled.button`
    width: 40px;
    height: 130px;
    background: #000;
    position: absolute;
    margin: 1px;
    margin-left: -20px;
    box-shadow: 2px 5px;

    :active {
        background: #eee;
    }
`;

export const White = styled.button`
    width: 60px;
    height: 200px;
    background: #fff;
    margin: 1px;
    border: 1px solid #000;

    :active {
        background: #333;
    }
`;
