import React from 'react';
import Chart from 'chart.js/auto';
import { Line } from 'react-chartjs-2';

function MyChart(props) {
    let data = {
        labels: ['7-8', '8-9', '9-10', '10-11', '11-12', '17-18', '18-19', '19-20'],
        datasets: [
            {
                type: 'bar',
                label: '탑승인원',
                backgroundColor: 'rgb(255, 99, 132)',
                data: [1, 2, 10],
                borderColor: 'red',
                borderWidth: 2,
            },
            {
                type: 'line',
                label: '하차인원',
                backgroundColor: 'rgb(75, 192, 192)',
                data: [1, 53, 2],
            },
        ],
    };



    return (
        <div>
            <Line type="line" data={props.data} options={props.options} height='80%' />
        </div>
    );
}

export default MyChart;