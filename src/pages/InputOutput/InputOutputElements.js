import styled from 'styled-components'

export const Main = styled.div`
    width: 100%;
    height: 100vh;
    background: #101012;
    display: flex;
    justify-content: flex-end;
`
export const ReportCont = styled.div`
    width: 93%;
    height: 100vh;
    background : #101012;
    display : flex;
    justify-content: space-evenly;
    align-items: flex-end;
    flex-direction : row;
`

export const GenerateCont = styled.div`
    width : 58%;
    height : 85vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
`

export const ProcessCont = styled.div`
    width: 90%;
    height: 7vh;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const ProcessContGroup = styled.div`
    width: 22%;
    height: 6vh;
    display: flex;
    background: #393a3f;
    border-radius: 16px;
    border-bottom-right-radius: 35px;
    border-top-right-radius: 35px;
    justify-content: space-between;
    align-items: center;
`

export const IndexCont = styled.div`
    width: 20%;
    height: 100%;
    background: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const IconStyle1 = {
    color: "#fff",
    background: "#101012",
    borderRadius: "10px",
    padding: "3px",
    fontSize: "14px"
}

export const HeadCont = styled.h5`
    margin: 0;
    color: #fff;
    font-family: corbel light;
    font-weight: 500;
    font-size: 12px;
`

export const ProcessIcon = styled.div`
    background: #101012;
    border: 1px solid #101012;
    width: 24%;
    height: 100%;
    display: flex;
    border-radius: 25px;
    align-items: center;
    justify-content: center;
`

export const IconStyle2 = {
    color: "#00a99d",
    borderRadius: "14px",
    padding: "3px",
    fontSize: "22px"
}
export const IconStyle3 = {
    color: "#fff",
    borderRadius: "14px",
    padding: "3px",
    fontSize: "22px"
}

export const SelectionCont = styled.div`
    width: 90%;
    height: 63vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

export const SelectCont = styled.div`
    width: 32%;
    height: 90%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    background: #1e1f24;
    border-radius: 12px;
    
`
export const SelectionContHead = styled.h5`
    width: 85%;
    height: 4vh;
    color: #fff;
    margin: 0;
    font-size: 14px;
    font-family: corbel light;
    font-weight: 200;
`

export const SelectOptionCont = styled.div`
    width: 85%;
    height: 85%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    row-gap: 3px;
`

export const OptionGroup = styled.div`
    width: 100%;
    height: 5vh;
    display: flex;
    background: #393a3f;
    border-radius: 8px;
    justify-content: space-between;
    align-items: center;
`

export const PersonIcon = styled.div`
    width: 20%;
    height: 100%;
    background: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const OptionHead = styled.h5`
    width: 60%;
    color: #fff;
    margin: 0;
    font-size: 11px;
    font-family: corbel light;
    font-weight: 200;
    text-align: center;
`
export const OptionCheck = styled.input`
    width: 20%;
    height: 16px;
    display: flex;
    align-items: center;
    justify-content: center;

`

export const GenerateButtonCont = styled.div`
    width: 95%;
    height: 15vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
`

export const GenerateButtonHead = styled.h5`
    width: 40%;
    height: 2vh;
    color: #fff;
    margin: 0;
    font-size: 16px;
    font-family: corbel light;
    font-weight: 500;
    text-align: center;
`

export const Input_Heading = styled.h3`
    width: 40%;
    height: 2vh;
    color: #fff;
    margin: 0;
    font-size: 16px;
    font-family: corbel light;
    font-weight: 500;
    text-align: center;
`

export const GenerateButton = styled.button`
    width: 40%;
    height: 6vh;
    border-radius: 10px;
    background-color: #00a99d;
    color: #fff;
    font-family: corbel;
    font-size: 18px;
    cursor : pointer;
`


export const ArchiveCont = styled.div`
    width: 30%;
    height: 85vh;
    background-color: #1e1f24;
    border-radius: 15px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`


export const VitalMonitor = styled.div`
    width: 85%;
    height: 4vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const MonitorHead = styled.h5`
    color: #fff;
    margin: 0;
    font-weight: 300;
    font-family: corbel;
`

export const MonitorExt = styled.span`
    color: #00a99d;
    font-size: 16px;
`

export const ArchiveFoldCont = styled.div`
    width: 85%;
    height: 90%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    row-gap : 10px;
    padding-top: 10px;
    overflow-y: hidden;
    scroll-behavior: smooth;
`

export const ReportsFold = styled.div`
    width : 100%;
    height : 4vh;
    display : flex;
    flex-direction : row;
    justify-content: space-between;
    align-items : center;
    background : #393a3f;
    color : #fff;
    border-radius : 5px;
`

export const ReportsFold_Child = styled.div`
    display : flex;
    padding-left:10px;
    padding-right:10px;
    flex-direction : row;
    justify-content: center;
    align-items : center;
`

export const ReportsHead = styled.h5`
    color: #fff;
    font-weight: 300;
    font-family: corbel;
    margin-left:4px;
    margin-right:4px
`
export const FormCont = styled.div`
    width : 100%;
    height : 100%;
    display : flex;
    justify-content: space-evenly;
    align-items : center;
    flex-direction : column;
    background-color : #1e1f24;
    border-radius: 12px;    
    margin-bottom:10px
`

export const FormHead = styled.h5`
    width: 85%;
    height: 4vh;
    color: #fff;
    font-family: corbel light;
    font-weight: 500;
    font-size: 17px;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const FormBodyFields = styled.div`
width:60%;
display: flex;
flex-direction:column;
justify-content: center;
align-items: center;
`
export const OutPutUrlField = styled.div`
width:93%;
display: flex;
flex-direction:column;
justify-content: center;
align-items: center;
`
export const LiveButton = styled.button`
background:#FF7070;
height:18vh;
border:none;
width:11vw;
cursor:pointer;
color:white;
font-size:30px;
border-radius:10px;
display:flex;
flex-direction:column;
justify-content:center;
align-items: center;
`
export const LiveButtonDiv = styled.div`
    width: 30%;
    display: flex;
    flex-wrap: column;
    justify-content: center;
    align-items: center;
    `

export const FormBody = styled.div`
    width: 80%;
    display: flex;
    flex-wrap: column;
    justify-content: space-around;
    align-items: center;

`
export const Em = styled.div`
    display : flex;
    justify-content : center;
    align-items : center;
    margin-right : 5px;
`

export const SvgStyle = {
    height: "60%",
    width: "8%",
    color: "#00A99D",
    background : "#1e1f24"
}

export const FormOption = styled.option`
    background : #1e1f24;
    border-radius : 5px;
    color : #00a99e;
`

export const FormFileButton = styled.button`

    width: 30%;
    height: 6vh;
    border-radius: 8px;
    border: none;
    background : #00a99e;
    color: #fff;
    font-family: corbel light;
    font-weight: 500;
    font-size: 17px;
    transition : 0.3s all ease-in-out;
    cursor : pointer;
    margin-right:10px

    &:hover {
        width: 52%; 
        color : #00a99e;
        background : #2e5252;
        transition : 0.3s all ease-in-out;
        font-weight : 700;
        border : 1px solid #00a99e;
        box-shadow: 0px 2px 11px 0px #326867;
    }
`
export const DownLoadFile=styled.button`
width: 50%;
height: 6vh;
border-radius: 8px;
border: none;
background : #00a99e;
color: #fff;
font-family: corbel light;
font-weight: 500;
font-size: 17px;
transition : 0.3s all ease-in-out;
cursor : pointer;
display: flex;
justify-content:center;
align-items:center;

margin-right:10px;
&:hover {
    width: 52%; 
    color : #00a99e;
    background : #2e5252;
    transition : 0.3s all ease-in-out;
    font-weight : 700;
    border : 1px solid #00a99e;
    box-shadow: 0px 2px 11px 0px #326867;
}

`
export const FormInputDiv = styled.div`
    width: 100%;
    height: 7vh;
    margin: 6px 25px;
    padding: 2px 10px 2px 8px;
    border-radius: 5px;
    background: transparent;
    border: 1px solid #70CFC8;
    display : flex;
    justify-content : space-between;
    color:white;
    align-items : center; 
`


export const FormInput = styled.input`
    width: 100%;
    border: none;
    background: transparent;
    height: 100%;
    text-align: center;
    transition : all ease-in-out 0.3s;
    color : #dadee3;

    &:focus {
        width: 80%;
        outline : none;
        text-align: start;
        transition : all ease-in-out 0.3s;
    }
`