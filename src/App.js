import React, { useEffect, useRef, useState } from 'react';
import Header from './Main/Header';
import alanBtn from "@alan-ai/alan-sdk-web";
import { ChakraProvider } from '@chakra-ui/react';
import './Main/faq.css';
import Faqss from './Main/Faq'
function App() {

  const alanBtnInstance = useRef(null);
  const [index, setIndex] = useState(null);

  useEffect(() => {
      if (!alanBtnInstance.current) {
          alanBtnInstance.current = alanBtn({
              key: 'b5d9e577b0305f361fdce6ca2010011a2e956eca572e1d8b807a3e2338fdd0dc/stage',
              onCommand: (commandData) => {
              if (commandData.command === 'gotoFaq') {
                  setIndex(commandData.faqId - 1)
                }
              }
          });
      }
  }, []);

  return (
    <div className="App">
      <Header />
      <div class="alan-btn"></div>
      <ChakraProvider>
        <Faqss index={index} setIndex={setIndex}/>
      </ChakraProvider>
    </div>
  );
}

export default App;