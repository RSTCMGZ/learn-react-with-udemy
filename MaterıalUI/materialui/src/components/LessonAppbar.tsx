import { AppBar, Toolbar, IconButton, Typography, Stack, Button, Menu, MenuItem } from '@mui/material'
import React, { useState } from 'react'
import AppsIcon from '@mui/icons-material/Apps'

function LessonAppbar() {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
    const openControl = Boolean(anchorEl)

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget)
    }
    const handleClose = () => {
        setAnchorEl(null)

    }
    return (
        <AppBar>
            <Toolbar sx={{ justifyContent: 'space-between' }}>
                <IconButton>
                    <AppsIcon />
                    <Typography sx={{
                        color: 'white',
                        marginLeft: '50px'
                    }} variant='h6' component='div' >
                        Navbar Example
                    </Typography>
                </IconButton>
                <Stack direction={'row'}  >
                    <Button sx={{ color: 'white' }}>Anasayfa</Button>
                    <Button sx={{ color: 'white' }}>Hakkımızda</Button>
                    <Button sx={{ color: 'white' }}>Ürünler</Button>
                    <Button sx={{ color: 'white' }}>Fiyatlar</Button>
                    <Button sx={{ color: 'white' }} onClick={handleClick} >İndirimdekiler</Button>
                </Stack>
                <Menu anchorEl={anchorEl} open={openControl} onClose={handleClose}>
                    <MenuItem onClick={handleClose} >Kitaplar</MenuItem>
                    <MenuItem onClick={handleClose}>Defterler</MenuItem>
                </Menu>
            </Toolbar>
        </AppBar>
    )
}

export default LessonAppbar