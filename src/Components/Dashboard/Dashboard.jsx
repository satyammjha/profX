import { HStack } from '@chakra-ui/react'
import Banner from '../Banner/Banner';
import Deadlines from '../Deadlines/Deadlines'

const Dashboard = () => {
    return (
        <>
            <HStack gap={4}>
                <Banner />
                <Deadlines />
            </HStack>
        </>
    )
}
export default Dashboard;