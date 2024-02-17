import { Stack, HStack, Box } from '@chakra-ui/react'
import Banner from '../Banner/Banner';
import Deadlines from '../Deadlines/Deadlines'
import CourseCard from '../CourseCard/CourseCard'
import Performance from '../PerformanceCard/Performance';
import LatestNews from '../LatestNews/Latestnews';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion"
import Todo from './Todo/Todo';


const Dashboard = ({ reference }) => {

    const cources = [
        {
            name: 'Advanced UI/UX',
            completed: '80%'

        },
        {
            name: 'Advanced UI/UX',
            completed: '59%'

        },
        {
            name: 'Advanced UI/UX',
            completed: '43%'

        },
    ]
    return (
        <>
            <div>
                <Stack >

                    <HStack gap={32}>
                        < div drag dragConstraints={reference}>
                            <Banner />
                        </ div>

                        < div drag dragConstraints={reference} >
                            <Deadlines />
                        </ div>
                    </HStack>

                    <HStack gap={8} marginLeft={'5rem'}>
                        {cources.map((course, index) => {
                            return (
                                <>
                                    <Link to='/coursedetails' name={"course.name"}>
                                        <CourseCard key={index} completed={course.completed} />
                                    </Link>
                                </>
                            )
                        })}
                    </HStack>
                    <HStack marginLeft={'5rem'}>
                        < div drag dragConstraints={reference}>
                            <Performance />
                        </ div>
                        < div drag dragConstraints={reference}>
                            <LatestNews />
                        </ div>
                    </HStack>
                </Stack>
                <Box position={'absolute'} marginLeft={'70rem'} boxShadow='xl' marginTop={'-30rem'} height={'65vh'} width={'23vw'} padding={'10px'} backgroundColor={'white'} dropShadow={'xl'} borderRadius={'3px'}>
                    <Todo />
                </Box>
            </div >
        </>
    )
}
export default Dashboard;