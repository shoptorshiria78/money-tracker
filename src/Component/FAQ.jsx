
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Fade from '@mui/material/Fade';
import { useState } from 'react';

const FAQ = () => {

    const [expanded, setExpanded] = useState(false);

    const handleExpansion = () => {
        setExpanded((prevExpanded) => !prevExpanded);
    };

    return (
        <div className='w-[1200px] mx-auto mb-20'>
            <Typography sx={{textAlign:"center", fontWeight:700, fontSize:32, color:"#41B06E", my:10}}>Some FAQ Of Money Management</Typography>
            <Accordion
                expanded={expanded}
                onChange={handleExpansion}
                slots={{ transition: Fade }}
                slotProps={{ transition: { timeout: 400 } }}
                sx={{
                    '& .MuiAccordion-region': { height: expanded ? 'auto' : 0 },
                    '& .MuiAccordionDetails-root': { display: expanded ? 'block' : 'none' },
                    bgcolor:"#41B06E", color:"white"
                }}
            >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    <Typography>How can I create a budget?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                    Start by tracking your income and expenses.Categorize your expenses (e.g., housing, transportation, groceries).Set spending limits for each category based on your income.Monitor your spending regularly and adjust your budget as needed.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion sx={{ bgcolor:"#41B06E", color:"white"}}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                >
                    <Typography>What is the best way to save money?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                    Set specific savings goals, whether short-term (e.g., vacation) or long-term (e.g., retirement).Automate your savings by setting up automatic transfers to a savings account.Reduce unnecessary expenses and prioritize your spending based on your goals.Consider investing your savings to potentially earn higher returns over time.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion sx={{ bgcolor:"#41B06E", color:"white"}}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                >
                    <Typography>How much should I save for emergencies?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                    Aim to have an emergency fund that covers 3-6 months worth of living expenses.Start with a small goal, such as $1,000, and gradually build up your emergency fund over time.Keep your emergency fund in a separate savings account that is easily accessible in case of unexpected expenses.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion sx={{ bgcolor:"#41B06E", color:"white"}}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                >
                    <Typography>What is the difference between saving and investing?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                    Saving involves setting aside money for future use in low-risk, easily accessible accounts (e.g., savings accounts, certificates of deposit).Investing involves purchasing assets (e.g., stocks, bonds, real estate) with the expectation of earning a return over time, usually with higher risk but potentially higher rewards compared to saving.
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    );
};

export default FAQ;