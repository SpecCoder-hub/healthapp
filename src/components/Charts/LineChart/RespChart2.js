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


const data1 = [
    {
        name: "Page A",
        pv: 7,
    },
    {
        name: "Page A",
        pv: 3.2,
    },
    {
        name: "Page A",
        pv: 3.4,
    },
    {
        name: "Page A",
        pv: 3.2,

    },
    {
        name: "Page A",
        pv: 3.4,
    },
    {
        name: "Page A",
        pv: 3.6,
    },
    {
        name: "Page A",
        pv: 3.2,

    },
    {
        name: "Page A",
        pv: 3.6,

    },
    {
        name: "Page A",
        pv: 3,

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
               
                <Line type="monotone" strokeDasharray="3 3" dataKey="pv" stroke="#8884d8" dot={<CustomizedDot color="#8884d8"/>}
                />
            </LineChart>
        </ResponsiveContainer>
    );
}

export default RespChart1