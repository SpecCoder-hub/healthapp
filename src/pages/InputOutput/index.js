import React, { useEffect, useState } from 'react'
import { MdSensors } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import { RiAttachment2 } from 'react-icons/ri'
import SideBar from '../../components/SideBar';
import { TbFileDownload } from "react-icons/tb";
import {

    Input_Heading,
    Main,
    ReportCont,
    ReportsFold_Child,
    FormCont,
    GenerateCont,
    ProcessCont,
    ProcessContGroup,
    IndexCont,
    IconStyle1,
    HeadCont,
    ProcessIcon,
    IconStyle2,
    IconStyle3,
    SelectionCont,
    SelectCont,
    SelectionContHead,
    SelectOptionCont,
    OptionGroup,
    PersonIcon,
    OptionHead,
    OptionCheck,
    GenerateButtonCont,
    GenerateButtonHead,
    GenerateButton,
    ArchiveCont,
    VitalMonitor,
    DownLoadFile,
    MonitorHead,
    MonitorExt,
    ArchiveFoldCont,
    ReportsFold,
    ReportsHead,
    SvgStyle,
    Em,
    FormBody,
    FormInput,
    FormInputDiv,
    FormOption,
    FormBodyFields,
    LiveButton, LiveButtonDiv,
    FormFileButton,
    OutPutUrlField
} from './InputOutputElements'
import { CgArrowsExpandRight } from 'react-icons/cg'
import { BsArrowDownCircleFill } from 'react-icons/bs'
import Cookies from 'js-cookie';
import { HiDocumentDownload } from "react-icons/hi"


const Reports = (props) => {

    const navigate = useNavigate();

    useEffect(() => {
        if (!Cookies.get("accessToken")) {
            console.log("no Token");
            setTimeout(() => {
                navigate("/signin")
            })
        }
    })

    const handleRS = (e) => {
        e.preventDefault()
        props.setModule("Reports")
        navigate('/reports')

    }
    const handleRSaOff = (e) => {
        e.preventDefault()
        props.setModule("Main Module")
        navigate('/')
    }

    const redirect=()=>{
        navigate("/")
    }
    const hiddenFileInput = React.useRef(null);

    const handleClick = event => {
        hiddenFileInput.current.click();
    };
    const handleChange = event => {
        const formData = new FormData();
        formData.append("file", event.target.files[0]);
        axios.post(`${process.env.REACT_APP_MAIN_URL}/uploadfile`, formData)
            .then(data => {
                console.log(data)
            }).catch((err) => {
                console.log(err)
            })
    };

    const handleCSa = (e) => {
        e.preventDefault()
        props.setModule("Cardio Trend Analysis")
        props.setCardioStatea(true)
    }
    const handleCSaOff = (e) => {
        e.preventDefault()
        props.setModule("Cardio Module")
        props.setCardioStatea(false)
    }

    props.setModule("Inputs/Outputs")

    const handleFileUpload = event => {
        console.log(event.target.files[0].name);
    };
    return (
        <>
            <SideBar
                module={props.module}
                CardioStatea={props.CardioStatea}
                handleAna={handleCSa}
                handleCSaOff={handleCSaOff}
                handleRS={handleRS}
                handleRSaOff={handleRSaOff}
            />
            <Main>
                <ReportCont>
                    <GenerateCont>
                        <FormCont>
                            <Input_Heading>Input</Input_Heading>
                            <FormBody>
                                <FormBodyFields>
                                    <FormInputDiv><RiAttachment2 style={SvgStyle} /><FormInput id='user' type="text" placeholder='Input URL' name='username' ></FormInput><Em style={SvgStyle}></Em></FormInputDiv>
                                    <FormInputDiv><RiAttachment2 style={SvgStyle} /><FormInput style={{ display: "none" }}
                                        type="file" placeholder='Upload CSV' name='surname' ref={hiddenFileInput}
                                        onChange={handleChange} ></FormInput>

                                        <FormFileButton onClick={handleClick}>Browse</FormFileButton></FormInputDiv>
                                </FormBodyFields>
                                <LiveButtonDiv onClick={redirect}> 
                                    <LiveButton><MdSensors />Go Live</LiveButton>
                                </LiveButtonDiv>
                            </FormBody>

                        </FormCont>
                        <FormCont>
                            <Input_Heading>Output</Input_Heading>
                            <FormBody>
                                <OutPutUrlField>
                                    <FormInputDiv><RiAttachment2 style={SvgStyle} /><FormInput id='user' type="text" placeholder='Output URL' name='username' ></FormInput><RiAttachment2 style={SvgStyle} /></FormInputDiv>
                                </OutPutUrlField>
                            </FormBody>

                            <DownLoadFile ><TbFileDownload style={{ marginRight: 20 }} />Download File</DownLoadFile>


                        </FormCont>

                    </GenerateCont>

                    <ArchiveCont>
                        <VitalMonitor>
                            <MonitorHead>Past File Downloads</MonitorHead>
                            <MonitorExt><CgArrowsExpandRight /></MonitorExt>
                        </VitalMonitor>
                        <ArchiveFoldCont>
                            <ReportsFold>
                                <ReportsFold_Child>

                                    <HiDocumentDownload style={{ color: "#00a99d" }} />
                                    <ReportsHead>File Name</ReportsHead>
                                </ReportsFold_Child>
                                <ReportsFold_Child>
                                    <ReportsHead>22 Sept 2022</ReportsHead>
                                    <BsArrowDownCircleFill style={{ color: "#00a99d" }} /></ReportsFold_Child>
                            </ReportsFold>
                            <ReportsFold>
                                <ReportsFold_Child>

                                    <HiDocumentDownload style={{ color: "#00a99d" }} />
                                    <ReportsHead>File Name</ReportsHead>
                                </ReportsFold_Child>
                                <ReportsFold_Child>
                                    <ReportsHead>22 Sept 2022</ReportsHead>
                                    <BsArrowDownCircleFill style={{ color: "#00a99d" }} /></ReportsFold_Child>
                            </ReportsFold>
                            <ReportsFold>
                                <ReportsFold_Child>

                                    <HiDocumentDownload style={{ color: "#00a99d" }} />
                                    <ReportsHead>File Name</ReportsHead>
                                </ReportsFold_Child>
                                <ReportsFold_Child>
                                    <ReportsHead>22 Sept 2022</ReportsHead>
                                    <BsArrowDownCircleFill style={{ color: "#00a99d" }} /></ReportsFold_Child>
                            </ReportsFold>
                            <ReportsFold>
                                <ReportsFold_Child>

                                    <HiDocumentDownload style={{ color: "#00a99d" }} />
                                    <ReportsHead>File Name</ReportsHead>
                                </ReportsFold_Child>
                                <ReportsFold_Child>
                                    <ReportsHead>22 Sept 2022</ReportsHead>
                                    <BsArrowDownCircleFill style={{ color: "#00a99d" }} /></ReportsFold_Child>
                            </ReportsFold>
                            <ReportsFold>
                                <ReportsFold_Child>

                                    <HiDocumentDownload style={{ color: "#00a99d" }} />
                                    <ReportsHead>File Name</ReportsHead>
                                </ReportsFold_Child>
                                <ReportsFold_Child>
                                    <ReportsHead>22 Sept 2022</ReportsHead>
                                    <BsArrowDownCircleFill style={{ color: "#00a99d" }} /></ReportsFold_Child>
                            </ReportsFold>
                        </ArchiveFoldCont>
                    </ArchiveCont>
                </ReportCont>
            </Main>
        </>
    )
}

export default Reports;