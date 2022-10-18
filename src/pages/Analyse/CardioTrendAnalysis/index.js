import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
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
} from "./CardioAnalysisElements";
import { AiOutlineSelect } from "react-icons/ai";
import { CgArrowsExpandRight } from "react-icons/cg";
import { BiErrorAlt } from "react-icons/bi";
import { BsFillArrowRightCircleFill, BsPen } from "react-icons/bs";
import { TbZoomInArea, TbArrowBackUp } from "react-icons/tb";
import Cookies from "js-cookie";
import { AiOutlineCaretDown } from "react-icons/ai";

import { MdOutlineDelete } from "react-icons/md";
import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Filler,
  Tooltip,
} from "chart.js";
import Bottom from "../../../components/Charts/CTA/Bottom";
import EmptyChart from "../../../components/Charts/CTA/EmptyChart";
import { LineChart } from "../../../components/Charts/CTA/LineChart";
import {
  FaArrowAltCircleLeft,
  FaArrowAltCircleRight,
  FaMinusCircle,
  FaPlusCircle,
} from "react-icons/fa";
import Scroll from "../../../components/Scroll";

// basic configuration of chart js and combine with react-chartjs-2
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const CardioAnalysis = (props) => {
  const navigate = useNavigate();

  const [trend, setTrend] = useState(false);

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

  props.setModule("Cardio Trend Analyse");
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
          <Scroll />
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
              <EditorButton onClick={handleHrv}>Trend Analysis</EditorButton>
              <EditorButton onClick={handlePCP}>PointCare Plots</EditorButton>
              <EditorButton>Predictive Analysis</EditorButton>
            </LinksCont>
          </NavigationCont>
          <GraphicalCont>
            <GraphsSection>
              <div className="container">
                <div className="top-lines" style={{ gap: "50px" }}>
                  {[1, 2].map((num) => (
                    <LineChart key={num} count={num} />
                  ))}
                </div>
              </div>
            </GraphsSection>
            <AbnormalitiesCont>
              <div className="container">
                <div className="bottom-lines">
                  <div className="bottom-buttons-div">
                    <div className="bottom-buttons-subdiv">
                      <button className="bottom-buttons-button">
                        Class 1 <AiOutlineCaretDown />
                      </button>
                      <button className="bottom-buttons-button">
                        Merge <AiOutlineCaretDown />
                      </button>
                    </div>
                    <div className="bottom-buttons-subdiv">
                      <button className="bottom-buttons-button">
                        Normal <AiOutlineCaretDown />
                      </button>
                      <button className="bottom-buttons-button">
                        Change Type <AiOutlineCaretDown />
                      </button>
                    </div>
                    <div className="bottom-buttons-subdiv">
                      <button className="bottom-buttons-button">
                        Default <AiOutlineCaretDown />
                      </button>
                      <button className="bottom-buttons-buttons">
                        <FaArrowAltCircleLeft /> <FaArrowAltCircleRight />{" "}
                        <FaMinusCircle /> <FaPlusCircle />
                      </button>
                    </div>
                    <div className="bottom-buttons-subdiv">
                      <button className="bottom-delete-buttons">
                        Delete <MdOutlineDelete />
                      </button>
                      <button className="bottom-buttons-button">
                        Reset selection
                      </button>
                    </div>{" "}
                  </div>
                  <EmptyChart />
                  {[1, 2, 3, 4, 5, 6].map((num) => (
                    <Bottom key={num} />
                  ))}
                </div>
              </div>
            </AbnormalitiesCont>
          </GraphicalCont>
        </CAnalyseCont>
      </Main>
    </>
  );
};

export default CardioAnalysis;
