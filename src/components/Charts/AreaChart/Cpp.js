import { Scatter } from 'react-chartjs-2';
import "./index.css"
// import datasets here
import { dataA, dataB, dataC } from '../data/datasets';

// configure options of scatter chart
const options = {
    aspectRatio: 1,
    plugins: {
        legend: {
            display: false,
        },
    },
    scales: {
        x: {
            min: 0.4,
            max: 1.4,
            stepSize: 0.1,
            
            grid: {
                color: 'hsl(180deg 1% 37%)',
            },
            ticks: {
                count: 10,
                font:{
                  size:5
                }
            },
        },
        y: {
            min: 0.4,
            max: 1.4,
            stepSize: 0.1,
            grid: {
                color: 'hsl(180deg 1% 37%)',
            },
            ticks: {
                crossAlign: 'far',
                font:{
                  size:5
                }
            },
        },
    },
    elements:{ point : { radius: 1.4 } }
};

// configure data of scatter chart
const data = {
    datasets: [
        {
            label: 'A dataset',
            data: dataA,
            backgroundColor: 'hsl(360deg 78% 70%)',
        },
        {
            label: 'B dataset',
            data: dataB,
            backgroundColor: 'hsl(174deg 92% 35%)',
        },
        {
            label: 'C dataset',
            data: dataC,
            backgroundColor: 'hsl(360deg 78% 70%)',
        },
    ],
};

export default function Chart() {
    return (
        <div className="scatter">
            <Scatter options={options} data={data} />
        </div>
    );
}
