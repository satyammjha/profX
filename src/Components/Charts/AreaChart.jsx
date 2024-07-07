import React from 'react';
import ReactApexChart from 'react-apexcharts';

class ApexChart extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            series: [{
                name: 'Section A',
                data: [77, 67, 88, 51, 78, 82, 77]
            }, {
                name: 'Section B',
                data: [88, 88, 94, 44, 66, 87, 89]
            },
            {
                name: 'Section C',
                data: [97, 55, 95, 36, 72, 52, 83]
            },
            ],
            options: {
                chart: {
                    height: 350,
                    type: 'area'
                },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    curve: 'smooth'
                },
                xaxis: {
                    type: 'Section',
                    categories: ["Section A", "Section B", "Section C", "Section D", "Section F", "Section G", "Section H"]
                },
                tooltip: {
                    x: {
                        format: 'dd/MM/yy HH:mm'
                    },
                },
                grid: {
                    show: false, // Hide the background lines
                },
            },
        };
    }

    render() {
        return (
            <div id="chart">
                <ReactApexChart options={this.state.options} series={this.state.series} type="area" height={this.props.height} />
            </div>
        );
    }
}

export default ApexChart;
