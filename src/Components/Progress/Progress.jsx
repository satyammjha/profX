import { Box, Card, CardBody, CardHeader, Heading, Text, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';
import Chart from 'react-apexcharts';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Progress = () => {

    const cources = [
        {
            name: 'Data Structures and Algorithms',
            ch: "module 3",
            completed: 80
        },
        {
            name: 'DSA Lab',
            ch: "Quiz",
            completed: 59
        },
        {
            name: 'OOPS using C++',
            ch: "Module 4",
            completed: 43
        },
        {
            name: 'OOPS Lab',
            ch: "Module 4",
            completed: 80
        },
        {
            name: 'OOPS using C++',
            ch: "Module 4",
            completed: 70
        },
    ]

    return (
        <>
            <Card height={'42vh'} width={'20vw'} backgroundColor={'white'} boxShadow={'xl'} mt={'8%'}>
                <CardHeader>
                    <Heading size='xs' backgroundColor={'#4C00A4'} padding={'7px'} marginTop={'-19.3px'} marginLeft={'-1.2rem'} borderRadius={'3px 3px 0px 0px '} color={'white'} width={'115%'}> Progress Status</Heading>
                </CardHeader>

                <CardBody marginTop={'-10%'}>
                    {cources.map((course, index) => {

                        return (
                            <>

                                <VStack display={'flex'} flexDirection={'row'} alignItems={'center'} p={'5px'}>
                                    <Box>
                                        <Heading size={'xs'}>{course.name}</Heading>
                                        <Text fontSize={'10px'} fontWeight={'bold'} opacity={'0.5'}>{course.ch}</Text>
                                    </Box>
                                    <Box w={'12%'} ml={'75%'} position={'absolute'}>
                                        <CircularProgressbar backgroundColor={'red'} value={`${course.completed}`} text={`${course.completed}`} height={'10%'} />
                                    </Box>
                                </VStack>
                                <hr />
                            </>
                        )



                    })}
                </CardBody>
            </Card>
        </>
    );
}

export default Progress;