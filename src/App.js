import React, { useEffect, useRef, useState } from 'react'
import { ChakraProvider, theme } from '@chakra-ui/react'
import Navbar from './Navbar'
import Faq from './Faq.jsx'
import alanBtn from "@alan-ai/alan-sdk-web";
import { scroller } from 'react-scroll'
import { Link, useHistory } from "react-router-dom";
import { Switch, Route } from 'react-router-dom'
import About from './About';
import Home from './Home';


const App = () => {

  const alanBtnInstance = useRef(null);
  const [index, setIndex] = useState(null);
  const [toggleColorFlag, setToggleColorFlag] = useState(false);
  const history = useHistory();

  useEffect(() => {
    if (!alanBtnInstance.current) {
      alanBtnInstance.current = alanBtn({
        key: '9ad00f80d8e216bf1eecec23a9ebb89f2e956eca572e1d8b807a3e2338fdd0dc/stage',
        onCommand: (commandData) => {
          if (commandData.command === 'gotoFaq') {
            scroller.scrollTo(`accordion-item-${commandData.faqId}`, {
              duration: 800,
              delay: 0,
              smooth: 'easeInOutQuart'
            })
            setIndex(commandData.faqId - 1)
          } else if (commandData.command === 'toggleColorMode') {
            setToggleColorFlag(flag => !flag)
          }
          else if (commandData.command === "navigateAboutToPage") {
            history.push('/about');
          }
          else if (commandData.command === "navigateFaqToPage") {
            history.push('/faq');
          }
          else if (commandData.command === "navigateHomeToPage") {
            history.push('/');
          }
        }
      });
    }
  }, []);

  return (
    <ChakraProvider theme={theme}>
      <Navbar toggleColorFlag={toggleColorFlag} />
      <Switch>
        <Route path='/' exact component={Home} />
      </Switch>
      <Switch>
        <Route path='/about' component={About} />
      </Switch>
      <Switch>
        <Route path='/faq' render={Faq} />
      </Switch>
      <Faq setIndex={setIndex} index={index} />
    </ChakraProvider>
  )
}

export default App
