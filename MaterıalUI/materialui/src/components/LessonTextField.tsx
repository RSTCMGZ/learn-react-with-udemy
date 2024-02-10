import React, { useState } from 'react'
import { InputAdornment, Stack, TextField } from '@mui/material'


function LessonTextField() {

    const [value, setValue] = useState('')

    return (
        <Stack spacing={4}>
            <Stack direction={'row'} spacing={2}>
                <TextField label='Ad' />
                <TextField label='Ad' variant='outlined' />
                <TextField label='Ad' variant='filled' />
                <TextField label='Ad' variant='standard' />
                <TextField label='Ad' variant='outlined' size='small' color='error' />

                <TextField label='Ad' variant='outlined'
                    helperText='Lütfen isminizi giriniz' />

                <TextField type='password' label='Ad' variant='outlined' helperText='Lütfen isminizi giriniz' />

                <TextField type='password' label='Ad' variant='outlined' disabled helperText='Lütfen isminizi giriniz' />

                <TextField type='password' label='Ad' variant='outlined' inputProps={{ readOnly: true }} helperText='Lütfen isminizi giriniz' />

                <TextField label='Toplam' variant='outlined' inputProps={{
                    startAdornment: (
                        <InputAdornment position='start'>TL </InputAdornment>
                    )
                }} />

                <TextField inputProps={{
                    endAdornment: (
                        <InputAdornment position='end'>TL </InputAdornment>
                    )
                }} />

            </Stack>
            <Stack direction={'row'}>
                <TextField
                    onChange={(e) => setValue(e.target.value)}
                    value={value}
                    type='password' label='Şifre' variant='outlined' helperText={!value ? 'Lütfen şifrenizi giriniz' : 'Şifrenizi kimseyle paylaşmayınız'} />

            </Stack>
        </Stack>
    )
}

export default LessonTextField