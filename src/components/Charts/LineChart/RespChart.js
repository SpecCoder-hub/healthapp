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

const data = [
    {
        name: "Page A",
        uv: 5
    },
    {
        name: "Page B",
        uv: 1
    },
    {
        name: "Page A",
        uv: 7
    },
    {
        name: "Page B",
        uv: 6.5
    }, {
        name: "Page A",
        uv: 2
    },
    {
        name: "Page B",
        uv: 1
    },
    {
        name: "Page A",
        uv: 6
    },
    {
        name: "Page B",
        uv: 1
    },
    {
        name: "Page A",
        uv: 7
    },
    {
        name: "Page B",
        uv: 6.5
    }, {
        name: "Page A",
        uv: 2
    },
    {
        name: "Page B",
        uv: 1
    },
    {
        name: "Page A",
        uv: 6
    },
    {
        name: "Page B",
        uv: 1
    },
    {
        name: "Page A",
        uv: 7
    },
    {
        name: "Page B",
        uv: 6.5
    }, {
        name: "Page A",
        uv: 2
    },
    {
        name: "Page B",
        uv: 1
    },
    {
        name: "Page A",
        uv: 6
    },
    {
        name: "Page B",
        uv: 1
    },
    {
        name: "Page A",
        uv: 7
    },
    {
        name: "Page B",
        uv: 6.5
    }, {
        name: "Page A",
        uv: 2.2
    },
    {
        name: "Page B",
        uv: 8
    },
];
const CustomizedDot = (props) => {
    const { cx, cy, value } = props;
    if (value == 1 || value == 7 || value == 6 || value == 2.2) {
        return (
            <svg x={cx - 4} y={cy - 4} width={5} height={5} fill="#EB6969">
                <g transform="translate(4 4)">
                    <circle r="4" fill="#EB6969" />
                    <circle r="2" fill="#EB6969" />
                </g>
            </svg>
        );
    }

    return null;
};


const RespChart = () => {
    return (
        <ResponsiveContainer height="100%" width="100%">
            <LineChart
                data={data}
            >
                <Tooltip />
                <Line
                    type="monotone"
                    dataKey="uv"
                    stroke="#00A99D"
                    width={100}
                    dot={<CustomizedDot />}
                />
            </LineChart>
        </ResponsiveContainer>
    );
}

export default RespChart