import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SideBar from "../../../components/SideBar";
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
  ChartCont1,
  AbnormalitiesCont,
  HRVGraphCont,
  ChartContL,
  HRVReportCont,
  VitalMonitor,
  MonitorHead,
  MonitorExt,
  HRVReportLeft,
  HRVGeneral,
  HRVHead,
  DetailBody,
  Head,
  Value,
  HRVDomain,
  HRVReportRight,
  HRVTableReport,
  DetailBody1,
  DetailBodyD,
} from "../../../pages/Analyse/HRVAnalysis/HRVAnalysisElements";
import CppChart2 from "../../../components/Charts/AreaChart/Cpp2";
import CppChart from "../../../components/Charts/AreaChart/Cpp";
import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";

import {
  StatCont,
  SystemCont,
  DiagramCont,
  Diagram,
  ECGCont,
  GroupButtons,
  OptionButton,
  GraphCont,
  GraphTitle,
  // Title,
  ModelCont,
  ModelImg,
  ReportsCont,
  MonitorCont,
  // VitalMonitor,
  // MonitorHead,
  // MonitorExt,
  MonitorChart,
  ChartHead,
  HeadSpan,
  ArchiveCont,
  ArchiveFoldCont,
  ReportsFold,
  ReportsHead,
} from "./CardioModuleElements";
import { AiOutlineSelect } from "react-icons/ai";
import { CgArrowsExpandRight } from "react-icons/cg";
import { BiErrorAlt } from "react-icons/bi";
import { BsFillArrowRightCircleFill, BsPen } from "react-icons/bs";
import { TbZoomInArea, TbArrowBackUp } from "react-icons/tb";
import Grid2 from "../../../components/Charts/Images/Grid2.png";
import RRChart from "../../../components/Charts/ScatterChart/RR";
import IntervalNumber from "../../../components/Charts/BarChart/IntervalNumber";
import HRVRr from "../../../components/Charts/BarChart/HRVRR";
import ECGChart from "../../../components/Charts/LineChart/Ecg";
import Cookies from "js-cookie";
import Upload_Scroll from "../../../components/Upload_Scroll";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const HRVAnalysis = (props) => {
  const navigate = useNavigate();

  const [trend, setTrend] = useState(true);

  useEffect(() => {
    if (!Cookies.get("accessToken")) {
      console.log("no Token");
      setTimeout(() => {
        navigate("/signin");
      });
    }
  });

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

  const goBack = (e) => {
    e.preventDefault();
    window.history.back();
  };
  const lines = [1, 2, 3];

  props.setModule("Cardio Pointcare Plots");
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
          <Upload_Scroll />
          <NavigationCont>
            <EditCont>
              <EditorButton onClick={goBack}>
                <TbArrowBackUp />
                Back
              </EditorButton>
            </EditCont>
            <PreviousCont></PreviousCont>
          </NavigationCont>
          <GraphicalCont>
            <StatCont>
              <SystemCont>
                <VitalMonitor>
                  <MonitorHead>Plot Heading</MonitorHead>
                  <MonitorHead>Hour 1</MonitorHead>
                </VitalMonitor>
                <DiagramCont>
                  <CppChart />
                </DiagramCont>
              </SystemCont>
              <SystemCont>
                <VitalMonitor>
                  <MonitorHead>Plot Heading</MonitorHead>
                  <MonitorHead>Hour 1</MonitorHead>
                </VitalMonitor>
                <DiagramCont>
                  <CppChart />
                </DiagramCont>
              </SystemCont>
              <SystemCont>
                <VitalMonitor>
                  <MonitorHead>Plot Heading</MonitorHead>
                  <MonitorHead>Hour 1</MonitorHead>
                </VitalMonitor>
                <DiagramCont>
                  <CppChart />
                </DiagramCont>
              </SystemCont>
              <SystemCont>
                <VitalMonitor>
                  <MonitorHead>Plot Heading</MonitorHead>
                  <MonitorHead>Hour 1</MonitorHead>
                </VitalMonitor>
                <DiagramCont>
                  <CppChart />
                </DiagramCont>
              </SystemCont>
              <SystemCont>
                <VitalMonitor>
                  <MonitorHead>Plot Heading</MonitorHead>
                  <MonitorHead>Hour 1</MonitorHead>
                </VitalMonitor>
                <DiagramCont>
                  <CppChart />
                </DiagramCont>
              </SystemCont>
              <SystemCont>
                <VitalMonitor>
                  <MonitorHead>Plot Heading</MonitorHead>
                  <MonitorHead>Hour 1</MonitorHead>
                </VitalMonitor>
                <DiagramCont>
                  <CppChart />
                </DiagramCont>
              </SystemCont>
              <SystemCont>
                <VitalMonitor>
                  <MonitorHead>Plot Heading</MonitorHead>
                  <MonitorHead>Hour 1</MonitorHead>
                </VitalMonitor>
                <DiagramCont>
                  <CppChart />
                </DiagramCont>
              </SystemCont>
              <SystemCont>
                <VitalMonitor>
                  <MonitorHead>Plot Heading</MonitorHead>
                  <MonitorHead>Hour 1</MonitorHead>
                </VitalMonitor>
                <DiagramCont>
                  <CppChart />
                </DiagramCont>
              </SystemCont>
              <SystemCont>
                <VitalMonitor>
                  <MonitorHead>Plot Heading</MonitorHead>
                  <MonitorHead>Hour 1</MonitorHead>
                </VitalMonitor>
                <DiagramCont>
                  <CppChart />
                </DiagramCont>
              </SystemCont>
              <SystemCont>
                <VitalMonitor>
                  <MonitorHead>Plot Heading</MonitorHead>
                  <MonitorHead>Hour 1</MonitorHead>
                </VitalMonitor>
                <DiagramCont>
                  <CppChart />
                </DiagramCont>
              </SystemCont>
              <SystemCont>
                <VitalMonitor>
                  <MonitorHead>Plot Heading</MonitorHead>
                  <MonitorHead>Hour 1</MonitorHead>
                </VitalMonitor>
                <DiagramCont>
                  <CppChart />
                </DiagramCont>
              </SystemCont>
              <SystemCont>
                <VitalMonitor>
                  <MonitorHead>Plot Heading</MonitorHead>
                  <MonitorHead>Hour 1</MonitorHead>
                </VitalMonitor>
                <DiagramCont>
                  <CppChart />
                </DiagramCont>
              </SystemCont>
            </StatCont>

            <ReportsCont>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                  height: "100%",
                  gap: "50px"
                }}
              >
                {/* <div className="lines-div" />
                <div className="line-ticks">
                  {[100, 101, 102, 103, 104, 105, 106, 107, 108].map((num) => (
                    <span key={num}>{num}</span>
                  ))}
                </div> */}
                {lines.map((num) => (
                  <CppChart2 />
                ))}
                {/* <div className="line-ticks">
                  {[100, 101, 102, 103, 104, 105, 106, 107, 108].map((num) => (
                    <span key={num}>{num}</span>
                  ))}
                </div> */}
              </div>
            </ReportsCont>
          </GraphicalCont>
        </CAnalyseCont>
      </Main>
    </>
  );
};

export default HRVAnalysis;
