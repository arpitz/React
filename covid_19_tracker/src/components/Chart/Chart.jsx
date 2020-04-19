import React, { useState, useEffect } from "react";
import { Line, Bar } from 'react-chartjs-2';
import { fetchDailyData } from "../../api";
import styles from './Chart.module.css';

const Chart = () => {

    const [dailyData, setDailyData] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            const data = await fetchDailyData();
            console.log(data);
            setDailyData(data);
        }
        fetchAPI();
    }, [])

    const lineChart = (
        dailyData.length ? (
            <Line
                data = {{
                    labels: dailyData.map(d => d.reportDate),
                    datasets: [{
                        data: dailyData.map(d => d.totalConfirmed),
                        label: 'Infected',
                        borderColor: '#3333ff',
                        fill: true
                    }, {
                        data: dailyData.map(d => d.deaths.total),
                        label: 'Deaths',
                        borderColor: 'red',
                        backgroundColor: 'rgba(255, 0, 0, 0.5)',
                        fill: true
                    }]
                }} />
        ) : null
    )

    return(
        <div>
            { lineChart }
        </div>
    )
}

export default Chart;