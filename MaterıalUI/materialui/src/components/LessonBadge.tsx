import React from 'react'
import { Badge, Stack } from '@mui/material'
import MailIcon from '@mui/icons-material/Mail'

export default function LessonBadge() {

    return (
        <Stack direction='row' spacing={2}>
            <Badge badgeContent={4} color="primary">
                <MailIcon />
            </Badge>
            <Badge badgeContent={50} max={40} color="primary">
                <MailIcon />
            </Badge>

            <Badge anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left'
            }} badgeContent={50} max={40} color="secondary">
                <MailIcon />
            </Badge>

            <Badge anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right'
            }} badgeContent={50} max={40} color="secondary">
                <MailIcon />
            </Badge>
        </Stack>

    )
}
