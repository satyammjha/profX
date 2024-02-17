import React from 'react'
import { Card, CardHeader, CardBody, CardFooter, Heading, HStack, Stack } from '@chakra-ui/react'
import { Input } from '@chakra-ui/react'
import { Select, Button, Text } from '@chakra-ui/react'
const Addstudent = () => {
    return (
        <>

            <Card height={'70vh'} width={'70vw'} boxShadow='lg' marginLeft={'15%'} marginTop={'5%'} border={'1px solid black'} alignItems={'center'} padding={'10px'}>

                <Stack gap={16}>

                    <HStack gap={20}>

                        <Heading as={'h3'} fontSize={'20px'}>Select Class: </Heading>


                        <Select placeholder='Select option' width={'10vw'}>
                            <option value='option1'>633</option>
                            <option value='option2'>363</option>
                            <option value='option3'>636</option>
                        </Select>





                    </HStack>

                    <Stack>
                        <HStack alignItems={'end'} textAlign={'center'}>
                            <Text fontWeight={'bold'} fontSize={'20px'} >Name: </Text>
                            <Input placeholder='Enter Name' width={'30vw'} id='marks' marginTop={'-30px'} />


                        </HStack>
                        <HStack alignItems={'end'} textAlign={'center'} marginTop={'10px'}>
                            <Text fontWeight={'bold'} fontSize={'20px'}>Student's UID </Text>
                            <Input placeholder='Enter Name' width={'30vw'} id='marks' marginTop={'-30px'} />


                        </HStack>

                    </Stack>







                </Stack>
                <Button colorScheme='blue' width={'33vw'} marginTop={'10rem'}>Add Student</Button>
            </Card>

        </>
    )
}

export default Addstudent
