import React from 'react'
import { Card, CardActions, CardContent, CardMedia, Typography, Button, Stack } from '@mui/material'

const LessonCard = () => {
    return (
        <Stack direction='row' spacing={2} >
            <Card sx={{
                width: 350,
            }}>
                <CardMedia
                    height='150px'
                    component='img'
                    image='https://source.unsplash.com/random'
                />
                <CardContent>
                    <Typography variant='h5' component='div'>
                        Başlığım
                    </Typography>
                    <Typography variant='body2' component='p'>
                        Başlığım Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum reprehenderit ab adipisci ratione repellat ipsa. Cumque velit aspernatur, ipsam quis culpa, obcaecati voluptas aliquid itaque nemo quasi nihil cupiditate animi?
                    </Typography>
                </CardContent>
                <CardActions sx={{ display: 'flex', justifyContent: 'space-between', padding: '10px' }}>
                    <Button sx={{ backgroundColor: 'red', color: 'white' }}>Temizle</Button>
                    <Button sx={{ backgroundColor: 'green', color: 'white' }}>Kaydet</Button>
                </CardActions>
            </Card>
            <Card sx={{
                width: 350,
            }}>
                <CardMedia
                    height='150px'
                    component='img'
                    image='https://source.unsplash.com/random'
                />
                <CardContent>
                    <Typography variant='h5' component='div'>
                        Başlığım
                    </Typography>
                    <Typography variant='body2' component='p'>
                        Başlığım Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum reprehenderit ab adipisci ratione repellat ipsa. Cumque velit aspernatur, ipsam quis culpa, obcaecati voluptas aliquid itaque nemo quasi nihil cupiditate animi?
                    </Typography>
                </CardContent>
                <CardActions sx={{ display: 'flex', justifyContent: 'space-between', padding: '10px' }}>
                    <Button sx={{ backgroundColor: 'red', color: 'white' }}>Temizle</Button>
                    <Button sx={{ backgroundColor: 'green', color: 'white' }}>Kaydet</Button>
                </CardActions>
            </Card>
            <Card sx={{
                width: 350,
            }}>
                <CardMedia
                    height='150px'
                    component='img'
                    image='https://source.unsplash.com/random'
                />
                <CardContent>
                    <Typography variant='h5' component='div'>
                        Başlığım
                    </Typography>
                    <Typography variant='body2' component='p'>
                        Başlığım Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum reprehenderit ab adipisci ratione repellat ipsa. Cumque velit aspernatur, ipsam quis culpa, obcaecati voluptas aliquid itaque nemo quasi nihil cupiditate animi?
                    </Typography>
                </CardContent>
                <CardActions sx={{ display: 'flex', justifyContent: 'space-between', padding: '10px' }}>
                    <Button sx={{ backgroundColor: 'red', color: 'white' }}>Temizle</Button>
                    <Button sx={{ backgroundColor: 'green', color: 'white' }}>Kaydet</Button>
                </CardActions>
            </Card>

            <Card sx={{
                width: 350,
            }}>
                <CardMedia
                    height='150px'
                    component='img'
                    image='https://source.unsplash.com/random'
                />
                <CardContent>
                    <Typography variant='h5' component='div'>
                        Başlığım
                    </Typography>
                    <Typography variant='body2' component='p'>
                        Başlığım Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum reprehenderit ab adipisci ratione repellat ipsa. Cumque velit aspernatur, ipsam quis culpa, obcaecati voluptas aliquid itaque nemo quasi nihil cupiditate animi?
                    </Typography>
                </CardContent>
                <CardActions sx={{ display: 'flex', justifyContent: 'space-between', padding: '10px' }}>
                    <Button sx={{ backgroundColor: 'red', color: 'white' }}>Temizle</Button>
                    <Button sx={{ backgroundColor: 'green', color: 'white' }}>Kaydet</Button>
                </CardActions>
            </Card>

        </Stack>


    )
}

export default LessonCard