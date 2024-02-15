import { Dialog, DialogContent, DialogContentText, DialogActions, Button, DialogTitle } from '@mui/material'
import React, { useState } from 'react'

export default function LessonDialog() {
    const [dialogOpen, setDialogOpen] = useState(false)

    return (
        <>
            <Button onClick={() => setDialogOpen(true)}>Dialogu Aç</Button>
            <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
                <DialogTitle>Hangisini seviyorsun?</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Frontend Frameworklerinden hangisini seviyorsunuz?
                    </DialogContentText>
                    <DialogActions>
                        <Button onClick={() => setDialogOpen(false)}>Angular</Button>
                        <Button onClick={() => setDialogOpen(false)}>React Js</Button>
                    </DialogActions>
                </DialogContent>
            </Dialog>
        </>
    )
}
