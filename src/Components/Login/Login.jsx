<<<<<<< HEAD
import React, { useContext, useState } from 'react';
import { Box, FormControl, FormLabel, Input, Button, Text, VStack, Image, Stack } from "@chakra-ui/react";
import { database } from '../../firebase'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { UserLoggedInContext } from '../../Context/Context';
import { useNavigate } from 'react-router-dom';
import teacherImage from '../../assets/teacher.jpg';
import logo from '../../assets/logo.png'

const Login = () => {
  const { loggedIn, setLoggedIn } = useContext(UserLoggedInContext);
  const [employeeId, setEmployeeId] = useState('test@cuchd.in');
  const [password, setPassword] = useState('123123');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  console.log(loggedIn)
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(database, employeeId, password);
      console.log('User logged in successfully!', userCredential);
      setLoggedIn(true);
      setError(null);
      setTimeout(() => {
        history.pushState(null, null, '/dashboard');
        navigate('/dashboard');
      }, 3000);
    } catch (error) {
      console.error('Login error:', error.message);
      setError(error.message);
    }
  };

  return (
    <>
      {/* <Image src={logo} height={'10vh'}/> */}
      <Text fontSize={'40px'} ml={'10vw'} fontWeight={'bold'}>profX</Text>
      <VStack spacing={8} alignItems="center" justifyContent="center" height="90vh" ml={'-40rem'}>
        <Box>
          <iframe src="https://giphy.com/embed/d5vvF6uXqxWo90rSRS" width="480" height="300" class="giphy-embed" allowFullScreen borderRadius={'3px'}></iframe>
          {/* <Image src={teacherImage} height={'50vh'} width={'60vh'} /> */}
        </Box>
        <Box mt={'-23rem'} ml={'60vw'}>
          <Text ml={'14.3rem'} fontWeight={'bold'} color={'red'}>Please use the prefilled credentials for demo of our product</Text>
          <FormControl zIndex={'100'} boxShadow='2xl' padding={'15px'} width={'max-content'} gap={16} marginLeft={"15vw"}>
            <form onSubmit={handleLogin}>
              <Text fontWeight={"bold"} bg={'#4c00a4'} color={'white'} padding={'7px'} borderRadius={'3px'} >Enter your credentials:</Text>
              <hr />
              <FormControl mt={"5%"} id="employeeId" mb="4">
                <FormLabel>Employee ID</FormLabel>
                <Input type='text' value={employeeId} onChange={(e) => setEmployeeId(e.target.value)} width={'30vw'} required />
              </FormControl>
              <FormControl id="password" mb="4">
                <FormLabel>Password</FormLabel>
                <Input type='password' value={password} onChange={(e) => setPassword(e.target.value)} width={'30vw'} required />
              </FormControl>
              {error && <Text color="red.500" mb="4">{error}</Text>}
              <Button bgColor="#4c00a4" color={'white'} fontWeight={'bold'} width={'30vw'} mt="4" type="submit">Login</Button>
            </form>
          </FormControl>
        </Box>
      </VStack>
    </>
  );
};
=======
import { Box, FormControl, FormLabel, Input, HStack, Stack, Button } from "@chakra-ui/react";
const Login = () => {
    return (
        <>
            <Box w='100vw' h='500vh' bgGradient='linear(to-r, green.200, pink.500)'>
                <FormControl zIndex={'100'} boxShadow='2xl' padding={'15px'} width={'60vw'} gap={16}>
                    <Stack alignItems={'center'}>
                        <HStack>
                            <FormLabel>Employee ID:</FormLabel>
                            <Input type='text' width={'30vw'} />
                        </HStack>
                        <HStack>
                            <FormLabel marginRight={'37px'}>Password</FormLabel>
                            <Input type='text' width={'30vw'} margin-left={'22px'} />
                        </HStack>
                        <Button colorScheme={'green'} width={'30vw'} marginLeft={'60px'}>Login</Button>
                    </Stack>
                </FormControl>
                <Box w='100vw' h='100vh' bgGradient='linear(to-r, green.200, pink.500)' position={"absolute"} marginTop={'-16rem'}>



                </Box>
            </Box>

        </>
    )
}
>>>>>>> b1758df978e824ca736f570b223c9e0ce7257646

export default Login;