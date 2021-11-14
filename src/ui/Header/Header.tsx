import React, { FunctionComponent, useState } from "react";
import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material/styles/createTheme";
import { AppBar, Hidden, Link, Toolbar, Typography } from "@mui/material";
import HeaderMenuButton from "@/ui/Header/HeaderMenuButton";

//Material UI


const Header: FunctionComponent<any> = (props) => {

  const [navOptionIndex, setNavOptionIndex] = useState<number | undefined>(0);

  const headerClasses = headerStyles();
  const toolbarClasses = toolbarStyles();

  // const navigateTo = (tabIndex: number) => {
  //   setNavOptionIndex(tabIndex);
  //   switch (tabIndex) {
  //     case 0:
  //       history.push("/");
  //       break;
  //     case 1:
  //       history.push("/");
  //       break;
  //     default:
  //       history.push(`/`);
  //     // history.push(`/${navOptions[tabIndex]}`)
  //   }
  // };

  const navOptions = ["Feed", "Create"];

  return (
      <AppBar
          position="fixed"
          color="primary"
          className={headerClasses.root}
      >
        <Toolbar className={toolbarClasses.root} variant="dense" disableGutters={false}>
          <Typography
              variant="h6"
              component="h2"
              className={toolbarClasses.grow}
              sx={{
                color: "#fff", fontSize: "1.15rem"
              }}
          >
            {/*//@ts-ignore TODO: Type 'EventTarget & Element' provides no match for the signature '(prevState: null): null'*/}
            <Link to="/" className={toolbarClasses.titleLink}>
              <Hidden smDown>
                NFT Marketplace
              </Hidden>
              <Hidden smUp>
                NFT Market
              </Hidden>
            </Link>
          </Typography>
          <div className={toolbarClasses.grow} />
          <HeaderMenuButton>Clicko!</HeaderMenuButton>
        </Toolbar>

      </AppBar>
  );

  // {navOptions.map((tab, index) => (
  //     <Tab
  //         key={"tab-" + tab}
  //         id={tab}
  //         onSelect={() => navigateTo(index)}
  //         isSelected={index === navOptionIndex}
  //         aria-controls={`panel-${tab}`}
  //     >
  //       {tab}
  //     </Tab>
  // ))}
};

const headerStyles = makeStyles((theme: Theme) => ({
  root: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  }
}));

const toolbarStyles = makeStyles((theme:Theme) => ({
  root: {
    "& > *": {
      [theme.breakpoints.down("sm")]: {
        marginLeft: theme.spacing(0),
        marginRight: theme.spacing(0)
      },
      [theme.breakpoints.up("md")]: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1)
      }
    },
    borderTop: 0,
    borderLeft: 0,
    borderRight: 0,
    borderStyle: "solid",
    borderColor: theme.palette.secondary.main
  },
  grow: {
    flexGrow: 1,
    textAlign: "center",
    justifyContent: "center"
  },
  titleLink: {
    color: "#fff",
    textDecoration: "none"
  }
}))

export default Header;
