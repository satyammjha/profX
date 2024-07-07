import { Stack, HStack, Box } from '@chakra-ui/react'
import Banner from '../Banner/Banner';
import Deadlines from '../Deadlines/Deadlines'
import CourseCard from '../CourseCard/CourseCard'
import Performance from '../PerformanceCard/Performance';
import LatestNews from '../LatestNews/Latestnews';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion"
import Trends from './Todo/Todo';


const Dashboard = ({ reference }) => {

    const cources = [
        {
            name: 'Data Structures and Algorithms',
            id: "dsa",
            completed: 80

        },
        {
            name: 'DSA Lab',
            id: "dsalab",
            completed: 59

        },
        {
            name: 'OOPS using C++',
            id: "oops",
            completed: 43
        },
    ]
    return (
        <>
            <motion.div>
                <Stack >
                    <HStack gap={20} marginTop={'10px'}>
                        < motion.div drag dragConstraints={reference}>
                            <Banner />
                        </ motion.div>
                        < motion.div drag dragConstraints={reference} >
                            <Deadlines />
                        </ motion.div>
                    </HStack>
                    <motion.div drag>
                        <HStack gap={8} marginLeft={'3.2rem'} >
                            {cources.map((course, index) => {
                                return (
                                    <>
                                        <CourseCard key={index} name={course.name} completed={course.completed} id={course.id} />
                                    </>
                                )
                            })}
                        </HStack>
                    </motion.div>
                    <HStack marginLeft={'3.2rem'}>
                        < motion.div drag dragConstraints={reference}>
                            <Performance />
                        </ motion.div>
                        < motion.div drag dragConstraints={reference}>
                            <LatestNews />
                        </ motion.div>
                        <motion.div drag>
                            <Trends />
                        </motion.div>
                    </HStack>
                </Stack>
            </motion.div>
        </>
    )
}
export default Dashboard;