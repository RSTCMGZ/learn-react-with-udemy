import { Box, TextField, MenuItem } from '@mui/material'
import React, { useState } from 'react'

function LessonSelect() {
    const [country, setCountry] = useState<string[]>([])
    // const handleChange = ()=>{
    //     setValue()
    // }
    return (
        <Box width='250px'>
            {/* <TextField select label='Ülke Seçiniz' fullWidth
                value={country}
                onChange={(e) => setCountry(e.target.value)}>
                <MenuItem value='TR'>Türkiye</MenuItem>
                <MenuItem value='USA'>ABD</MenuItem>
                <MenuItem value='FR'>Fransa</MenuItem>
            </TextField> */}


            <TextField
                SelectProps={{
                    multiple: true,
                }}
                select label='Ülke Seçiniz' fullWidth
                value={country}
                onChange={(e) => setCountry(typeof e.target.value === 'string' ? e.target.value.split(',') : e.target.value)}>
                <MenuItem value='TR'>Türkiye</MenuItem>
                <MenuItem value='USA'>ABD</MenuItem>
                <MenuItem value='FR'>Fransa</MenuItem>
            </TextField>

        </Box>
    )
}

export default LessonSelect