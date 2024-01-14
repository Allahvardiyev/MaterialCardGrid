import "./App.css";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import  Angular from './Image/angular.jpg'
import  Bootstrap from './Image/bootstrap5.png'
import  Ccsharp from './Image/ccsharp.png'
import  Kompleweb from './Image/kompleweb.jpg'
import Course from "./Course";
function App() {
  return (
    <div>
      <AppBar>
        <Toolbar sx={{ fontSize: 30 }}>Kart projesi</Toolbar>
      </AppBar>
      <Container maxWidth="lg">
        <Grid container spacing={2} sx={{ marginTop: 16 }}>
          <Grid item xs={12} md={8} lg={3}>
            <Course
              image={Angular}
              title="Angular"
              describtion="Contrary to popular belief,
               Lorem Ipsum is not simply random text. 
               It has roots in a piece of classical Latin literature 
               from 45 BC, making it over 2000 years old. 
               Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia"
            />
          </Grid>
          <Grid item xs={12} md={8} lg={3}>
          <Course
              image={Bootstrap}
              title=" Bootstrap"
              describtion="Contrary to popular belief,
              Lorem Ipsum is not simply random text. 
              It has roots in a piece of classical Latin literature 
              from 45 BC, making it over 2000 years old. 
              Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia"
            />
          </Grid>
          <Grid item xs={12} md={8} lg={3}>
          <Course
              image={Ccsharp}
              title="Ccsharp"
              describtion="Contrary to popular belief,
              Lorem Ipsum is not simply random text. 
              It has roots in a piece of classical Latin literature 
              from 45 BC, making it over 2000 years old. 
              Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia"
            />
          </Grid>
          <Grid item xs={12} md={8} lg={3}>
          <Course
              image={Kompleweb}
              title="Komleweb"
              describtion="Contrary to popular belief,
              Lorem Ipsum is not simply random text. 
              It has roots in a piece of classical Latin literature 
              from 45 BC, making it over 2000 years old. 
              Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia"
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
