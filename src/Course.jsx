import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
function Course({ image, title, describtion }) {
  return (
    <Card >
      <CardMedia sx={{ height: 140 }} image={image} title="Kurslarim" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {describtion}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default Course;
