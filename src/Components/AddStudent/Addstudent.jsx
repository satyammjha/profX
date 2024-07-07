import React, { useState } from 'react';
import { Card, Heading, HStack, Stack, Input, Select, Button, Text } from '@chakra-ui/react';
import { getDatabase, ref, push } from 'firebase/database';
import { initializeApp } from 'firebase/app';


const firebaseConfig = {
    apiKey: "AIzaSyDA8TZKl_T5-QUpm6SJoVMpO5NpXxNmCXU",
    authDomain: "npnp-b2bb0.firebaseapp.com",
    projectId: "npnp-b2bb0",
    storageBucket: "npnp-b2bb0.appspot.com",
    messagingSenderId: "313747395688",
    appId: "1:313747395688:web:09fa4ee5e28de8bf3b17dd"
};


const app = initializeApp(firebaseConfig);

const AddStudent = () => {
    const [studentDetails, setStudentDetails] = useState({
        name: '',
        uid: '',
        class: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setStudentDetails({ ...studentDetails, [name]: value });
    };

    const handleAddStudent = () => {
        const database = getDatabase(app);
        const studentsRef = ref(database, 'students');
        push(studentsRef, studentDetails)
            .then(() => {
                console.log('Student data uploaded to Firebase');

                setStudentDetails({
                    name: '',
                    uid: '',
                    class: ''
                });
            })
            .catch((error) => {
                console.error('Error uploading student data to Firebase: ', error);
            });
    };

    return (
        <>
            <Card height={'70vh'} width={'70vw'} boxShadow='lg' marginLeft={'15%'} marginTop={'5%'} border={'1px solid black'} alignItems={'center'} padding={'10px'}>
                <Stack gap={16}>
                    <HStack gap={20}>
                        <Heading as={'h3'} fontSize={'20px'}>Select Class: </Heading>
                        <Select name="class" placeholder='Select option' width={'10vw'} value={studentDetails.class} onChange={handleInputChange}>
                            <option value='633'>633</option>
                            <option value='363'>363</option>
                            <option value='636'>636</option>
                        </Select>
                    </HStack>
                    <Stack>
                        <HStack alignItems={'end'} textAlign={'center'}>
                            <Text fontWeight={'bold'} fontSize={'20px'} >Name: </Text>
                            <Input name="name" placeholder='Enter Name' width={'30vw'} value={studentDetails.name} onChange={handleInputChange} />
                        </HStack>
                        <HStack alignItems={'end'} textAlign={'center'} marginTop={'10px'}>
                            <Text fontWeight={'bold'} fontSize={'20px'}>Student's UID </Text>
                            <Input name="uid" placeholder='Enter UID' width={'30vw'} value={studentDetails.uid} onChange={handleInputChange} />
                        </HStack>
                    </Stack>
                </Stack>
                <Button bgColor='#4c00a4' color={'white'} width={'33vw'} marginTop={'10rem'} onClick={handleAddStudent}>Add Student</Button>
            </Card>
        </>
    );
}

export default AddStudent;