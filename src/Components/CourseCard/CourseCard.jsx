import { Button, Stack, HStack, Card, Image, Heading, Box, Text } from '@chakra-ui/react'
import src from '../../assets/training.png'
import { Chart } from "react-google-charts";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const CourseCard = ({ name, completed, id }) => {
    const [percentage, setPercentage] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            if (percentage < 100) {
                setPercentage(percentage + 1);
            }
        }, 50);
    }, [percentage]);


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
            <Card cursor={'pointer'} height={'15vh'} boxShadow='xl' width={'22vw'} padding={'7px'} borderRadius={'7px'} backgroundColor={'#09291E'} _hover={{
                opacity: 0.8
            }}>
                <HStack gap={8}>
                    <Stack>
                        <Text color={"white"}>{name}</Text>
                        <HStack gap={4} mt={'10px'}>
                            <Image src={src} height={'40px'} />
                            <Box position={'absolute'} marginLeft={'-4vw'}>
                                <div style={{ width: 60, marginLeft: 160 }}>
                                    <CircularProgressbar value={completed} text={`${completed}%`} />
                                </div>
                            </Box>
                            <Link to='/coursedetails'>
                                <Button position={'absolute'} size={'xs'} ml={'50%'}>View Details</Button>
                            </Link>
                        </HStack>
                    </Stack>
                </HStack>
            </Card>
        </>
    )
}
export default CourseCard;