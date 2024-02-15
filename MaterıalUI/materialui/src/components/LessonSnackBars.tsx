import React, { useState } from 'react'
import { Button, Snackbar, IconButton } from '@mui/material'
import CloseICon from '@mui/icons-material/Close'


export default function LessonSnackBars() {
    const [openSnackBar, setOpenSnackBar] = useState(false)
    const handleClick = () => {
        setOpenSnackBar(true)
    }
    const handleClose = () => {
        setOpenSnackBar(false)
    }
    const action = (
        <React.Fragment>
            <Button color='secondary' size='small'
                onClick={handleClose}
            >
                Geri Al
            </Button >
            <IconButton>
                <CloseICon sx={{ color: 'white' }}
                    onClick={handleClose}
                />
            </IconButton>
        </React.Fragment>
    )

    return (
        <div>
            <Button onClick={handleClick}>
                SnackBar'ı Aç
            </Button>
            <Snackbar
                open={openSnackBar}
                message='Hata mesajı aldınız.'
                action={action}
                autoHideDuration={2000}
                onClose={handleClose}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            />
        </div>
    )
}
