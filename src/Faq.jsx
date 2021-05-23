import { Accordion, AccordionButton, AccordionItem, AccordionPanel } from '@chakra-ui/accordion'
import { Box, Flex, Heading, Text } from '@chakra-ui/layout'
import React from 'react'
import FAQ_DATA from './faq.json';

const Faq = ({ index, setIndex }) => {
    return (
        <Flex direction='column' p='4'>
            <Box mb='8'>
                <Heading size='md'>Frequently Asked questions</Heading>
            </Box>
            <Accordion allowToggle index={index}>
                {
                    FAQ_DATA.map(faq => (
                        <AccordionItem key={faq.id} name={`accordion-item-${faq.id}`}>
                            <AccordionButton onClick={() => setIndex(faq.id - 1)}>
                                <Box flex='1' textAlign='left'>
                                    <Text fontWeight='semibold'>{faq.question}</Text>
                                </Box>
                            </AccordionButton>
                            <AccordionPanel pb='4'>
                                {faq.answer}
                            </AccordionPanel>
                        </AccordionItem>
                    ))
                }
            </Accordion>
        </Flex>
    )
}

export default Faq;
