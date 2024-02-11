import { Box } from '@mui/material'
import React from 'react'

export const LessonBox = () => {

    return (
        <Box
            sx={{
                backgroundColor: 'primary.main',
                color: 'white',
                width: '100px',
                height: '100px',
                padding: '20px',
                '&:hover': {
                    backgroundColor: 'red'
                }
            }}
        >LessonBox</Box>
    )
}
