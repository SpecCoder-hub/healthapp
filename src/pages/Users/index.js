import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import SideBar from "../../components/SideBar";
import { ImDroplet } from "react-icons/im";

import {
  UserDetailCont,
  Main,
  ReportCont,
  ProfilePic,
  ProfileImg,
  ProfileId,
  ProfileName,
  ProfileHead,
  GenerateCont,
  Header,
  Body,
  CountA,
  CountB,
  CountC,
  CountD,
  CountNameA,
  CountNameB,
  CountNameC,
  CountNameD,
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
  MonitorHead,
  MonitorExt,
  ArchiveFoldCont,
  ReportsFold,
  ReportsHead,
  StatsCont,
} from "./UserElements";
import { RiNumber1, RiNumber2, RiNumber3, RiNumber4 } from "react-icons/ri";
import { AiOutlineFolderOpen } from "react-icons/ai";
import { CgArrowsExpandRight } from "react-icons/cg";
import {
  BsFillArrowRightCircleFill,
  BsCheckCircleFill,
  BsPersonCircle,
} from "react-icons/bs";
import Cookies from "js-cookie";
import Photo from "../../Auth/Images/Photo.png";
import { FaHeartbeat } from "react-icons/fa";
import { RiLungsLine } from "react-icons/ri";
import { SiOxygen } from "react-icons/si";

const Users = (props) => {
  const navigate = useNavigate();
  const [patients, setPatients] = useState([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 7, 8, 9,
  ]);

  useEffect(() => {
    if (!Cookies.get("accessToken")) {
      console.log("no Token");
      setTimeout(() => {
        navigate("/signin");
      });
    }
  });
  const getPatients = () => {
    axios.get(`${process.env.REACT_APP_MAIN_URL}/getusers`).then((res) => {
      setPatients(res.data);
    });
  };
  useEffect(() => {
    getPatients();
  }, []);

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

  props.setModule("View Users");

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
            {patients?.map((res) => {
              return (
                <UserDetailCont>
                  <Header>
                    <ProfilePic>
                      <ProfileImg src={Photo}></ProfileImg>
                    </ProfilePic>
                    <ProfileHead>
                      <ProfileName>{res?.username}</ProfileName>
                      <ProfileId>{"2 Files"}</ProfileId>
                    </ProfileHead>
                  </Header>
                  <Body>
                    <StatsCont>
                      <ImDroplet style={{ color: "#703738" }} />
                      <CountA>130 / 80</CountA>
                      <CountNameA>BP</CountNameA>
                    </StatsCont>
                    <StatsCont>
                      <RiLungsLine style={{ color: "#056EA9" }} />
                      <CountB>21 bpm</CountB>
                      <CountNameB>Respiration</CountNameB>
                    </StatsCont>
                    <StatsCont>
                      <SiOxygen style={{ color: "#46CB66" }} />
                      <CountC>98%</CountC>
                      <CountNameC>Sp02</CountNameC>
                    </StatsCont>
                    <StatsCont>
                      <FaHeartbeat style={{ color: "#B65353" }} />
                      <CountD>80 bpm</CountD>
                      <CountNameD>HR</CountNameD>
                    </StatsCont>
                  </Body>
                </UserDetailCont>
              );
            })}
          </GenerateCont>
        </ReportCont>
      </Main>
    </>
  );
};

export default Users;
