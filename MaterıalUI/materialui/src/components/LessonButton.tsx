import React from 'react'
import { Button, Stack } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'


function LessonButton() {
    return (
        <Stack spacing={4}>

            <Stack direction={'row'} alignItems={'center'} justifyContent={'center'} spacing={2}>
                <Button variant='text'>Text</Button>
                <Button variant='outlined'>Outlined</Button>
                <Button variant='contained'>Contained</Button>
            </Stack>
            <Stack direction={'row'} display='block' alignItems={'center'} justifyContent={'center'} spacing={2}>
                <Button variant='text' color='primary'>Mavi</Button>
                <Button variant='text' color='secondary'>secondary</Button>
                <Button variant='text' color='success'>success</Button>
                <Button variant='text' color='error'>danger</Button>
                <Button variant='text' color='warning'>warning</Button>
                <Button variant='text' color='info'>info</Button>
                <Button variant='contained' color='primary'>Mavi</Button>
                <Button variant='contained' color='secondary'>secondary</Button>
                <Button variant='contained' color='success'>success</Button>
                <Button variant='contained' color='error'>danger</Button>
                <Button variant='contained' color='warning'>warning</Button>
                <Button variant='contained' color='info'>info</Button>

                <Button variant='outlined' color='info'>outlined</Button>
                <Button variant='outlined' color='info'>outlined</Button>
                <Button variant='outlined' color='info'>outlined</Button>
            </Stack>
            <Stack direction={'row'} spacing={2}>
                <AddIcon color='error' />

                <Button variant='contained' startIcon={<AddIcon />}>Ekle</Button>
                <Button variant='contained' endIcon={<AddIcon />} onClick={() => alert('tıklandı')} >Ekle</Button>
            </Stack>
        </Stack>

    )
}

export default LessonButton