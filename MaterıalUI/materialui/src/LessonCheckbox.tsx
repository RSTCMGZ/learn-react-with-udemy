import { Box, FormControl, FormLabel, FormGroup, FormControlLabel, Checkbox } from '@mui/material'
import React, { useState } from 'react'

function LessonCheckbox() {

    const [isAccept, setIsAccept] = useState(false)
    const [knowLegde, setKnowLegde] = useState<string[]>([])
    console.log(knowLegde);

    const handleKnowLedgeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const index = knowLegde.indexOf(event.target.value)
        if (index === -1) {
            setKnowLegde([...knowLegde, event.target.value])
        } else {
            setKnowLegde(knowLegde.filter((item) => item !== event.target.value))
        }
    }
    return (
        <Box>

            <Box>
                <FormControl>
                    <FormLabel>Eğitim Durumu</FormLabel>
                    <FormGroup row >
                        <FormControlLabel control={<Checkbox />} disabled label="İlkokul" />

                        <FormControlLabel control={<Checkbox defaultChecked />} label="Lise" />

                        <FormControlLabel control={<Checkbox />} label="Üniversite" />
                    </FormGroup>
                </FormControl>
            </Box>
            <Box>
                <FormControl>
                    <FormLabel>Eğitim Durumu</FormLabel>
                    <FormGroup row >
                        <FormControlLabel control={<Checkbox checked={isAccept}
                            onChange={(e) => setIsAccept(e.target.checked)}
                        />} label="Kullanım koşullarını kabul ediyorum." />
                    </FormGroup>
                </FormControl>
            </Box>


            <Box>
                <FormControl>
                    <FormLabel>Frontend Neleri Biliyorsun?</FormLabel>
                    <FormGroup row >
                        <FormControlLabel value='react' control={<Checkbox checked={knowLegde.includes('react')}
                            onChange={handleKnowLedgeChange}
                        />} label="React JS" />
                        <FormControlLabel value='angular' control={<Checkbox checked={knowLegde.includes('angular')}
                            onChange={handleKnowLedgeChange}
                        />} label="Angular JS" />
                        <FormControlLabel value='vue' control={<Checkbox checked={knowLegde.includes('vue')}
                            onChange={handleKnowLedgeChange}
                        />} label="Vue JS" />
                    </FormGroup>
                </FormControl>
            </Box>

        </Box>

    )
}

export default LessonCheckbox