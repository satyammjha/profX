import React from 'react';
import { Card, CardHeader, CardBody, Heading } from '@chakra-ui/react';
import Chart from 'react-apexcharts';

const Activeness = () => {
    const options = {
        series: [
            {
                name: 'Actual',
                data: [
                    {
                        x: 'Worksheet 1',
                        y: 12,
                        goals: [
                            {
                                name: 'Expected',
                                value: 14,
                                strokeWidth: 2,
                                strokeDashArray: 2,
                                strokeColor: '#775DD0'
                            }
                        ]
                    },
                    {
                        x: 'Worksheet 2',
                        y: 44,
                        goals: [
                            {
                                name: 'Expected',
                                value: 54,
                                strokeWidth: 5,
                                strokeDashArray: 10,
                                strokeColor: '#775DD0'
                            }
                        ]
                    },
                    {
                        x: 'Quiz',
                        y: 54,
                        goals: [
                            {
                                name: 'Expected',
                                value: 52,
                                strokeWidth: 10,
                                strokeDashArray: 0,
                                strokeLineCap: 'round',
                                strokeColor: '#775DD0'
                            }
                        ]
                    },
                    {
                        x: 'Assignment 3',
                        y: 66,
                        goals: [
                            {
                                name: 'Expected',
                                value: 61,
                                strokeWidth: 10,
                                strokeDashArray: 0,
                                strokeLineCap: 'round',
                                strokeColor: '#775DD0'
                            }
                        ]
                    },
                    {
                        x: 'Surprise Test',
                        y: 81,
                        goals: [
                            {
                                name: 'Expected',
                                value: 66,
                                strokeWidth: 10,
                                strokeDashArray: 0,
                                strokeLineCap: 'round',
                                strokeColor: '#775DD0'
                            }
                        ]
                    },
                    
                ]
            }
        ],
        chart: {
            height: 350,
            type: 'bar'
        },
        plotOptions: {
            bar: {
                horizontal: true
            }
        },
        colors: ['#00E396', '#775DD0'],
        dataLabels: {
            formatter: function (val, opt) {
                const goals =
                    opt.w.config.series[opt.seriesIndex].data[opt.dataPointIndex].goals;

                if (goals && goals.length) {
                    return `${val} / ${goals[0].value}`;
                }
                return val;
            }
        },
        legend: {
            show: true,
            showForSingleSeries: true,
            customLegendItems: ['Actual', 'Expected'],
            markers: {
                fillColors: ['#00E396', '#775DD0']
            }
        }
    };

    const series = options.series; // Define the series data here

    return (
        <Card height={'35vh'} width={'37vw'} backgroundColor={'white'} boxShadow={'xl'} mt={'3%'} ml={'0%'} padding={'0px'}>
            <CardHeader padding={'0px'}>
                <Heading size='xs' backgroundColor={'#4C00A4'} padding={'7px'} marginTop={'-19.3px'} borderRadius={'3px 3px 0px 0px '} color={'white'} width={'100%'}>Engagement Ratio</Heading>
            </CardHeader>
            <CardBody marginTop={'-7%'}>
                <Chart options={options} series={series} type="bar" height={250} />
            </CardBody>
        </Card>
    );
}

export default Activeness;
