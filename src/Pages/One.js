/* eslint-disable array-callback-return */
import React, { useState, useRef, useEffect } from "react";
import Grid from "../components/Material/Grid/Grid";
import Typography from "../components/Material/Typography/Typography";

const saveWidgetsBoxStyles = {
  border: "1px dashed #000",
  width: "400px",
  paddingTop: "16px",
};
const widgetItem = {
  height: "100px",
  width: "100px",
  border: "1px dashed #000",
  marginBottom: "16px",
  padding: 0,
};

const haveWidgetItem = {
  width: "100%",
  height: "100%",
  border: "1px solid red",
  background: "red",
};
function OneLine() {
  const [widgets, setWidgets] = useState([]);
  const ALLITEMS = useRef(
    [...Array(9).keys()].map((item) => ({
      id: item,
      have: false,
    }))
  );

  const handleAllowDrop = (e) => {
    e.preventDefault();
  };
  const handleOnDrag = (e, widget, index) => {
    e.dataTransfer.setData("dragIndex", index);
    e.dataTransfer.setData("widgetItem", JSON.stringify(widget));
  };
  const handleOnDrop = (e, index) => {
    const dragIndex = Number(e.dataTransfer.getData("dragIndex"));
    const dropIndex = index;
    const targetObj = JSON.parse(e.dataTransfer.getData("widgetItem"));
    const newData = [];

    for (let i = 0; i < widgets.length; i++) {
      
      newData[i] = widgets[i];

      if (i === dragIndex) {
        if (widgets[dropIndex].have) {
          newData[i] = targetObj;
        } else {
          newData[i] = { id: dropIndex, have: false };
        }
      }

      if (i === dropIndex) {
        if (!widgets[i].have) {
          newData[i] = targetObj;
        } else {
          newData[i] = widgets[i];
        }
      }
    }
    console.log(newData)
    setWidgets(newData);
  };

  useEffect(() => {
    setWidgets(
      ALLITEMS.current.filter((item) =>
        item.id === 0 || item.id === 1 ? (item.have = true) : item
      )
    );
  }, []);

  return (
    <>
      <Typography variant="h3" component="h1" mb={5}>
        One Line
      </Typography>
      <Grid
        container
        spacing={6}
        sx={saveWidgetsBoxStyles}
        justifyContent="space-around"
      >
        {widgets.map((widget, index) => (
          <Grid
            xs={4}
            sx={widgetItem}
            key={widget.id}
            onDrop={(e) => handleOnDrop(e, index)}
            onDragOver={handleAllowDrop}
            id={`${widget.id}${widget.have}`}
          >
            <Grid
              sx={widget.have && haveWidgetItem}
              onDragStart={(e) => handleOnDrag(e, widget, index)}
              draggable
              id={`${widget.id}${widget.have}`}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default OneLine;
