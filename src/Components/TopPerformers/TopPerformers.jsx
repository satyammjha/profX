import React from 'react'
import { Card, CardHeader, Heading, CardBody, Text, Box, VStack } from '@chakra-ui/react';

const TopPerformers = () => {


    const studentsList = [

        {
            name: "Kashish Dhawan",
            score: "9.3/10",
            rank: 1

        },
        {
            name: "Satyam Jha",
            score: '9/10',
            rank: 2
        },
        {
            name: "Niharika Singh",
            score: '8.7/10'
        },
        {
            name: "Satyam Kumar",
            score: '8.5/10'
        },
    ]

    return (
        <>
            <Card height={'35vh'} width={'25vw'} backgroundColor={'white'} boxShadow={'xl'} mt={'3%'} ml={'10%'} padding={'0px'}>
                <CardHeader padding={'0px'}>
                    <Heading size='xs' backgroundColor={'#4C00A4'} padding={'7px'} marginTop={'-19.3px'} borderRadius={'3px 3px 0px 0px '} color={'white'} width={'100%'}>Top Performers</Heading>
                </CardHeader>

                <CardBody marginTop={'-10%'}>

                    {studentsList.map((student, index) => {

                        return (
                            <>
                                <VStack _hover={{ opacity: '0.8' }} mt={'3%'} cursor={'pointer'} key={index} display={'flex'} ml={'-20px'} flexDirection={'row'} alignItems={'center'} p={'10px'}>
                                    <Box>
                                        <VStack display={'flex'} flexDirection={'row'} >
                                            <Heading size={'xs'} display={'box'}>{student.name}</Heading>
                                            <Text position={'absolute'} fontSize={'10px'} fontWeight={'bold'} opacity={'0.8'} ml={'48%'} color={'green'} display={student.rank == 1 ? 'block' : 'none'}>Topper</Text>
                                            <Text position={'absolute'} fontSize={'10px'} fontWeight={'bold'} opacity={'0.5'} ml={'78%'}>{student.score} Points</Text>
                                        </VStack>

                                    </Box>

                                </VStack>
                                <hr width={'100%'} />
                            </>
                        )
                    })}
                </CardBody>



            </Card>
        </>
    )
}

export default TopPerformers
