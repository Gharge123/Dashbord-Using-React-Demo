import React, { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faClock, faPercentage } from '@fortawesome/free-solid-svg-icons';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, Title, Tooltip, Legend, LineController, PointElement } from 'chart.js';
import './Performance.css';

// Register Chart.js components
ChartJS.register(LineController, LineElement, PointElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

const Performance = () => {
    const chartRef = useRef(null); // Ref to the canvas element
    const chartInstance = useRef(null); // Ref to the chart instance

    const data = {
        labels: ['01 May', '02 May', '03 May', '04 May', '05 May', '06 May', '07 May'],
        datasets: [
            {
                label: 'This Month',
                data: [7, 6, 8, 7, 9, 10, 12],
                fill: false,
                borderColor: '#4B77BE',
                tension: 0.1,
            },
            {
                label: 'Last Month',
                data: [5, 5, 6, 5, 7, 8, 9],
                fill: false,
                borderColor: '#FF6347',
                tension: 0.1,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            tooltip: {
                callbacks: {
                    label: function(context) {
                        let label = context.dataset.label || '';
                        if (label) {
                            label += ': ';
                        }
                        if (context.parsed.y !== null) {
                            label += `${context.parsed.y}`;
                        }
                        return label;
                    },
                },
            },
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Date',
                },
                grid: {
                    display: false,
                },
            },
            y: {
                title: {
                    display: true,
                    text: 'Values',
                },
                beginAtZero: true,
            },
        },
    };

    useEffect(() => {
        // Cleanup function to destroy the chart instance
        return () => {
            if (chartInstance.current) {
                chartInstance.current.destroy();
            }
        };
    }, []); // Empty dependency array ensures this runs on unmount

    useEffect(() => {
        if (chartRef.current) {
            // Destroy existing chart instance if it exists
            if (chartInstance.current) {
                chartInstance.current.destroy();
            }

            // Create a new chart instance
            chartInstance.current = new ChartJS(chartRef.current.getContext('2d'), {
                type: 'line',
                data,
                options,
            });
        }
    }, [data]); // Recreate the chart if data changes

    return (
        <section className="performance-section">
            <div className="performance-header">
                <div>
                    <h2>Performance</h2>
                    <p>01-07 May</p>
                </div>
                <div className="performance-stats">
                    <p><FontAwesomeIcon icon={faCheckCircle} /> Finished: <span>18</span></p>
                    <p><FontAwesomeIcon icon={faClock} /> Tracked: <span>31h</span></p>
                    <p><FontAwesomeIcon icon={faPercentage} /> Efficiency: <span>93%</span></p>
                </div>
            </div>
            <div className="performance-graph">
                <canvas ref={chartRef} />
            </div>
        </section>
    );
}

export default Performance;
