import styled from "styled-components";

export const TagLine = styled.h1`
    color: white;
`

export const Col = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 2vmax;
`

export const CommonContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 100vw;
    height: 100vh;
    justify-content: center;
    z-index: 1000;
`
export const TagLinePg = styled.h2`
    color: white;
    width: 60vw;
    font-size: 1.1vmax;
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
`

export const QuickContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    z-index: 1000;
`

export const QuickContainerRow = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    text-align: center;
    z-index: 1000;
`

export const ClickBox = styled.div`
    width: 5vmax;
    height: 7.5vmax;
    background-size: 95%;
    background-repeat: no-repeat;

    &:hover{
        width: 6vmax;
        height: 8.3vmax;
    }
`

export const QuickFree = styled.div`
    display: flex;
`