import { BottomNavigation, BottomNavigationAction } from '@mui/material'
import RestoreICo from '@mui/icons-material/Restore'
import FavoriteIcon from '@mui/icons-material/Favorite'
import LocationOnICon from '@mui/icons-material/LocationOn'
import React, { useState } from 'react'


export default function LessonBottomNavigation() {
    const [value, setValue] = useState(0)

    return (
        <BottomNavigation showLabels value={value} sx={{ width: '100%', position: 'absolute', bottom: 0 }}
            onChange={(event, newValue) => {
                setValue(newValue)
            }}
        >
            <BottomNavigationAction icon={<RestoreICo />} label='Öncekiler' />
            <BottomNavigationAction icon={<FavoriteIcon />} label='Sevdiklerim' />
            <BottomNavigationAction icon={<LocationOnICon />} label='Konumum' />
        </BottomNavigation>
    )
}
