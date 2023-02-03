import React from "react";
import { Link } from "react-router-dom";
import MuiList from "../Material/List/List";
import ListItem from "../Material/ListItem/ListItem";
import ListItemButton from "../Material/ListItemButton/ListItemButton";
import ListItemText from "../Material/ListItemText/ListItemText";

const List = ({ list }) => {
  return (
    <MuiList>
      {list.map((item) => (
        <ListItem key={item}>
          <Link to={`/${item}`} style={{ textDecoration: "none" }}>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </Link>
        </ListItem>
      ))}
    </MuiList>
  );
};

export default List;
