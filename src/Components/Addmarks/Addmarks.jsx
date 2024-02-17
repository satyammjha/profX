import { Card, CardHeader, CardBody, CardFooter, Heading, HStack, Stack } from '@chakra-ui/react'
import { Input } from '@chakra-ui/react'
import { Select, Button, Text } from '@chakra-ui/react'

const Addmarks = () => {

    const studentData = [
        {
            name: 'satyam jha',
            uid: '22bcs11731'

        },
        {
            name: 'Raunak',
            uid: '22bcs11222'

        },
        {
            name: 'Mitesh',
            uid: '22bcs11776'

        },
        {
            name: 'Alok',
            uid: '22bcs39y'

        }


    ]



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

                        <Heading as={'h3'} fontSize={'20px'}>Select Subject: </Heading>



                        <Select placeholder='Select option' width={'10vw'}>
                            <option value='option1'>DBMS</option>
                            <option value='option2'>Python</option>
                            <option value='option3'>Python-Lab</option>
                        </Select>



                    </HStack>


                    {studentData.map((data, index) => {

                        return (<>

                            <HStack key={index} alignItems={'center'}>
                                <Heading as={'h3'} fontSize={'20px'}>{data.name} - {data.uid}</Heading>



                                <Input placeholder='Enter Marks' width={'30vw'} id='marks' marginTop={'-30px'} />

                            </HStack>

                        </>)

                    })}






                </Stack>
                <Button colorScheme='blue' width={'33vw'} marginTop={'10rem'}>Button</Button>
            </Card>
        </>
    )
}

export default Addmarks
