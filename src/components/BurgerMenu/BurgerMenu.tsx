import React from "react";
import ReactDOM from "react-dom";
import { Theme, List, ListItem, useTheme, Drawer, ListItemText } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Burger from "react-css-burger";
import { useLocation, useNavigate } from "react-router-dom";
import { scrollTo, sleep } from "src/utils";

const useStyles = makeStyles((theme: Theme) => ({
  root: {},
  burgerContainer: {
    display: "flex",
    position: "fixed",
    top: 0,
    right: 0,
    justifyContent: "flex-end",
    paddingRight: 20,
    zIndex: 100,
  },
}));

interface Props {
  links: string[][];
}

type Anchor = "top" | "left" | "bottom" | "right";

const BurgerMenu: React.FC<Props> = ({ links }) => {
  const classes = useStyles();
  const theme = useTheme();
  const navigate = useNavigate();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const location = useLocation();

  const toggleDrawer =
    (anchor: Anchor, open: boolean) => (event: React.KeyboardEvent | React.MouseEvent | undefined | {}) => {
      setState({ ...state, [anchor]: open });
    };

  const handleLinkClick = async (url: string, id = "") => {
    if (id) {
      let ref: Element = ReactDOM.findDOMNode(document.getElementById(id)) as Element;
      console.log(ref);
      if (ref?.scrollIntoView) {
        ref.scrollIntoView();
      }
    }
    url[0] === "/" ? navigate(url) : window.open(url, "_blank");
    await sleep(1000);
    toggleDrawer("right", false)(undefined);
  };

  return (
    <div className={classes.root}>
      <Drawer
        anchor={"right"}
        open={state["right"]}
        onClose={toggleDrawer("right", false)}
        PaperProps={{ style: { width: "100%", maxWidth: 300, background: "black" } }}
      >
        <List>
          {links.map(([name, link, id], idex) => (
            <ListItem button key={idex} onClick={() => handleLinkClick(link, id)}>
              <ListItemText className="center" primary={name} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <div className={classes.burgerContainer}>
        <Burger
          onClick={toggleDrawer("right", true)}
          active={state.right}
          burger="slider"
          color={theme.palette.secondary.main}
          hoverOpacity={0.8}
          scale={1.2}
        />
      </div>
    </div>
  );
};

export default BurgerMenu;
