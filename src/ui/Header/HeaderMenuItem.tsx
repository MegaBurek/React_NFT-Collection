import React from 'react';
import { Icon, ListItemIcon, MenuItem, Typography } from "@mui/material";

//Types
import { IHeaderMenuItem } from "@/@types/ui";

const HeaderMenuItem = React.forwardRef<HTMLLIElement, IHeaderMenuItem>((props, ref) => {
    const {onClick, label, icon} = props;

    return (
        <MenuItem onClick={onClick} ref={ref}>
            {icon ? (
                <ListItemIcon style={{minWidth: 32, color: "#000"}}>
                    <Icon>{icon}</Icon>
                </ListItemIcon>
            ) : null}
            {label ? <Typography variant="button">{label}</Typography> : null}
        </MenuItem>
    );
});

export default HeaderMenuItem;
