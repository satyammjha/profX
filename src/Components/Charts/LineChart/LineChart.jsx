import React, { useState }from 'react'
import { Stack, VStack, Card, Select, CardHeader, Heading } from '@chakra-ui/react';
import ReactApexChart from 'react-apexcharts';

const LineChart = () => {


    const [section, setSection] = useState('overall');
    const chartData = {
        options: {
            grid: {
                show: false,
            },
        },
        series: [
            {
                name: 'Section A',
                data: [30, 40, 45, 50, 49],
            },
            {
                name: 'Section B',
                data: [25, 35, 40, 45, 50],
            },
        ],
    };

    const handleSectionChange = (event) => {
        const selectedSection = event.target.value;
        setSection(selectedSection);
    };

    const getSeriesData = () => {
        switch (section) {
            case 'sectionA':
                return [chartData.series[0]];
            case 'sectionB':
                return [chartData.series[1]];
            default:
                return chartData.series;
        }
    };


    return (
        <>
            <Card bgColor={'white'} shadow={'xl'} height={'43vh'} width={'40vw'} ml={'10%'} mt={'1%'} p={4}>
                <CardHeader padding={0}>
                    <Heading size='xs' backgroundColor={'#4C00A4'} padding={'7px'} borderRadius={'3px 3px 0px 0px '} color={'white'}> Section-wise Student Performance</Heading>
                </CardHeader>
               
                <Select value={section} onChange={handleSectionChange} mt={'1px'} placeholder="Select Section">
                    <option value="overall">Overall</option>
                    <option value="sectionA">Section A</option>
                    <option value="sectionB">Section B</option>
                </Select>

              
                <ReactApexChart
                    options={chartData.options}
                    series={getSeriesData()}
                    type={'area'}
                    height={'90%'}
                    width={'90%'}
                />
            </Card>
        </>
    )
}

export default LineChart
