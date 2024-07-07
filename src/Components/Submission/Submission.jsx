import React from 'react'
import { Card, CardHeader, Heading, CardBody } from '@chakra-ui/react'
import Chart from 'react-apexcharts'

const Submission = () => {

    const options = {
        grid: {
            show: false,
        },
        chart: {
            type: 'bar',
            toolbar: {
                show: false
            }
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '55%',
                endingShape: 'rounded'
            },
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            show: true,
            width: 2,
            colors: ['transparent']
        },
        xaxis: {
            categories: ['Worksheet 1', 'Assignment', 'Case Study', 'Worksheet 2', 'Worksheet 3'],
        },
        yaxis: {
            title: {
                text: 'Submission Rate (%)'
            }
        },
        fill: {
            opacity: 1
        },
        tooltip: {
            y: {
                formatter: function (val) {
                    return `${val}%`;
                }
            }
        },
        colors: ['#00E396', '#FF4560'],
    };

    const series = [
        {
            name: 'Submitted',
            data: [70, 75, 93, 83, 43]
        },
        {
            name: 'Pending',
            data: [30, 25, 7, 17, 57]
        }
    ];

    return (
        <>
            <Card height={'42vh'} width={'35vw'} backgroundColor={'white'} boxShadow={'xl'} mt={'25px'}>
                <CardHeader>
                    <Heading size='xs' backgroundColor={'#4C00A4'} padding={'7px'} marginTop={'-19.3px'} marginLeft={'-1.2rem'} borderRadius={'3px 3px 0px 0px '} color={'white'} width={'105%'}> Progress Status</Heading>
                </CardHeader>

                <CardBody>
                    <Chart options={options} series={series} type="bar" height={230} />
                </CardBody>
            </Card>
        </>
    )
}

export default Submission;