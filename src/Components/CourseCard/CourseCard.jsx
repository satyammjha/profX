import { Stack, HStack, Card, Image, Heading, Box } from '@chakra-ui/react'
import src from '../../assets/training.png'
import { Chart } from "react-google-charts";

const CourseCard = ({ name, completed }) => {

    const data = [
        ["Task", "Hours per Day"],
        ["Complete", parseInt(completed)],
        ["Incomplete", parseInt(100 - parseInt(completed))],
    ]



    const option = {
        backgroundColor: 'none',
        colors: ['red', 'green'],


        legend: 'none'
    }

    return (
        <>
            <Card cursor={'pointer'} height={'15vh'} boxShadow='xl' width={'22vw'} padding={'7px'} borderRadius={'7px'} bgGradient='linear(to-r, #7928CA, #A828CE)' _hover={{
                opacity: 0.8
            }}>
                <HStack gap={8}>
                    <Image src={src} height={'80px'} />
                    <Stack>
                        <Heading fontSize={'20px'}>{name}</Heading>
                        <HStack gap={4}>
                            <Image src={src} height={'40px'} />

                            <Box position={'absolute'} marginLeft={'-4vw'}>

                                <Chart

                                    chartType="PieChart"
                                    data={data}
                                    options={option}
                                    width={"100%"}
                                    height={"90px"}
                                />




                            </Box>

                        </HStack>
                    </Stack>
                </HStack>
            </Card>
        </>
    )
}
export default CourseCard