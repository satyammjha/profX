import React, { useState } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css'; // Import default styles
function easeQuadInOut(t) {
  return ((t *= 2) <= 1 ? t * t : --t * (2 - t) + 1) / 2;
}
// import { Card, CardHeader, CardBody, CardFooter, h1, Button } from '@material-tailwind/react';

const Result = () => {
  const [selectedOption1, setSelectedOption1] = useState('');
  const [selectedOption2, setSelectedOption2] = useState('');

  const handleOption1Change = (event) => {
    setSelectedOption1(event.target.value);
  };

  const handleOption2Change = (event) => {
    setSelectedOption2(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
    console.log('Selected Option 1:', selectedOption1);
    console.log('Selected Option 2:', selectedOption2);
  };

  //Table data
  // Dummy data for the table rows
  const data = [
    { code: 'CSE101', title: 'Introduction to Computer Science', credit: 3, grade: 'A', gradePoint: 4.0 },
    { code: 'MTH202', title: 'Calculus II', credit: 4, grade: 'B+', gradePoint: 3.3 },
    { code: 'ENG301', title: 'English Composition', credit: 3, grade: 'A-', gradePoint: 3.7 },
    { code: 'PHY101', title: 'Physics I', credit: 4, grade: 'C', gradePoint: 2.0 }
  ];

  // Calculate total credit requirement, total credit taken, and SGPA
  const totalCreditRequirement = 20; // Example total credit requirement
  const totalCreditTaken = data.reduce((acc, curr) => acc + curr.credit, 0);
  const gradePoints = data.map(course => course.credit * course.gradePoint);
  const totalGradePoints = gradePoints.reduce((acc, curr) => acc + curr, 0);
  const sgpa = totalGradePoints / totalCreditTaken;
  const GradePercent = (totalCreditTaken / totalCreditRequirement) * 100;

  const progressValue = 75; // Set your progress value here (0-100)

  return (
    <>
      {/* Left side: "Live Result" text */}
      <div className='mx-10'>
        <div className="mt-8 my-3 flex items-center justify-between border-2 rounded-md p-3 px-6">
          <div>
            <p className="text-lg ">Live Results</p>
          </div>

          {/* Middle: Rounded profile image */}
          <div className='flex items-center'>
            <div>
              <p className="text-lg font-semibold">Alok kumar yadav</p>
            </div>
            <div className="flex-shrink-0 mx-4 rounded-full object-contain overflow-hidden border-2 border-white">
              <img src="/DP.jpg" alt="Profile" className="w-12 h-12" />
            </div>

            {/* Right side: Exit button */}
            <div>
              <button className="bg-red-500 text-white px-4 py-2 rounded-md">Exit</button>
            </div>
          </div>
        </div>

        <div className="my-6 ">
          <form onSubmit={handleSubmit} className="flex items-center  ">
            <div className='w-5/12 me-6 '>
              {/* <label className=" mb-2">Option 1:</label> */}
              <select
                value={selectedOption1}
                onChange={handleOption1Change}
                className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary-500 focus:border-primary-500"
              >
                <option value="" className='text-center'>Student Id</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>
            </div>
            <div className='w-5/12 me-6'>
              {/* <label className=" mb-2">Option 2:</label> */}
              <select
                value={selectedOption2}
                onChange={handleOption2Change}
                className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary-500 focus:border-primary-500"
              >
                <option value="" className='text-center text-semibold'>Select Semester</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>
            </div>
            <div className='w-2/12'>
              <button type="submit" className="w-full bg-primary-500  border-blue-600 bg-blue-400 text-black py-2 px-4 rounded-md hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2">
                Submit
              </button>
            </div>
          </form>
        </div>

        {/* Table */}
        <div className='flex justify-between '>
          <table className='w-8/12 shadow-lg' >
            <thead>
              <tr className="border border-gray-800 px-4 py-2  text-blue-600 font-bold">
                <th className="px-4 py-2">Course Code</th>
                <th className="px-4 py-2">Course Title</th>
                <th className="px-4 py-2">Credit</th>
                <th className="px-4 py-2">Grade</th>
                <th className="px-4 py-2">Grade Point</th>
              </tr>
            </thead>
            <tbody>
              {data.map((course, index) => (
                <tr key={index}>
                  <td className="border border-gray-800 px-4 py-2">{course.code}</td>
                  <td className="border border-gray-800 px-4 py-2">{course.title}</td>
                  <td className="border border-gray-800 px-4 py-2 text-center">{course.credit}</td>
                  <td className="border border-gray-800 px-4 py-2 text-center">{course.grade}</td>
                  <td className="border border-gray-800 px-4 py-2 text-center">{course.gradePoint}</td>
                </tr>
              ))}
              <tr className="">
                <td className="border border-gray-800 px-4 py-2 text-center font-semibold " colSpan="2">Total Credit Requirement: {totalCreditRequirement}</td>

                <td className="border border-gray-800 px-4 py-2 text-center font-semibold">Total Credit Taken: {totalCreditTaken}</td>
                <td className="border border-gray-800 px-4 py-2 text-center font-semibold" colSpan="2">SGPA: {sgpa.toFixed(2)}</td>
              </tr>
            </tbody>
          </table>

          <div className='w-3/12 flex flex-col justify-center items-center  border-2 me-3 rounded-xl   px-10 shadow-lg'>
            <div className='justify-center my-4'>
              <h1 className=' '>You have received {GradePercent.toFixed(1)}% grade   </h1>
            </div>
            {/* <div className='flex justify-center' style={{ width: '100px' }}> */}
            {/* <CircularProgressbar
                value={totalCreditTaken}
                minValue={0}
                maxValue={20}
                text={`${GradePercent.toFixed(1)}%`}
                className='flex justify-center'
              /> */}
            <div label="Fully controlled text animation using react-move">
              <div
                valueStart={0}
                valueEnd={66}
                duration={1.4}
                easingFunction={easeQuadInOut}
                repeat
              >
                {value => {
                  const roundedValue = Math.round(value);
                  return (
                    <CircularProgressbar
                      value={totalCreditTaken}
                      text={`${GradePercent.toFixed(1)}%`}
                      styles={buildStyles({ pathTransition: "none" })}
                    />
                  );
                }}
              </div>
            </div>
            {/* </div> */}
          </div>
        </div>
        <div className='flex'>
          <div className="mt-6 w-2/5 flex justify-between border-2 px-4 py-4 shadow-xl mb-4">
            <div className='block'>
              <h1 className="mb-2 text-2xl font-bold">Student Basic Info</h1>
              <h1 className="text-lg font-semibold">Name: <span className='text-blue-600'>Nasimul Noyon Ontor</span> </h1>
              <h1 className="text-lg font-semibold">Department: <span className='text-blue-600'>Department Of English</span></h1>
              <h1 className="text-lg font-semibold">Faculty: <span className='text-blue-600'>FHSS</span></h1>
              <h1 className="text-lg font-semibold">Student ID: <span className='text-blue-600'>17I-101-199</span></h1>
              <h1 className="text-lg font-semibold">Enrollment: <span className='text-blue-600'>Spring 2019</span></h1>
            </div>
            <div className="flex mx-4 rounded-full  overflow-hidden border-2 w-24 h-24">
              <img src="/DP.jpg" alt="Profile" className="" />
            </div>
          </div>

          <div className="mt-6 w-3/5 flex flex-col justify-center border-2 px-4 py-4 shadow-xl mb-4   p-6 ">
            <div className='h-auto'>
              <h1 className="block text-2xl font-bold mb-4">Your Overall Performance This Semester</h1>
            </div>
            <div className=' flex justify-between'>
              <div className="block mb-4 text-lg font-semibold">
                <p>Class Attended: <span className="font-semibold text-blue-600">46</span>/50</p>
                <p>Quiz Taken: <span className="font-semibold text-blue-600">11</span>/12</p>
                <p>Assignment Submitted: <span className="font-semibold text-blue-600">21</span>/24</p>
                <p>Presentation Completed: <span className="font-semibold text-blue-600">3</span>/4</p>
              </div>
              <div className='w-96 flex flex-col justify-center items-center' >
                <CircularProgressbar
                  value={totalCreditTaken}
                  minValue={0}
                  maxValue={20}
                  text={`${GradePercent.toFixed(1)}%`}
                  className='flex justify-center w-20'
                />
                <p className="w-26 text-gray-600 mt-4">Congratulations! You are a top scorer of your class!</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Result
