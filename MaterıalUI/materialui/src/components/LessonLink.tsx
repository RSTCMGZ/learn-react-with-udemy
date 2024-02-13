import { Link, Box } from '@mui/material'
import React from 'react'

export default function LessonLink() {
    return (
        <Box>
            {/* <Link href='https://www.google.com'>asdas</Link>
            <Link href='https://www.google.com' color='error'>asdas</Link>
            <Link href='https://www.google.com' color='error' variant='body2' >asdas</Link> */}
            {/* <Link href='https://www.google.com' underline='none'>Ekle</Link>
            <Link href='https://www.google.com' underline='hover'>Ekle</Link> */}

            <Link component="button"
                onClick={() => {
                    console.log('tıkladın');
                }}
            >Ekle</Link>

        </Box>
    )
}
