import React from 'react'
import { Stack, TextField } from '@mui/material'


function LessonTextField() {
    return (
        <Stack spacing={4}>
            <Stack direction={'row'} spacing={2}>
                <TextField label='Ad' />
                <TextField label='Ad' variant='outlined' />
                <TextField label='Ad' variant='filled' />
                <TextField label='Ad' variant='standard' />
            </Stack>
        </Stack>
    )
}

export default LessonTextField