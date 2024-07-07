<<<<<<< HEAD
import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { Box, Card, CardBody, CardHeader, Stack, Heading } from '@chakra-ui/react';

const Trends = () => {
    const chartOptions = {
        chart: {
            type: 'radar',
            height: 5,
        },
        series: [
            {
                name: 'Marks',
                data: [80, 90, 70, 85, 75],
            },
        ],
        xaxis: {
            categories: ['Mid-sem-1', 'Mid-sem-2', 'Mid-sem-3', 'Quiz', 'Surprise Test',],
        },
        yaxis: {
            show: false,
        },
        grid: {
            show: false,
        },
        tooltip: {
            enabled: true,
            y: {
                formatter: function (val) {
                    return `Marks: ${val}`;
                }
            }
        },
        stroke: {
            show: true,
            width: 2,
        },
        fill: {
            opacity: 0.3, 
            colors: ['#4c00a4']
          },
        markers: {
            size: 5,
            hover: {
                size: 7,
            }
        },
    };

    return (
        <Card id="chart" padding={0} position={'absolute'} marginTop={'-8rem'} marginLeft={'1vw'} height={'19rem'} width={'23vw'}>
            <CardHeader padding={0}>
                <Heading size='xs' backgroundColor={'#4C00A4'} padding={'7px'} borderRadius={'3px 3px 0px 0px '} color={'white'}> Student Performance</Heading>
            </CardHeader>
            <Box padding={0}>
                <ReactApexChart options={chartOptions} series={chartOptions.series} type="radar" height={300} />
            </Box>
        </Card>
    );
};

export default Trends;
=======
import React, { useState } from 'react';
import { Input, Heading, Button } from '@chakra-ui/react';
const Todo = () => {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        deadline: ''
    });

    const [tasks, setTasks] = useState([]);

    const onFormSubmit = (event) => {
        event.preventDefault();
        if (validate()) {
            setTasks([...tasks, formData]);
            resetForm();
        }
    }

    const resetForm = () => {
        setFormData({
            title: '',
            description: '',
            deadline: ''
        });
    }

    const validate = () => {
        return formData.title.trim() !== '' && formData.description.trim() !== '' && formData.deadline.trim() !== '';
    }

    return (
        <>
            <div className="todo-form">
                <Heading fontSize={'14px'}>Add Tasks</Heading>

                <form onSubmit={onFormSubmit}>
                    <div>
                        <label fontWeight={'bold'}>Title:</label>
                        <Input ml={'50px'} mt={'10px'} width={'10rem'} type="text" value={formData.title} onChange={(e) => setFormData({ ...formData, title: e.target.value })} />
                    </div>
                    <div>
                        <label mt={'10px'}>Description</label>
                        <Input ml={'10px'} mt={'10px'} width={'10rem'} type="text" value={formData.description} onChange={(e) => setFormData({ ...formData, description: e.target.value })} />
                    </div>
                    <div>

                        <label>Deadline</label>
                        <Input ml={'30px'} mt={'10px'} width={'10rem'} type="text" value={formData.deadline} onChange={(e) => setFormData({ ...formData, deadline: e.target.value })} />
                    </div>
                    <div>
                        <Button type="submit" colorScheme={'red'} marginLeft={'80px'} marginTop={'30px'}>Add Task</Button>
                    </div>
                </form>
            </div>
            <div className="todo-list">
                <p fontSize={'33px'} fontWeight={'bold'}>Tasks</p>
                <ul>
                    {tasks.map((task, index) => (
                        <li key={index}>
                            <strong>{task.title}</strong> --- &nbsp;
                            {task.description}
                            {task.deadline}
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default Todo;
>>>>>>> b1758df978e824ca736f570b223c9e0ce7257646
