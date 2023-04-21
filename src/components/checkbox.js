import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

import { orange } from '@mui/material/colors';

export const QuestionCheckbox = (
    { ch1, ch2, ch3, ch4, ch5, ch6, others,
        setCh1, setCh2, setCh3, setCh4, setCh5, setCh6, setOthers, setIsLoading }) => {

    const handleChange1 = (event) => {
        setIsLoading(true)
        setCh1(event.target.checked)
        setCh2(event.target.checked)
        setCh3(event.target.checked)
        setCh4(event.target.checked)
        setCh5(event.target.checked)
        setCh6(event.target.checked)
        setOthers(event.target.checked)
    };

    const children = (
        <Box sx={{ flexDirection: 'column', ml: 3 }}>
            <FormControlLabel
                label="ch1"
                control={<Checkbox sx={{
                    color: orange[500],
                    '&.Mui-checked': {
                        color: orange[500],
                    },
                }} checked={ch1} onChange={(e) => {setCh1(e.target.checked); setIsLoading(true)}} />}
            />
            <FormControlLabel
                label="ch2"
                control={<Checkbox sx={{
                    color: orange[500],
                    '&.Mui-checked': {
                        color: orange[500],
                    },
                }} checked={ch2} onChange={(e) => {setCh2(e.target.checked); setIsLoading(true)}} />}
            />
            <FormControlLabel
                label="ch3"
                control={<Checkbox sx={{
                    color: orange[500],
                    '&.Mui-checked': {
                        color: orange[500],
                    },
                }} checked={ch3} onChange={(e) => {setCh3(e.target.checked); setIsLoading(true)}} />}
            />
            <FormControlLabel
                label="ch4"
                control={<Checkbox sx={{
                    color: orange[500],
                    '&.Mui-checked': {
                        color: orange[500],
                    },
                }} checked={ch4} onChange={(e) => {setCh4(e.target.checked); setIsLoading(true)}} />}
            />
            <FormControlLabel
                label="ch5"
                control={<Checkbox sx={{
                    color: orange[500],
                    '&.Mui-checked': {
                        color: orange[500],
                    },
                }} checked={ch5} onChange={(e) => {setCh5(e.target.checked); setIsLoading(true)}} />}
            />
            <FormControlLabel
                label="ch6"
                control={<Checkbox sx={{
                    color: orange[500],
                    '&.Mui-checked': {
                        color: orange[500],
                    },
                }} checked={ch6} onChange={(e) => {setCh6(e.target.checked); setIsLoading(true)}} />}
            />
            <FormControlLabel
                label="others"
                control={<Checkbox sx={{
                    color: orange[500],
                    '&.Mui-checked': {
                        color: orange[500],
                    },
                }} checked={others} onChange={(e) => {setOthers(e.target.checked); setIsLoading(true)}} />}
            />
        </Box>
    );

    return (
        <div className="mb-3">
            <FormControlLabel
                label="All"
                control={
                    <Checkbox
                        checked={ch1 && ch2 && ch3 && ch4 && ch5 && ch6 && others}
                        onChange={handleChange1}
                        sx={{
                            color: orange[500],
                            '&.Mui-checked': {
                                color: orange[500],
                            },
                            '&.MuiCheckbox-indeterminate': {
                                color: orange[500]
                            }
                        }}
                    />
                }
            />
            {children}
        </div>
    );
}