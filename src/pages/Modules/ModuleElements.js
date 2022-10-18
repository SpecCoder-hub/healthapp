import styled from 'styled-components'

export const Main = styled.div `
    width: 100%;
    height: 100vh;
    background: #101012;
    display: flex;
    justify-content: flex-end;
`

export const ModuleCont = styled.div `
    width: 93%;
    height: 100vh;
    background : #101012;
    display : flex;
    justify-content: flex-end;
    align-items : center;
    flex-direction : column;
`

export const ModuleToggle = styled.div `
    width: 26%;
    height: 6vh;
    display: flex;
    column-gap: 14px;
    align-items: center;
    justify-content: flex-start;
    z-index: 111;
`
export const ModuleToggle_WithButton = styled.div `
    width: 100%;
    height: 6vh;
    display: flex;
    column-gap: 14px;
    align-items: center;
    justify-content: flex-start;
    z-index: 111;
    margin-left:80px
`

export const EditCont = styled.div `
    width : 30%;
    height : 100%;
    display : flex;
    justify-content : space-evenly;
    align-items : center;
`

export const EditorButton = styled.button `
    width: 26%;
    height: 4vh;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background: #101012;
    border: 1px solid #dadee3;
    color: #ffff;
    border-radius: 6px;
    font-size: 12px;
    font-family: corbel;
    font-weight: 300;
    transition : 0.3s all ease-in-out;
    cursor : pointer;

    &:hover {
        transition : 0.3s all ease-in-out;
        border: 1px solid #00a99d;
        color: #ffff;
        background: #00a99d;
    }
`
export const ToggleIcon = styled.img `
    width: 24px;
`

export const SwitchNav = styled.button `
    width: 20%;
    height: 6vh;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    border: none;
    background: #00a99d;
    color: #fff;
`
export const SwitchNav_Active = styled.button `
    width: 20%;
    height: 6vh;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    border: none;
    background: #fff;
    color: #00a99d;
`


export const SwitchNav_WithButton = styled.button `
width: 5%;
height: 6vh;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    border: none;
    background: #00a99d;
    color: #fff;
`
export const SwitchNav_WithButtonActive = styled.button `
    width: 5%;
    height: 6vh;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    border: none;
    background: #fff;
    color: #00a99d;
`

export const ModuleAnalytics = styled.div `
    width: 100%;
    height: 82vh;
`
