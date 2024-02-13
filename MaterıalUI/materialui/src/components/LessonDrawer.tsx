import React, { useState } from 'react'
import { Drawer, Box, IconButton, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'


export default function LessonDrawer() {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <>
            <IconButton size='large' onClick={() => setIsOpen(true)}>
                <MenuIcon>

                </MenuIcon>
            </IconButton>
            <Drawer open={isOpen} anchor='right' onClose={() => setIsOpen(false)}>
                <Box width='250px' textAlign='center'>
                    <Typography variant='h6' component={'div'}>Soldaki Panel</Typography>
                </Box>
            </Drawer>
        </>
    )
}
