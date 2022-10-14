// import "./styles.css";
import React from "react";
import {
    ResponsiveContainer,
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
} from "recharts";

import { IoMdArrowDropdown } from "react-icons/io";

const data1 = [
    {
        name: "Page A",
        uv: 3,
        pv: 6,
        amt: 9
    },
    {
        name: "Page A",
        uv: 3.2,
        pv: 6.2,
        amt: 9.2
    },
    {
        name: "Page A",
        uv: 3.4,
        pv: 6.4,
        amt: 9.4
    },
    {
        name: "Page A",
        uv: 3.6,
        pv: 6.6,
        amt: 9.6
    },
    {
        name: "Page A",
        uv: 3.4,
        pv: 6.4,
        amt: 9.4
    },
    {
        name: "Page A",
        uv: 3.6,
        pv: 6.6,
        amt: 9.6
    },
    {
        name: "Page A",
        uv: 3.8,
        pv: 6.8,
        amt: 9.8
    },
    {
        name: "Page A",
        uv: 3.6,
        pv: 6.6,
        amt: 9.6
    },
    {
        name: "Page A",
        uv: 3.4,
        pv: 6.4,
        amt: 9.4
    },
];

const CustomizedDot = (props) => {
    const { cx, cy, value } = props;
    return (
        <svg x={cx} y={cy} width={8} height={8} fill={props.color}>
            <g transform="translate(4 4)">
                <circle r="4" fill={props.color} />
                <circle r="2" fill={props.color} />
            </g>
        </svg>
    );
};


const RespChart1 = () => {
    return (
        <ResponsiveContainer height="95%" width="95%">
            <LineChart data={data1}>
                <Tooltip />
                <Line
                    type="monotone"
                    dataKey="uv"
                    stroke="#00A99D"
                    strokeDasharray="3 3"
                    width={100}

                    dot={<CustomizedDot color="#00A99D"/>}
                />
                <Line type="monotone" strokeDasharray="3 3" dataKey="amt" stroke="#EB6969" dot={<CustomizedDot color="#EB6969"/>}
                />
               
                <Line type="monotone" strokeDasharray="3 3" dataKey="pv" stroke="#8884d8" dot={<CustomizedDot color="#8884d8"/>}
                />
            </LineChart>
        </ResponsiveContainer>
    );
}

export default RespChart1