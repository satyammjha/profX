import { Card, CardHeader, CardBody, CardFooter, Heading, HStack, Stack } from '@chakra-ui/react'
import { Input } from '@chakra-ui/react'
import { Select, Button, Text } from '@chakra-ui/react'
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,

} from '@chakra-ui/react'
const Addmarks = () => {

    return (
        <>
            <Card height={'80vh'} width={'70vw'} backgroundColor={'whitesmoke'} padding={'30px'}
                border={'1px solid red'} marginLeft={'13%'} marginTop={'5%'} zIndex={1}>
                <FormControl>
                    <Stack gap={4}>
                        <HStack>
                            <HStack>
                                <HStack>
                                    <FormLabel>Student Name</FormLabel>
                                    <Input type='text' border='0.5px solid black' width={"15vw"} />
                                </HStack>
                                <HStack>
                                    <FormLabel>UID</FormLabel>
                                    <Input type='text' border='0.5px solid black' width={"15vw"} />
                                </HStack>
                                <HStack>
                                    <FormLabel>Section</FormLabel>
                                    <Input type='text' border='0.5px solid black' width={"15vw"} />
                                </HStack>
                            </HStack>
                        </HStack>
                        <HStack>
                            <FormLabel>Physics</FormLabel>
                            <Input type='text' border='0.5px solid black' width={" 40vw"} />
                        </HStack>
                        <HStack gap={4}>
                            <FormLabel>Maths</FormLabel>
                            <Input type='text' border='0.5px solid black' width={" 40vw"} />
                        </HStack>
                        <HStack>
                            <FormLabel>Python</FormLabel>
                            <Input type='text' border='0.5px solid black' width={" 40vw"} />
                        </HStack>

                    </Stack>
                </FormControl>

                <Button colorScheme='green' width={'30rem'} marginTop={'60px'} marginLeft={'30%'}>Update Marks</Button>
            </Card >
        </>
    )
}

export default Addmarks
