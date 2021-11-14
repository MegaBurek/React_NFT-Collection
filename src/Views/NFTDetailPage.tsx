import React, { FunctionComponent, useEffect, useState, Fragment, ReactNode } from 'react';
import { useParams } from 'react-router-dom';

//Material UI
import { Avatar, Box, Button, Card, Chip, Grid, LinearProgress, Typography } from "@mui/material";
import ShareIcon from '@mui/icons-material/Share';
import PublicIcon from '@mui/icons-material/Public';
import FlagIcon from '@mui/icons-material/Flag';
import PreviewIcon from '@mui/icons-material/Preview';
import FavoriteIcon from '@mui/icons-material/Favorite';

//Custom components
import { INFTPropertyAttributes, NFT } from "Models/NFT";
import { NFTservice } from "Services/NFTservice";

const NFTDetailPage: FunctionComponent<any> = (props) => {
    const params = useParams();

    const [NFT, setNFT] = useState<NFT | undefined>(undefined);

    const handleClick = (): void => {
        console.log("Clicked");
    }

    useEffect(() => {
        //@ts-ignore
        NFTservice.getNFTById(params.id).then((resp) => {
            if (resp) {
                setNFT(resp)
            }
        }).catch((err: any) => {
            console.error(err);
        })
    }, [])

    const cardStyleOverride = {
        WebkitBoxShadow: "3px 5px 15px #04d3",
        boxShadow: "3px 5px 15px #04d3",
        borderRadius: "15px"
    };

    const chipLabel = (attribute: INFTPropertyAttributes): ReactNode => {
        if (NFT) {
            return (
                <Typography variant="h6" gutterBottom marginTop="10px"><b>{attribute.trait_type}</b>: {attribute.value}</Typography>
            )
        } else {
            return "";
        }
    }

    const priceLabel = (price: number): ReactNode => {
        if (NFT) {
            let _price;
            _price = price / 1000000000
            return (
                <Typography
                    variant="h3"
                    gutterBottom
                    sx={{color: "#0097a7"}}
                >
                    <b>{_price}</b> SOL
                </Typography>
            )
        } else {
            return "";
        }
    };

    return (
        <Grid container className="NFT_Detail_Wrapper">
            <Fragment>
                {NFT ? (
                    <Fragment>
                        <Grid item xs={12} md={4} className="NFT_Detail_Column" sx={{marginRight: "5px"}}>
                            <img src={NFT.Preview_URL} className="NFT_Detail_Image"/>
                            <Card
                                className="NFT_Detail_InfoBox"
                                style={cardStyleOverride}
                            >
                                <Grid container direction="row" spacing={1} className="NFT_Detail_Traits">
                                    {NFT.Properties.attributes.map((attribute: INFTPropertyAttributes, i: number) => (
                                        <Grid item key={"trait" + i}>
                                            <Chip label={chipLabel(attribute)} color="info" key={i}/>
                                        </Grid>
                                    ))}
                                </Grid>
                                <Typography variant="h5">{NFT.Description}</Typography>
                            </Card>
                        </Grid>
                        <Grid item xs={12} md={4} className="NFT_Detail_Column">
                            <Card
                                className="NFT_Detail_InfoBox"
                                style={cardStyleOverride}
                            >
                                <Typography variant="h5"><b>Creator</b></Typography>
                                <div className="NFT_Detail_Creator">
                                    <Avatar
                                        alt="creator-image"
                                        src="https://content.solsea.io/files/thumbnail/1635252394997-149325206-marjan-blan-marjanblan--T-9-x7ypCI-unsplash.jpg"
                                        sx={{marginBottom: "10px", marginRight: "10px"}}
                                    />
                                    <Typography variant="h5"><b>Kica</b></Typography>
                                </div>
                                <div className="NFT_Detail_Info">
                                    <Typography variant="h2">{NFT.Title}</Typography>
                                    <Typography variant="h5" className="Align_Center">
                                        <img src="https://solsea-test.ha.rs/assets/c_badge.svg" className="NFT_Detail_Info_Icon" alt="c_badge_image"/> <b>License</b>: <a
                                        href={NFT.License_URL ? NFT.License_URL : "www.google.com"}>{NFT.LicenseTitle ? NFT.LicenseTitle : "None Attached"}</a>
                                    </Typography>
                                    <Typography variant="h5" className="Align_Center">
                                        <img src="https://solsea-test.ha.rs/assets/solsea_icon.svg" className="NFT_Detail_Info_Icon" alt="solsea_image"/> Minted on Solsea
                                    </Typography>
                                </div>
                                {NFT.tags && NFT.tags[0] ? (
                                    <Grid container direction="row" spacing={1} className="NFT_Detail_Traits">

                                        {NFT.tags.map((tag: string, i: number) => (
                                            <Grid item key={"tag" + i}>
                                                <Chip label={<b>{tag}</b>} color="primary" key={i}/>
                                            </Grid>
                                        ))}
                                    </Grid>
                                ) : null}
                                <div className="NFT_Detail_Info">
                                    <Typography variant="h5"><b>{NFT.nft_collection ? "Part of a Collection" : "Not part of a Collection"}</b></Typography>
                                </div>
                                <p className="NFT_Detail_NotVerified">⚠ <b>Unverified NFT - please check everything before you buy</b></p>
                                <Grid container className="NFT_Detail_Action_Buttons">
                                    <Grid item>
                                        <Button
                                            color="secondary"
                                            onClick={handleClick}
                                            startIcon={<ShareIcon/>}
                                            variant="outlined"
                                            sx={{marginRight: "10px"}}
                                        >
                                            Share
                                        </Button>
                                    </Grid>
                                    <Grid item>
                                        <Button
                                            color="secondary"
                                            onClick={handleClick}
                                            startIcon={<PublicIcon/>}
                                            variant="outlined"
                                            sx={{marginRight: "10px"}}
                                        >
                                            View on Solana
                                        </Button>
                                    </Grid>
                                    <Grid item>
                                        <Button
                                            color="secondary"
                                            onClick={handleClick}
                                            startIcon={<FlagIcon/>}
                                            variant="outlined"
                                            sx={{marginRight: "10px"}}
                                        >
                                            Report as fake
                                        </Button>
                                    </Grid>
                                </Grid>
                                <Grid container className="NFT_Detail_LikesViews">
                                    <Grid item>
                                        <div className="NFT_Detail_Like_Box">
                                            <PreviewIcon sx={{marginRight: "2px"}}/> <b>{NFT.views}</b>
                                        </div>
                                    </Grid>
                                    <Grid item>
                                        <div className="NFT_Detail_Like_Box">
                                            <FavoriteIcon sx={{marginRight: "2px"}}/> <b>{NFT.liked}</b>
                                        </div>
                                    </Grid>
                                </Grid>
                            </Card>
                            <Card
                                className="NFT_Detail_InfoBox"
                                style={cardStyleOverride}
                            >
                                <div className="NFT_Detail_Info">
                                    <Typography variant="h6"><b>Listed by:</b> <a href={`https://explorer.solana.com/address/${NFT.sellerKey}`}>{NFT.sellerKey}</a></Typography>
                                </div>
                                <div className="NFT_Detail_Info">
                                    {priceLabel(NFT.price)}
                                </div>
                                <Typography variant="h6" marginBottom="10px">Creator royalties on secondary sales: <b>20%</b></Typography>
                                <Button
                                    color="secondary"
                                    onClick={handleClick}
                                    variant="contained"
                                    fullWidth
                                    sx={{marginBottom: "10px"}}
                                >
                                    Connect Your Wallet
                                </Button>
                                <Typography variant="h6" textAlign="center">Double-check everything before you buy! <a href="https://docs.solsea.io/getting-started/how-to-spot-a-fake-nft">How to spot fakes?</a></Typography>
                                <Typography variant="h6" textAlign="center">Read our <a href="https://docs.solsea.io/getting-started/terms-and-conditions">Terms and Conditions</a> before you buy</Typography>
                            </Card>
                            <Card
                                className="NFT_Detail_InfoBox"
                                style={cardStyleOverride}
                            >
                                <Typography variant="h4" marginBottom="20px"><b>History</b></Typography>
                                <p>0.00 SOL</p>
                                <p style={{marginBottom: "5px"}}><span>6qfSbxQRqJwRYqaQ5KGHqrJFpyj6BeUmCz66P6m9szJh</span> Buyer <br/>At 2021-10-11T14:08:25.609Z</p>
                                <p>0.00 SOL</p>
                                <p style={{marginBottom: "5px"}}><span>6qfSbxQRqJwRYqaQ5KGHqrJFpyj6BeUmCz66P6m9szJh</span> Buyer <br/>At 2021-10-11T14:08:25.609Z</p>
                                <p>0.00 SOL</p>
                                <p style={{marginBottom: "5px"}}><span>6qfSbxQRqJwRYqaQ5KGHqrJFpyj6BeUmCz66P6m9szJh</span> Buyer <br/>At 2021-10-11T14:08:25.609Z</p>
                            </Card>
                        </Grid>
                    </Fragment>
                ) : (
                    <Box sx={{width: '90%'}}>
                        <LinearProgress/>
                    </Box>
                )}
            </Fragment>
        </Grid>
    );
};

export default NFTDetailPage;
