import React from 'react'
import { Alert, Stack, AlertTitle } from '@mui/material'

export default function LessonAlert() {

    return (
        <Stack spacing={2}>
            <Alert >LessonAlert</Alert>
            <Alert severity='error'>
                <AlertTitle>
                    Erorr
                </AlertTitle>
                LessonAlert
            </Alert>
            <Alert severity='warning'>
                LessonAlert</Alert>
            <Alert severity='info'>LessonAlert</Alert>
            <Alert severity='success'>LessonAlert</Alert>
        </Stack>
    )
}
