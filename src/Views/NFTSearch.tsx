import React, { FunctionComponent, useState } from 'react';

//Material UI
import { FormControl, Grid, Icon, InputAdornment, InputLabel, OutlinedInput } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

//Types
import { INFTSearch } from "@/@types/views";

const NFTSearch: FunctionComponent<INFTSearch> = (props) => {

    const { searchValue, setSearchValue } = props;

    return (
        <Grid container className="nft-search-container" sx={{ width: "80%" }}>
            <FormControl sx={{ m: 1, width: "350px" }} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">Search NFT by name</InputLabel>
                <OutlinedInput
                    fullWidth
                    id="outlined-adornment-password"
                    type="text"
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    endAdornment={
                        <InputAdornment position="end">
                            <Icon>
                                <SearchIcon/>
                            </Icon>
                        </InputAdornment>
                    }
                    label="Password"
                />
            </FormControl>
        </Grid>
    );
};

export default NFTSearch;
