import { Accordion, AccordionSummary, AccordionDetails, Typography, } from '@mui/material'
import React, { useState } from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'


const LessonAccordion = () => {
    const [expanded, setExpanded] = useState<string | false>(false)

    const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
        setExpanded(isExpanded ? panel : false)
    }
    return (
        <>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                >
                    <Typography>ilk bölüm</Typography>
                </AccordionSummary>
                <AccordionDetails>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt aut nulla saepe necessitatibus ex, aperiam qui consequuntur quis numquam adipisci ullam, itaque voluptates, natus facere neque dolorem laborum a deleniti!</AccordionDetails>
            </Accordion>
            <Accordion
                expanded={expanded === 'panel2'} onChange={handleChange('panel2')}
            >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                >
                    <Typography>ikinci bölüm</Typography>
                </AccordionSummary>
                <AccordionDetails>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt aut nulla saepe necessitatibus ex, aperiam qui consequuntur quis numquam adipisci ullam, itaque voluptates, natus facere neque dolorem laborum a deleniti!</AccordionDetails>
            </Accordion>
            <Accordion
                expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>

                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                >
                    <Typography>ücüncü bölüm</Typography>
                </AccordionSummary>
                <AccordionDetails>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt aut nulla saepe necessitatibus ex, aperiam qui consequuntur quis numquam adipisci ullam, itaque voluptates, natus facere neque dolorem laborum a deleniti!</AccordionDetails>
            </Accordion>
        </>

    )
}

export default LessonAccordion