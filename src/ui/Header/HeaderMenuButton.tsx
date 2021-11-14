import React, { FunctionComponent, SyntheticEvent } from 'react';
import classNames from "classnames";

//Material UI
import { Button } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

const HeaderMenuButton: FunctionComponent<any> = (props) => {

    const onClick = (evt: SyntheticEvent) => {
        console.log('clicked');
    }

    return (
        <Button
            color="secondary"
            size="small"
            variant="contained"
            onClick={onClick}
            startIcon={<MenuIcon/>}
            className={classNames('Button', 'HeaderMenuButton')}
        >
            {props.children}
        </Button>
    );
};

export default HeaderMenuButton;
