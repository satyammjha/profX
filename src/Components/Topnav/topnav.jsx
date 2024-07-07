
import { Stack, Progress } from '@chakra-ui/react';
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    Box,
    Button,
    HStack, Input, InputGroup, InputLeftElement, Image, Icon, Heading, Text
} from '@chakra-ui/react'
<<<<<<< HEAD
import { React, useState, useEffect, useRef, useContext } from 'react'
=======
import { React, useState, useEffect, useRef } from 'react'
>>>>>>> b1758df978e824ca736f570b223c9e0ce7257646
import logo from '../../assets/logo.png'
import { IoIosSearch } from "react-icons/io";
import user from '../../assets/user.jpg'
import { GrAnnounce } from "react-icons/gr";
import { MdOutlineExitToApp, MdOutlineMenuOpen } from "react-icons/md";
import Warning from '../Warn/Warning';
<<<<<<< HEAD
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { database } from '../../firebase'
import { UserLoggedInContext } from '../../Context/Context';

const topnav = ({ title }) => {
    const { loggedIn, setLoggedIn } = useContext(UserLoggedInContext);
=======

const topnav = ({ title }) => {
>>>>>>> b1758df978e824ca736f570b223c9e0ce7257646
    const topIcons = [
        { icon: GrAnnounce, key: 1 },
        { icon: GrAnnounce, key: 2 },
        { icon: GrAnnounce, key: 3 },
    ]

<<<<<<< HEAD
    const navigate = useNavigate();
=======

>>>>>>> b1758df978e824ca736f570b223c9e0ce7257646
    const [progress, setProgress] = useState(0);
    const [limit, setLimit] = useState(0);


    useEffect(() => {
        const intervalId = setInterval(() => {
            setProgress(prevProgress => prevProgress + (100 / (10 * 60)));
        }, 1000);
        return () => clearInterval(intervalId);
    }, []);

    useEffect(() => {
        if (progress >= limit) {
            setLimit(progress);
        }
    }, [progress, limit]);

<<<<<<< HEAD
    const handleLogout = async (e) => {
        e.preventDefault();
        try {
            await signOut(database);
            setLoggedIn(!loggedIn);
            navigate('/');
        } catch (error) {
            console.error('Logout error:', error.message);
        }
    };

    return (
        <div className='navbar'>
            <Warning limit={limit} zIndex={-1} />
            <HStack boxShadow='xl' h='16' justify={"space-between"} px='32' backgroundColor={"whitesmoke"}>

                <Text color={'#4c00a4'} fontSize={'27px'} fontWeight={'bold'}>profX</Text>

                {/* <Image src={logo} width={'10rem'} /> */}
=======
    // Run effect only once when component mounts
    return (


        <div className='navbar'>
            <Warning limit={limit} zIndex={-1} />


            <HStack boxShadow='xl' h='16' justify={"space-between"} px='32' backgroundColor={"whitesmoke"}>

                <Image src={logo} width={'10rem'} />
>>>>>>> b1758df978e824ca736f570b223c9e0ce7257646
                <InputGroup
                    justify={'center'}
                    boxShadow='md'
                    width={'max-content'}
                    borderRadius={'30px'}
                    outline={'unset'}>
                    <Input type='tel' placeholder='Search' w={'13rem'} />
                </InputGroup>
                <Heading as='h5' fontSize={'23px'} color={'#707070'}>
                    {title}
                </Heading>
                <Stack boxShadow='lg' backgroundColor={"white"} padding={'6px'} borderRadius={'3px'} w={'9rem'}>
                    <HStack gap={8}>
                        <Text fontSize={'11px'} fontWeight={'bold'}>Timer:</Text>
                        <Text fontSize={'11px'} color={'red'} fontWeight={'bold'}>{parseInt(progress)} min</Text>
                    </HStack>
                    <Progress value={progress} height={'6px'} colorScheme='red' borderRadius={'3px'}
                        marginBottom={'3px'} cursor={'pointer'} backgroundColor={'#4C00A4'} />
                </Stack>
                <Menu>
                    <MenuButton as={Button} borderRadius={'50%'} height={'43px'} width={'43px'} padding={'1px'} boxShadow='xl' backgroundColor={'whitesmoke'}>
                        <Image src={user} height={'39px'} width={'39px'} borderRadius={'50%'} />
                    </MenuButton>
                    <MenuList>
                        <MenuItem>Profile</MenuItem>
                    </MenuList>
                </Menu>
                <HStack>
                    {
<<<<<<< HEAD
=======

>>>>>>> b1758df978e824ca736f570b223c9e0ce7257646
                        topIcons.map((icons, index) => {

                            return (
                                <>
                                    <Box key={index}
                                        backgroundColor={'#4C00A4'}
                                        padding={'5px'}
                                        height={'1.5rem'}
                                        borderRadius={'50%'}
                                        transition={'all 0.3s ease'}
                                        cursor={'pointer'}
                                        justifyContent="center"
                                        _hover={{
                                            opacity: '0.8'
                                        }}
                                    >
                                        <Icon as={icons.icon}
                                            color={'white'}
                                            fontSize={'13px'}
                                            justifyItems={'center'} />

                                    </Box>

                                </>
                            )
                        })
                    }


                </HStack>


                <Icon as={MdOutlineExitToApp} fontSize={'33px'} cursor={'pointer'} transition={'0.3s ease all'} _hover={{
                    opacity: '0.5'
<<<<<<< HEAD
                }}
                    onClick={handleLogout}
                />
=======
                }} />

>>>>>>> b1758df978e824ca736f570b223c9e0ce7257646
            </HStack>
        </div>
    )
}
export default topnav;