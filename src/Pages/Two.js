import React, { useState } from "react";
import Grid from "../components/Material/Grid/Grid";
import Paper from "../components/Material/Paper/Paper";
import Typography from "../components/Material/Typography/Typography";
import Box from "../components/Material/Box/Box";

const WIDGETS = ["Widget A", "Widget B", "Widget C"];
const saveWidgetsBoxStyles = {
  border: "1px dashed #000",
  width: "100%",
  height: "400px",
  overflow: "scroll",
};
function TwoLine() {
  const [widgets, setWidgets] = useState([]);
  const handleAllowDrop = (e) => {
    e.preventDefault();
  };
  const handleOnDrag = (e, widget) => {
    e.dataTransfer.setData("widgetItem", widget);
    console.log(widget);
  };
  const handleOnDrop = (e) => {
    const data = e.dataTransfer.getData("widgetItem");
    // console.log(e.dataTransfer, data);
    setWidgets((prev) => [...prev, data]);
  };
  return (
    <>
      <Typography variant="h3" component="h1" mb={2}>
        Two Line
      </Typography>
      <Grid container spacing={6}>
        <Grid xs={6}>
          {WIDGETS.map((widget) => (
            <Paper
              draggable
              onDragStart={(e) => handleOnDrag(e, widget)}
              key={widget}
              sx={{
                background: "pink",
                width: "100%",
                marginBottom: "10px",
                padding: "10px",
              }}
            >
              <Typography variant="h4" component="p" color="white">
                {widget}
              </Typography>
            </Paper>
          ))}
        </Grid>
        <Grid xs={6} onDrop={handleOnDrop} onDragOver={handleAllowDrop}>
          <Box sx={saveWidgetsBoxStyles}>
            {widgets.map((widget, index) => (
              <Typography variant="h5" component="p" key={index}>
                {widget}
              </Typography>
            ))}
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default TwoLine;
