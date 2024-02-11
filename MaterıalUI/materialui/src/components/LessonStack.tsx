import { Divider, Stack } from '@mui/material'
import React from 'react'

export const LessonStack = () => {
    return (
        <Stack direction={{ xs: 'column', sm: 'row' }}
            justifyContent='center'
            alignItems='center'
            spacing={{ xs: 1, sm: 2, md: 4 }}
            divider={<Divider orientation='vertical' flexItem />}
        >

            <div>1</div>
            <div>2</div>
            <div>3</div>
        </Stack>
    )
}
