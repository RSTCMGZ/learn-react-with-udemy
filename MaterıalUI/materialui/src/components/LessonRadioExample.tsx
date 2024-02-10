import React, { useState } from 'react'
import { FormControl, FormLabel, FormControlLabel, Radio, RadioGroup, FormHelperText, Button } from '@mui/material'

function LessonRadioExample() {

    const [value, setValue] = useState('')
    const [helperText, setHelperText] = useState('')
    const [error, setError] = useState(false)

    const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        if (value === 'resat') {
            setHelperText('Doğru cevap')
            setError(false)
        } else if (value === 'resatCamgoz') {
            setHelperText('Doğru tabi')
            setError(false)
        } else {
            setHelperText('Lütfen Seçim yapınız')
            setError(true)
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <FormControl error={error}>

                <FormLabel>En Kapsamlı Frontend Eğitimini veren kim?</FormLabel>
                <RadioGroup onChange={handleRadioChange}>
                    <FormControlLabel label='resat' value='resat' control={<Radio />} />
                    <FormControlLabel label='resatCamgoz' value='resatCamgoz' control={<Radio />} />
                </RadioGroup>
                <FormHelperText>{helperText}</FormHelperText>
                <Button type='submit' variant='outlined'>Gönder</Button>
            </FormControl>
        </form>
    )
}

export default LessonRadioExample