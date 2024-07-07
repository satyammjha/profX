import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { Box, Card, CardBody, CardHeader, Stack, Heading } from '@chakra-ui/react';

const Trends = () => {
    const chartOptions = {
        chart: {
            type: 'radar',
            height: 5,
        },
        series: [
            {
                name: 'Marks',
                data: [80, 90, 70, 85, 75],
            },
        ],
        xaxis: {
            categories: ['Mid-sem-1', 'Mid-sem-2', 'Mid-sem-3', 'Quiz', 'Surprise Test',],
        },
        yaxis: {
            show: false,
        },
        grid: {
            show: false,
        },
        tooltip: {
            enabled: true,
            y: {
                formatter: function (val) {
                    return `Marks: ${val}`;
                }
            }
        },
        stroke: {
            show: true,
            width: 2,
        },
        fill: {
            opacity: 0.3, 
            colors: ['#4c00a4']
          },
        markers: {
            size: 5,
            hover: {
                size: 7,
            }
        },
    };

    return (
        <Card id="chart" padding={0} position={'absolute'} marginTop={'-8rem'} marginLeft={'1vw'} height={'19rem'} width={'23vw'}>
            <CardHeader padding={0}>
                <Heading size='xs' backgroundColor={'#4C00A4'} padding={'7px'} borderRadius={'3px 3px 0px 0px '} color={'white'}> Student Performance</Heading>
            </CardHeader>
            <Box padding={0}>
                <ReactApexChart options={chartOptions} series={chartOptions.series} type="radar" height={300} />
            </Box>
        </Card>
    );
};

export default Trends;