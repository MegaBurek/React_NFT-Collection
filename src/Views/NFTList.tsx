import React, { FunctionComponent, useState, Fragment, useRef, useCallback } from 'react';

//Material UI
import { Box, Grid, LinearProgress } from "@mui/material";

//Custom components
import NFTCard from "Views/NFTCard";
import useNFTLoader from "Hooks/useNFTLoader";

const NFTList: FunctionComponent<any> = (props) => {
    const [skip, setSkip] = useState<number>(0);

    const {loading, error, NFTs, hasMore} = useNFTLoader(skip);

    const observer = useRef()
    const lastNFTElementRef = useCallback(node => {
        if (loading) return
        //@ts-ignore
        if (observer.current) observer.current.disconnect()
        //@ts-ignore
        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting && hasMore) {
                setSkip(prevSkip => prevSkip + 20)
            }
        })
        //@ts-ignore
        if (node) observer.current.observe(node)
    }, [loading, hasMore])

    return (
        <Fragment>
            {NFTs && NFTs.length > 0 ? (
                <Grid container className="NFT_List" spacing={4}>
                    {NFTs.map((NFT, i) => {
                        if (NFTs.length === i + 1) {
                            return (
                                <Grid item xs={12} md={3} lg={2} className="NFT_Box" key={"NFT" + i}>
                                    <div ref={lastNFTElementRef}/>
                                    <NFTCard data={NFT} key={i}/>
                                </Grid>
                            )
                        } else {
                            return (
                                <Grid item xs={12} md={3} lg={2} className="NFT_Box" key={"NFT" + i}>
                                    <NFTCard data={NFT} key={i}/>
                                </Grid>
                            )
                        }
                    })}
                </Grid>
            ) : (
                <Box sx={{width: '90%'}}>
                    <LinearProgress/>
                </Box>
            )}
        </Fragment>
    );
};

export default NFTList;
