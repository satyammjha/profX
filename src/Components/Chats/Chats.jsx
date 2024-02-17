import React, { useEffect, useState } from 'react';
import Chatbot from '../Chatbot/Chatbot';
import { Stack, Card, HStack, Input, Heading, Button, Text } from '@chakra-ui/react';
import Todo from '../Dashboard/Todo/Todo';

const App = () => {
  const [num, setNum] = useState(0)



  const [question, setQuestion] = useState('');
  const [questionsList, setQuestionsList] = useState([]);

  const handleAddQuestion = () => {
    setNum(num + 1)
    if (question.trim() !== '') {
      setQuestionsList([...questionsList, question]);
      setQuestion('');
    }
  };



  // useEffect(() => {
  //   // Dynamically load the Botpress WebChat scripts
  //   const script1 = document.createElement('script');
  //   script1.src = 'https://cdn.botpress.cloud/webchat/v1/inject.js';
  //   script1.async = true;
  //   document.body.appendChild(script1);

  //   const script2 = document.createElement('script');
  //   script2.src = 'https://mediafiles.botpress.cloud/15bdb5f2-76c2-430a-81f6-e8cded4393ed/webchat/config.js';
  //   script2.defer = true;
  //   document.body.appendChild(script2);

  //   // Cleanup function to remove the scripts when the component unmounts
  //   return () => {
  //     document.body.removeChild(script1);
  //     document.body.removeChild(script2);
  //   };
  // }, []);

  // useEffect(() => {
  //   // Open the chatbot when the WebChat scripts are loaded
  //   window.botpressWebChat?.onEvent(() => {
  //     window.botpressWebChat?.sendEvent({ type: "show" });
  //   }, ["LIFECYCLE.LOADED"]);
  // }, []);

  return (
    <div>
      <Card marginLeft={'10rem'}>
        <Stack spacing={4}>
          <HStack>
            <Heading as={'h1'} fontSize={'23px'}>Question</Heading>
            <Input value={question} onChange={(e) => setQuestion(e.target.value)} width={'10rem'} border={'1px solid red'} />
          </HStack>
          <Button width={'7rem'} colorScheme='red' onClick={() => {
            handleAddQuestion();
          }}>Add Question</Button>

          <Stack>
            <Heading fontSize={'20px'} marginTop={'30px'}>Questions:</Heading>
            {questionsList.map((q, index) => (
              (

                <>
                  {/* <Text key={index}>{num}</Text> */}
                  <Text key={index}>{q}</Text>

                </>
              )))}
          </Stack>
        </Stack>
      </Card>

      <Card height={'90vh'} marginLeft={'-10rem'}>
        <Chatbot />
      </Card>
    </div>
  );
};

export default App;
