import React, { useState } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Addmarks = () => {
    const [Name, setName] = useState('');
    const [UID, setUID] = useState('');
    const [Section, setSection] = useState('');
    const [MarksOneSub, setMarksOneSub] = useState('');
    const [MarksSecSub, setMarksSecSub] = useState('');
    const [MarksThirSub, setMarksThirSub] = useState('');

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

            setName("");
            setUID("");
            setSection("");
            setMarksOneSub("");
            setMarksSecSub("");
            setMarksThirSub("");
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