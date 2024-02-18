import './App.css';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Course from './Course';
import Angular from "../src/images/angular.jpg"
import Bootstrap from "../src/images/bootstrap5.png"
import Ccsharp from "../src/images/ccsharp.png"
import Komple from "../src/images/kompleweb.jpg"

function App() {
  return (
    <div>
      <AppBar>
        <Toolbar sx={{ fontSize: 30, }}>
          Kart Projesi
        </Toolbar>
      </AppBar>
      <Container maxWidth="lg">
        <Grid container spacing={2} sx={{ marginTop: 10 }}>
          <Grid item xs={12} md={6} lg={3}>
            <Course
              image={Angular}
              title='Angular'
              description='   Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, placeat quia cumque voluptatem blanditiis dolorem vitae error, recusandae, voluptas incidunt ducimus et qui sed aliquam architecto cupiditate provident quidem facere?'
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>

            <Course
              image={Bootstrap}
              title='Bootstrap'
              description='   Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, placeat quia cumque voluptatem blanditiis dolorem vitae error, recusandae, voluptas incidunt ducimus et qui sed aliquam architecto cupiditate provident quidem facere?'
            />

          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <Course
              image={Ccsharp}
              title='Ccsharp'
              description='   Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, placeat quia cumque voluptatem blanditiis dolorem vitae error, recusandae, voluptas incidunt ducimus et qui sed aliquam architecto cupiditate provident quidem facere?'
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <Course
              image={Komple}
              title='Komple'
              description='   Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, placeat quia cumque voluptatem blanditiis dolorem vitae error, recusandae, voluptas incidunt ducimus et qui sed aliquam architecto cupiditate provident quidem facere?'
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
