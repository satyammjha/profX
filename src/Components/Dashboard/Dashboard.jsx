import { Stack, HStack } from '@chakra-ui/react'
import Banner from '../Banner/Banner';
import Deadlines from '../Deadlines/Deadlines'
import CourseCard from '../CourseCard/CourseCard'
import Performance from '../PerformanceCard/Performance';
import LatestNews from '../LatestNews/Latestnews';

const Dashboard = () => {

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

            <Stack >
                <HStack gap={4}>
                    <Banner />
                    <Deadlines />
                </HStack>

                <HStack gap={8} marginLeft={'7.3rem'}>

                    {cources.map((course, index) => {
                        return (
                            <>

                                <CourseCard key={index} name={course.name} completed={course.completed} />

                            </>


                        )


                    })}

                </HStack>


                <HStack marginLeft={'7.3rem'}>

                    <Performance />

<LatestNews/>


                </HStack>

            </Stack>

        </>
    )
}
export default Dashboard;