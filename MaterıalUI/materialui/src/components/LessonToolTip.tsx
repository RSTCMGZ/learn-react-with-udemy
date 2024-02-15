import React from 'react'
import { Tooltip, IconButton } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
export default function LessonToolTip() {
    return (
        <Tooltip title='Sil' placement='top'>
            <IconButton>
                <DeleteIcon />
            </IconButton>
        </Tooltip>
    )
}
