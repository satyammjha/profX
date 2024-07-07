import { Box, Card, CardBody, CardHeader, Heading } from '@chakra-ui/react';
import { Calendar } from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './CalendarStyles.css'

const Deadlines = () => {
    const highlightedDates = [
        { date: new Date(2024, 6, 10), message: 'Event on July 10, 2024' },
        { date: new Date(2024, 6, 15), message: 'Meeting on July 15, 2024' },
        { date: new Date(2024, 6, 20), message: 'Appointment on July 20, 2024' },
    ];

    const tileClassName = ({ date, view }) => {
        if (view === 'month') {

            if (highlightedDates.find(d => d.date.toDateString() === date.toDateString())) {
                return 'highlighted';
            }
        }
        return null;
    };

    const tileContent = ({ date, view }) => {
        if (view === 'month') {
            const highlightedDate = highlightedDates.find(d => d.date.toDateString() === date.toDateString());
            if (highlightedDate) {
                return (
                    <div className="tooltip">
                        {highlightedDate.message}
                    </div>
                );
            }
        }
        return null;
    };

    return (
        <Card bg={'white'} boxShadow='xl' width={'23vw'} borderRadius={'4px'} position={'absolute'} marginTop={'-4.8%'}>
            <CardHeader padding={0}>
                <Heading size='xs' backgroundColor={'#4C00A4'} padding={'7px'} borderRadius={'3px 3px 0px 0px '} color={'white'}>
                    Deadlines
                </Heading>
            </CardHeader>
            <Box >
                <Calendar
                    height={'2rem'}
                    activeStartDate={new Date(2024, 6, 7)}
                    showNavigation={true}
                    tileClassName={tileClassName}
                    tileContent={tileContent}
                    allowPartialRange={true}
                    defaultValue={[new Date(2024, 6, 10), new Date(2024, 6, 15)]}
                    border={'none'}
                />
            </Box>
        </Card>
    );
};

export default Deadlines;