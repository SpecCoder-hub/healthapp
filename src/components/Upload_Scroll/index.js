import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { useStore } from "../../Context/store";

const MaxSlide = 100_000;

export const Flex = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  color: white;
  margin-top: 10px;
`;

const Upload_Scroll = () => {
  const [progress, setProgress] = useState(0);
  const [slide, setSlide] = useState(0);
  const { state, dispatch } = useStore();

  const fileChange = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("file", file);

    axios
      .request({
        method: "POST",
        url: `${process.env.REACT_APP_MAIN_URL}/uploadCSV`,
        data: formData,
        onUploadProgress: (p) => {
          setProgress(Math.floor((p.loaded / p.total) * 100 * 100) / 100);
        },
      })
      .then((data) => {
        slideChange(0);
      });
  };

  const slideChange = (value) => {
    setSlide(value);

    // const el = document.getElementsByClassName("highcharts-reset-zoom");
    // if (el.length > 0) {
    //   for (let i = 0; i < el.length; i++)
    //     el[i].dispatchEvent(new Event("click"));
    // }

    axios
      .request({
        method: "GET",
        url: `${process.env.REACT_APP_MAIN_URL}/get_plot?value=${value}`,
      })
      .then((res) => {
        dispatch({ ecg: res.data, data: res.data.slice(0, 100) });
      });
  };

  useEffect(() => {
    slideChange(0);
  }, []);

  return (
    <Flex>
      <Flex style={{ padding: "0 10px 0 10px", alignItems: "center" }}>
        <input
          type="file"
          name="file"
          id="file"
          onChange={(e) => fileChange(e)}
        />
        {progress > 0 && progress < 100 && (
          <span>Uploading - {progress} %</span>
        )}
        <span>
          Viewing - {Math.floor((slide / MaxSlide) * 100 * 100) / 100} %
        </span>
      </Flex>
      <div style={{ width: "100%", padding: "0 10px 0 10px" }}>
        <input
          type="range"
          min={0}
          max={MaxSlide}
          value={slide}
          id="myRange"
          style={{ width: "100%" }}
          onChange={(e) => slideChange(parseInt(e.target.value))}
        />
      </div>
    </Flex>
  );
};

export default Upload_Scroll;
