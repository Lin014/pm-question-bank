import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

import { orange } from '@mui/material/colors';

export const QuestionCheckbox = (
    { ch1, ch2, ch3, ch4, ch5, ch6, ch7, ch8, ch9, ch13, others,
        setCh1, setCh2, setCh3, setCh4, setCh5, setCh6, setCh7, setCh8, setCh9, setCh13, setOthers, setIsLoading }) => {

    const handleChange1 = (event) => {
        setIsLoading(true)
        setCh1(event.target.checked)
        setCh2(event.target.checked)
        setCh3(event.target.checked)
        setCh4(event.target.checked)
        setCh5(event.target.checked)
        setCh6(event.target.checked)
        setCh7(event.target.checked)
        setCh8(event.target.checked)
        setCh9(event.target.checked)
        setCh13(event.target.checked)
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
                label="ch7"
                control={<Checkbox sx={{
                    color: orange[500],
                    '&.Mui-checked': {
                        color: orange[500],
                    },
                }} checked={ch7} onChange={(e) => {setCh7(e.target.checked); setIsLoading(true)}} />}
            />
            <FormControlLabel
                label="ch8"
                control={<Checkbox sx={{
                    color: orange[500],
                    '&.Mui-checked': {
                        color: orange[500],
                    },
                }} checked={ch8} onChange={(e) => {setCh8(e.target.checked); setIsLoading(true)}} />}
            />
            <FormControlLabel
                label="ch9"
                control={<Checkbox sx={{
                    color: orange[500],
                    '&.Mui-checked': {
                        color: orange[500],
                    },
                }} checked={ch9} onChange={(e) => {setCh9(e.target.checked); setIsLoading(true)}} />}
            />
            <FormControlLabel
                label="ch13"
                control={<Checkbox sx={{
                    color: orange[500],
                    '&.Mui-checked': {
                        color: orange[500],
                    },
                }} checked={ch13} onChange={(e) => {setCh13(e.target.checked); setIsLoading(true)}} />}
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
                        checked={ch1 && ch2 && ch3 && ch4 && ch5 && ch6 && ch7 && ch8 && ch9 && ch13 && others}
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