import React from 'react';
import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import HeroContainer from './Components/HeroContainer';
import overrides from "./theme/index"

function App() {


  return (
    <ChakraProvider theme={overrides}>
      <HeroContainer />
    </ChakraProvider>
  );
}

export default App;
