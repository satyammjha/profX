<<<<<<< HEAD
import React, { useState } from 'react';
=======
// Import necessary components and libraries
import React, { useState } from 'react';
import { Card, Button, FormControl, FormLabel, Input, Stack, HStack } from '@chakra-ui/react';
>>>>>>> b1758df978e824ca736f570b223c9e0ce7257646
import { toast } from 'react-toastify';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Addmarks = () => {
<<<<<<< HEAD
=======
    // Define state variables for form inputs
>>>>>>> b1758df978e824ca736f570b223c9e0ce7257646
    const [Name, setName] = useState('');
    const [UID, setUID] = useState('');
    const [Section, setSection] = useState('');
    const [MarksOneSub, setMarksOneSub] = useState('');
    const [MarksSecSub, setMarksSecSub] = useState('');
    const [MarksThirSub, setMarksThirSub] = useState('');

<<<<<<< HEAD
    const navigate = useNavigate();

    const handleMarks = async (e) => {
        e.preventDefault();
        try {
         
            const studentData = {
                Name,
                UID,
                Section,
                MarksOneSub,
                MarksSecSub,
                MarksThirSub,
            };
            const response = await axios.post(
                "https://npnp-b2bb0-default-rtdb.firebaseio.com/marks.json",
                studentData,
                { headers: { "Content-type": "application/json" } }
            );
            toast.success("Marks updated successfully!");

=======
    // Initialize navigate hook
    const navigate = useNavigate();

    // Define function to handle form submission
    const handleMarks = async (e) => {
        e.preventDefault();
        try {
            // Send form data to server
            const { data } = await axios.post("http://localhost:4000/api/send",
                { Name, UID, Section, MarksOneSub, MarksSecSub, MarksThirSub },
                { headers: { "Content-type": "application/json" }, withCredentials: true }
            );
            // Display success message
            toast.success(data.message);
            // Reset form fields
>>>>>>> b1758df978e824ca736f570b223c9e0ce7257646
            setName("");
            setUID("");
            setSection("");
            setMarksOneSub("");
            setMarksSecSub("");
            setMarksThirSub("");
<<<<<<< HEAD
            navigate("/addmarks");
        } catch (error) {
            toast.error("Error updating marks. Please try again.");
        }
    };

    return (
        <div className="container mx-auto p-6 bg-gray-100 shadow-md rounded-lg mt-10">
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-xl font-bold text-gray-800">Update Marks</h1>
            </div>
            <form onSubmit={handleMarks} className="bg-white p-6 rounded-lg shadow-md">
                <div className="grid grid-cols-3 gap-4 mb-4">
                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2">Student Name</label>
                        <input
                            type="text"
                            value={Name}
                            onChange={(e) => setName(e.target.value)}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2">UID</label>
                        <input
                            type="text"
                            value={UID}
                            onChange={(e) => setUID(e.target.value)}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2">Section</label>
                        <input
                            type="text"
                            value={Section}
                            onChange={(e) => setSection(e.target.value)}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Physics</label>
                    <input
                        type="text"
                        value={MarksOneSub}
                        onChange={(e) => setMarksOneSub(e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Maths</label>
                    <input
                        type="text"
                        value={MarksSecSub}
                        onChange={(e) => setMarksSecSub(e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Python</label>
                    <input
                        type="text"
                        value={MarksThirSub}
                        onChange={(e) => setMarksThirSub(e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="flex justify-center mt-6">
                    <button
                        type="submit"
                        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        style={{ backgroundColor: '#4c00a4' }}
                    >
                        Update Marks
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Addmarks;
=======
            // Navigate to specified route
            navigate("/addmarks");
        } catch (error) {
            // Display error message
            toast.error(error.response.data.message);
        }
    }

    // Render form component
    return (
        <Card height={'80vh'} width={'70vw'} backgroundColor={'whitesmoke'} padding={'30px'} border={'1px solid red'} marginLeft={'13%'} marginTop={'5%'} zIndex={1}>
            <FormControl>
                <Stack gap={4}>
                    <HStack>
                        <FormLabel>Student Names</FormLabel>
                        <Input type='text' border='0.5px solid black' width={"15vw"} value={Name} onChange={(e)=> setName(e.target.value)} />
                        <FormLabel>UID</FormLabel>
                        <Input type='text' border='0.5px solid black' width={"15vw"} value={UID} onChange={(e)=> setUID(e.target.value)} />
                        <FormLabel>Section</FormLabel>
                        <Input type='text' border='0.5px solid black' width={"10vw"} value={Section} onChange={(e)=> setSection(e.target.value)} />
                    </HStack>
                    <HStack>
                        <FormLabel>Physics</FormLabel>
                        <Input type='text' border='0.5px solid black' width={" 40vw"} value={MarksOneSub} onChange={(e)=> setMarksOneSub(e.target.value)} />
                    </HStack>
                    <HStack gap={4}>
                        <FormLabel>Maths</FormLabel>
                        <Input type='text' border='0.5px solid black' width={" 40vw"} value={MarksSecSub} onChange={(e)=> setMarksSecSub(e.target.value)} />
                    </HStack>
                    <HStack>
                        <FormLabel>Python</FormLabel>
                        <Input type='text' border='0.5px solid black' width={" 40vw"} value={MarksThirSub} onChange={(e)=> setMarksThirSub(e.target.value)} />
                    </HStack>
                </Stack>
            </FormControl>
            <Button colorScheme='green' width={'30rem'} marginTop={'60px'} marginLeft={'30%'} type="submit" onClick={handleMarks} >Update Marks</Button>
        </Card>
    );
}
export default Addmarks;
>>>>>>> b1758df978e824ca736f570b223c9e0ce7257646
