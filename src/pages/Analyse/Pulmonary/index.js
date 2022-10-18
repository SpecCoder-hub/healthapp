import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import RespChart from "../../../components/Charts/LineChart/RespChart";
import RespChart1 from "../../../components/Charts/LineChart/ResChart1";
import RespChart2 from "../../../components/Charts/LineChart/RespChart2";
import SideBar from "../../../components/SideBar";
import "./index.css";
import {
  Main,
  CAnalyseCont,
  NavigationCont,
  EditCont,
  EditorButton,
  PreviousCont,
  LinksCont,
  GraphicalCont,
  GraphsSection,
  ChartSection,
  Yaxis,
  YHeads,
  ChartCont,
  AbnormalitiesCont,
  ArchiveCont,
  VitalMonitor,
  MonitorHead,
  MonitorExt,
  ArchiveFoldCont,
  ReportsFold,
  ReportsHead,
} from "./PulmonaryElements";
import { AiOutlineSelect } from "react-icons/ai";
import { CgArrowsExpandRight } from "react-icons/cg";
import { BiErrorAlt } from "react-icons/bi";
import {
  BsFillArrowRightCircleFill,
  BsPen,
  BsPlusCircleFill,
} from "react-icons/bs";
import { TbZoomInArea, TbArrowBackUp } from "react-icons/tb";
import Cookies from "js-cookie";
import Scroll from "../../../components/Scroll";

const CardioAnalysis = (props) => {
  const navigate = useNavigate();

  // useEffect(() => {
  //   if (!Cookies.get("accessToken")) {
  //     console.log("no Token");
  //     setTimeout(() => {
  //       navigate("/signin")
  //     })

  //   }
  // })

  const handleRS = (e) => {
    e.preventDefault();
    props.setModule("Reports");
    navigate("/reports");
  };
  const handleRSaOff = (e) => {
    e.preventDefault();
    props.setModule("Main Module");
    navigate("/");
  };

  const handleCSa = (e) => {
    e.preventDefault();
    props.setModule("Cardio Trend Analysis");
    props.setCardioStatea(true);
  };
  const handleCSaOff = (e) => {
    e.preventDefault();
    props.setModule("Cardio Module");
    props.setCardioStatea(false);
  };

  const handleHrv = () => {
    navigate("/hrvanalyse");
  };

  const handlePCP = () => {
    navigate("/pcpanalyse");
  };

  const goBack = (e) => {
    e.preventDefault();

    window.history.back();
    props.setModule("Cardio Module");
  };

  props.setModule("Pulmonary Module");
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
        <CAnalyseCont>
          <NavigationCont>
            <EditCont>
              <EditorButton>
                <AiOutlineSelect />
                Select
              </EditorButton>
              <EditorButton>
                <BsPen />
                Annotation
              </EditorButton>
              <EditorButton>
                <TbZoomInArea />
                Zoom
              </EditorButton>
            </EditCont>
            <PreviousCont>
              <EditorButton onClick={goBack}>
                <TbArrowBackUp />
                Previous Page
              </EditorButton>
            </PreviousCont>
            <LinksCont>
              <EditorButton onClick={handleHrv}>
                <BsPlusCircleFill />
                Add to report
              </EditorButton>
            </LinksCont>
          </NavigationCont>
          <GraphicalCont>
            <GraphsSection>
              <div className="main-lines">
                <div
                  style={{
                    width: 100,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-around",
                  }}
                >
                  <MonitorHead>Epochs</MonitorHead>
                  <MonitorHead>Resp Skip</MonitorHead>
                </div>
                <div>
                  <div className="sub-lines">
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                  </div>
                  <div className="line4"></div>
                  <div className="line5"></div>
                </div>
              </div>
              <ChartSection>
                <Yaxis>
                  <YHeads>8</YHeads>
                  <YHeads>7</YHeads>
                  <YHeads>6</YHeads>
                  <YHeads>5</YHeads>
                  <YHeads>4</YHeads>
                  <YHeads>3</YHeads>
                </Yaxis>
                <ChartCont>
                  <RespChart />
                </ChartCont>
              </ChartSection>
              <ChartSection>
                <Yaxis>
                  <YHeads>8</YHeads>
                  <YHeads>7</YHeads>
                  <YHeads>6</YHeads>
                  <YHeads>5</YHeads>
                  <YHeads>4</YHeads>
                  <YHeads>3</YHeads>
                </Yaxis>
                <ChartCont>
                  <RespChart1 />
                </ChartCont>
              </ChartSection>
              <ChartSection>
                <Yaxis>
                  <YHeads>8</YHeads>
                  <YHeads>7</YHeads>
                  <YHeads>6</YHeads>
                  <YHeads>5</YHeads>
                  <YHeads>4</YHeads>
                  <YHeads>3</YHeads>
                </Yaxis>
                <ChartCont>
                  <RespChart2 />
                </ChartCont>
              </ChartSection>
            </GraphsSection>
            <AbnormalitiesCont>
              <ArchiveCont>
                <VitalMonitor>
                  <MonitorHead>Abnormalities</MonitorHead>
                  <MonitorExt>
                    <CgArrowsExpandRight />
                  </MonitorExt>
                </VitalMonitor>
                <ArchiveFoldCont>
                  <ReportsFold>
                    <BiErrorAlt style={{ color: "#eb6969" }} />
                    <ReportsHead>Name of abnormalities</ReportsHead>
                    <BsFillArrowRightCircleFill style={{ color: "#eb6969" }} />
                  </ReportsFold>
                  <ReportsFold>
                    <BiErrorAlt style={{ color: "#eb6969" }} />
                    <ReportsHead>Name of abnormalities</ReportsHead>
                    <BsFillArrowRightCircleFill style={{ color: "#eb6969" }} />
                  </ReportsFold>
                  <ReportsFold>
                    <BiErrorAlt style={{ color: "#eb6969" }} />
                    <ReportsHead>Name of abnormalities</ReportsHead>
                    <BsFillArrowRightCircleFill style={{ color: "#eb6969" }} />
                  </ReportsFold>
                  <ReportsFold>
                    <BiErrorAlt style={{ color: "#eb6969" }} />
                    <ReportsHead>Name of abnormalities</ReportsHead>
                    <BsFillArrowRightCircleFill style={{ color: "#eb6969" }} />
                  </ReportsFold>
                  <ReportsFold>
                    <BiErrorAlt style={{ color: "#eb6969" }} />
                    <ReportsHead>Name of abnormalities</ReportsHead>
                    <BsFillArrowRightCircleFill style={{ color: "#eb6969" }} />
                  </ReportsFold>
                  <ReportsFold>
                    <BiErrorAlt style={{ color: "#eb6969" }} />
                    <ReportsHead>Name of abnormalities</ReportsHead>
                    <BsFillArrowRightCircleFill style={{ color: "#eb6969" }} />
                  </ReportsFold>
                  <ReportsFold>
                    <BiErrorAlt style={{ color: "#eb6969" }} />
                    <ReportsHead>Name of abnormalities</ReportsHead>
                    <BsFillArrowRightCircleFill style={{ color: "#eb6969" }} />
                  </ReportsFold>
                </ArchiveFoldCont>
              </ArchiveCont>
            </AbnormalitiesCont>
          </GraphicalCont>
        </CAnalyseCont>
      </Main>
    </>
  );
};

export default CardioAnalysis;
