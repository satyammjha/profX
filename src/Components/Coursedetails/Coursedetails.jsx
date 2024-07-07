import React, { useState } from 'react';
import { Box, Stack, VStack, Card, Select, CardHeader, Heading } from '@chakra-ui/react';
import ReactApexChart from 'react-apexcharts';
import LineChart from '../Charts/LineChart/LineChart';
import Progress from '../Progress/Progress';
import Messages from '../Messages/Messages';
import TopPerformers from '../TopPerformers/TopPerformers';
import Submission from '../Submission/Submission';
import Activeness from '../Activeness/Activeness';

const Coursedetails = () => {

    return (
        <>
            <Stack ml={'-7%'}>
                <VStack display={'flex'} flexDirection={'row'}>
                    <LineChart />
                    <Box>
                        <Progress />
                    </Box>
                    <Submission />
                </VStack>
                <VStack display={'flex'} flexDirection={'row'} ml={'8%'} gap={'16'} mt={'40px'}>
                    <Box><Messages /></Box>
                    <Box><TopPerformers /></Box>
                    <Box><Activeness /></Box>
                </VStack>
            </Stack>
        </>
    );
};

export default Coursedetails;