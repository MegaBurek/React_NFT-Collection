import React, { FunctionComponent, useEffect, useState } from 'react';

//Material UI
import { Grid, Typography } from "@mui/material";

//Custom components
import NFTSearch from "Views/NFTSearch";
import NFTSortFilter from "Views/NFTSortFilter";
import NFTList from "Views/NFTList";
import { NFTservice } from "Services/NFTservice";
import useDebounce from "@/hooks/useDebounce";

const NFTPage: FunctionComponent<any> = (props) => {

    const [searchValue, setSearchValue] = useState<string | undefined>(undefined);

    const debouncedSearchTerm = useDebounce(searchValue, 300);

    useEffect(
        () => {
            if (debouncedSearchTerm) {
                NFTservice.searchNFT(debouncedSearchTerm).then((resp: any) => {
                    if(resp){
                        console.log(resp);
                    }
                }).catch((err: any) => {
                    console.error(err);
                })
            } else {
                setSearchValue(undefined);
            }
        },
        [debouncedSearchTerm]
    );

    return (
        <Grid container direction="column" justifyContent="center" alignItems="center">
            <Grid item sx={{ width: "100%" }}>
                <Grid container direction="column" justifyContent="center" alignItems="center" marginBottom="10px">
                    <Typography variant="h1" gutterBottom marginTop="10px">Explore NFTs</Typography>
                    <NFTSearch searchValue={searchValue} setSearchValue={setSearchValue}/>
                    <NFTSortFilter/>
                </Grid>
            </Grid>
            <Grid item xs={12} md={12}>
                <NFTList/>
            </Grid>
        </Grid>
    );
};

export default NFTPage;
