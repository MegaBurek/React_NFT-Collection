import React, { FunctionComponent, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

//Material UI
import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from "@mui/material";

//Types
import { INFTCard } from "@/@types/views";
import PreviewIcon from "@mui/icons-material/Preview";
import FavoriteIcon from "@mui/icons-material/Favorite";

const NFTCard: FunctionComponent<INFTCard> = (props) => {
    let navigate = useNavigate();

    const {data} = props;

    const toDetailPage = (): void => {
        navigate(`/nft/${data.Mint}`)
    }

    const priceLabel = (price: number): ReactNode => {
        if (data) {
            let _price;
            _price = price / 1000000000
            return (
                <Typography
                    variant="h5"
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
        <Card
            className="NFT_Card"
            style={{ WebkitBoxShadow: "3px 5px 15px #04d3", boxShadow: "3px 5px 15px #04d3", borderRadius: "15px" }}
        >
            <Typography gutterBottom variant="h5" component="div">
                <b>{data.Title}</b>
            </Typography>
            <CardActionArea className="NFT_Card_ActionArea" onClick={() => toDetailPage()}>
                <CardMedia
                    component="img"
                    height="140"
                    image={data.Preview_URL}
                    alt="data-image"
                    className="NFT_Image"
                />
                <CardContent>
                    <div className="NFT_Detail_Info">
                        {priceLabel(data.price)}
                    </div>
                    <Typography variant="h6" className="Align_Center">
                        <img
                            src="https://solsea-test.ha.rs/assets/c_badge.svg"
                            className="NFT_Detail_Info_Icon" alt="c_badge_image"
                            style={{ marginRight: "3px" }}
                        /> {data.LicenseTitle ? data.LicenseTitle : "None Attached"}
                    </Typography>
                    <Typography variant="h6" className="Align_Center" style={{ marginBottom: "5px" }}>
                        <img
                            src="https://solsea-test.ha.rs/assets/solsea_icon.svg"
                            className="NFT_Detail_Info_Icon" alt="solsea_image"
                            style={{ marginRight: "3px" }}
                        /> Minted on Solsea
                    </Typography>
                    <Grid container className="NFT_Detail_LikesViews" style={{ justifyContent: "center" }}>
                        <Grid item>
                            <div className="NFT_Detail_Like_Box">
                                <PreviewIcon sx={{marginRight: "2px"}}/> <b>{data.views}</b>
                            </div>
                        </Grid>
                        <Grid item>
                            <div className="NFT_Detail_Like_Box">
                                <FavoriteIcon sx={{marginRight: "2px"}}/> <b>{data.liked}</b>
                            </div>
                        </Grid>
                    </Grid>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default NFTCard;
