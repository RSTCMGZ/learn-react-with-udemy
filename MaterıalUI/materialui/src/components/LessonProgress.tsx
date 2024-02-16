import React from 'react'
import { CircularProgress, Stack, LinearProgress } from '@mui/material'

export default function LessonProgress() {
    return (
        <Stack spacing={2}>
            <CircularProgress />
            <CircularProgress color='error' />
            <CircularProgress color='secondary' />

            <CircularProgress variant='determinate' value={100} color='secondary' />

            <LinearProgress />
            <LinearProgress color='secondary' />
            <LinearProgress color='success' />
            <LinearProgress variant='determinate' value={25} color='success' />

        </Stack>

    )
}
