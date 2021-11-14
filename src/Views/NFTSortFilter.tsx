import React, { FunctionComponent, useState } from 'react';

//Material UI
import { FormControl, FormControlLabel, Grid, InputLabel, MenuItem, Select, Switch } from "@mui/material";

const NFTSortFilter: FunctionComponent<any> = (props) => {

    const [NFT_sort, Set_NFT_sort] = useState<string | number>("");
    const [NFT_group_filter, Set_NFT_group_filter] = useState<string | number>("");
    const [NFT_tag_filter, Set_NFT_tag_filter] = useState<string | number>("");
    const [NFT_licence_filter, Set_NFT_licence_filter] = useState<string | number>("");

    const filter_labels = ['SolSea', 'Verified', 'NSFW'];
    const NFT_sort_labels = ['Price Asc.', 'Price Desc.', 'Rarity Rank Asc', 'Rarity Rank Desc.', 'Created Asc.', 'Created Desc.', 'Listed Asc.',
        'Listed Desc.', 'Likes Asc.', 'Likes Desc.', 'Listed Asc.', 'Listed Desc.'];
    const NFT_group_filter_labels = ['All', 'Collection', 'Single Piece'];
    const NFT_tag_filter_labels = ['Digital', 'Physical', 'Immeterial', 'Privliege', 'Metaverse', 'Art', 'Collectible', 'Artifact', 'Trading Card', 'Sound',
        'Music', 'Music Theme', 'Sound Effect', 'Performance', 'PFP', 'Audio', 'Graphics', '2D', '3D', 'Sourcecode', 'Trademark', 'Font', 'Painting'];
    const NFT_licence_filter_labels = ['Reproduction/Commercial exploitation', 'Public/Non-commercial', 'Pentesting Licences'];

    return (
        <Grid container direction="row" alignItems="center" justifyContent="space-evenly"
              sx={{ width: "90%" }}
        >
            <Grid item xs={4}>
                {filter_labels.map((filter, i) => (
                    <FormControlLabel control={<Switch/>} label={filter} key={filter + i}/>
                ))}
            </Grid>
            <Grid item xs={4}>
                <Grid container direction="row" alignItems="center" justifyContent="center" columnSpacing={4}>
                    <Grid item xs={3}>
                        <FormControl fullWidth sx={{ minWidth: 120 }}>
                            <InputLabel id="demo-simple-select-label">Sort by...</InputLabel>
                            <Select
                                labelId="nft-sort-select"
                                id="nft-sort-select"
                                value={NFT_sort}
                                label="Sort by..."
                                onChange={(e) => Set_NFT_sort(e.target.value)}
                            >
                                {NFT_sort_labels.map((sort, i) => (
                                    <MenuItem value={i} key={sort + i}>{sort}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={3}>
                        <FormControl fullWidth sx={{ minWidth: 120 }}>
                            <InputLabel id="demo-simple-select-label">Single/Collection</InputLabel>
                            <Select
                                labelId="nft-sort-select"
                                id="nft-sort-select"
                                value={NFT_group_filter}
                                label="Single/Collection"
                                onChange={(e) => Set_NFT_group_filter(e.target.value)}
                            >
                                {NFT_group_filter_labels.map((sort, i) => (
                                    <MenuItem value={i} key={sort + i}>{sort}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={3}>
                        <FormControl fullWidth sx={{ minWidth: 120 }}>
                            <InputLabel id="demo-simple-select-label">Filter by Tags</InputLabel>
                            <Select
                                labelId="nft-sort-select"
                                id="nft-sort-select"
                                value={NFT_tag_filter}
                                label="Filter by Tags"
                                onChange={(e) => Set_NFT_tag_filter(e.target.value)}
                            >
                                {NFT_tag_filter_labels.map((sort, i) => (
                                    <MenuItem value={i} key={sort + i}>{sort}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={3}>
                        <FormControl fullWidth className="FormControl" sx={{ minWidth: 120 }}>
                            <InputLabel id="demo-simple-select-label">Filter by Licence</InputLabel>
                            <Select
                                labelId="nft-sort-select"
                                id="nft-sort-select"
                                value={NFT_licence_filter}
                                label="Filter by Licence"
                                onChange={(e) => Set_NFT_licence_filter(e.target.value)}
                            >
                                {NFT_licence_filter_labels.map((sort, i) => (
                                    <MenuItem value={i} key={sort + i}>{sort}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default NFTSortFilter;
