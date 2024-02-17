import { Stack, HStack } from '@chakra-ui/react'
import Banner from '../Banner/Banner';
import Deadlines from '../Deadlines/Deadlines'
import CourseCard from '../CourseCard/CourseCard'
import Performance from '../PerformanceCard/Performance';
import LatestNews from '../LatestNews/Latestnews';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion"
import { useRef } from 'react';

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

                    <HStack gap={4}>
                        <motion.div drag dragConstraints={reference}>
                            <Banner />
                        </motion.div>

                        <motion.div drag dragConstraints={reference}>
                            <Deadlines />
                        </motion.div>
                    </HStack>

                    <HStack gap={8} marginLeft={'7.3rem'}>

                        <motion.div drag dragConstraints={reference}>
                            {cources.map((course, index) => {
                                return (
                                    <>
                                        <Link to='/coursedetails' name={"course.name"}>
                                            <CourseCard key={index} completed={course.completed} />
                                        </Link>
                                    </>
                                )
                            })}
                        </motion.div>
                    </HStack>
                    <HStack marginLeft={'7.3rem'}>
                        <motion.div drag dragConstraints={reference}>
                            <Performance />
                        </motion.div>
                        <motion.div drag dragConstraints={reference}>
                            <LatestNews />
                        </motion.div>
                    </HStack>
                </Stack>
            </div>
        </>
    )
}
export default Dashboard;