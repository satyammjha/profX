import React from 'react'
import { Box, Heading, Card, CardHeader, CardBody, VStack, Text } from '@chakra-ui/react';

const Messages = () => {


    const msgs = [
        {
            name: 'Er. Govind Pathak',
            Time: '09:00 AM',
            msg: 'Please update the marks of DSA'
        },
        {
            name: 'Sanjana',
            Time: '10:53 AM',
            msg: 'Meet me at 11:00 AM in the library'
        },
        {
            name: 'Dr. Vallabh',
            Time: '07:33 PM',
            msg: 'Please update the marks of DSA'
        }
        ,
        {
            name: 'Gurkeerat Maan',
            Time: '12:54 PM',
            msg: 'Please send me the brief of meeting'
        }
    ]

    return (
        <>
            <Card height={'35vh'} width={'25vw'} backgroundColor={'white'} boxShadow={'xl'} mt={'3%'} ml={'10%'} padding={'0px'}>
                <CardHeader padding={'0px'}>
                    <Heading size='xs' backgroundColor={'#4C00A4'} padding={'7px'} marginTop={'-19.3px'} borderRadius={'3px 3px 0px 0px '} color={'white'} width={'100%'}>Messgaes</Heading>
                </CardHeader>

                <CardBody marginTop={'-10%'}>

                    {msgs.map((msg, index) => {

                        return (
<>
                            <VStack _hover={{ opacity: '0.8' }} mt={'3%'} cursor={'pointer'} key={index} display={'flex'} ml={'-20px'} flexDirection={'row'} alignItems={'center'} p={'10px'}>
                                <Box>
                                    <VStack display={'flex'} flexDirection={'row'}>
                                        <Heading size={'xs'} display={'box'}>{msg.name}</Heading>
                                        <Text position={'absolute'} fontSize={'10px'} fontWeight={'bold'} opacity={'0.5'} ml={'80%'}>{msg.Time}</Text>
                                    </VStack>
                                    <Text fontSize={'10px'} fontWeight={'bold'} opacity={'0.5'}>{msg.msg}</Text>
                               
                                </Box>

                            </VStack>
                                                           <hr width={'100%'}/>
                                                           </>
                        )
                    })}
                </CardBody>
            </Card>
        </>
    )
}

export default Messages
