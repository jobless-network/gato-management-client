import { Card, CardContent, Grid, Stack, Typography } from "@mui/material";
import { ReactComponent as CryptoPunk } from './assets/pic_NFT-CryptoPunk.svg';
import { tokens, nfts, DigitalAsset } from "./consts";

function Token(props: { token: DigitalAsset }) {
    return <Card sx={{ width: "248px", height: "72px" }}>
        <CardContent>
            <Grid container spacing={2}>
                <Grid item xs={3}>
                    {<props.token.img />}
                </Grid>
                <Grid item xs={9}>
                    <Typography sx={{ fontSize: 14, fontWeight: 500 }} color="#1B2437">
                        {props.token.name}
                    </Typography>
                    <Typography sx={{ fontSize: 8, color: "#98A0A6", fontWeight: 500, wordWrap: 'break-word', }}>
                        {props.token.address}
                    </Typography>
                </Grid>
            </Grid>
        </CardContent>
    </Card>
}

export default function SideBar() {
    return <>
        <Typography sx={{ fontSize: 16, fontWeight: 900, paddingBottom: "24px" }} color="#1B2437" gutterBottom>
            NFT Collections
        </Typography>
        <Stack spacing={2}>
            {nfts.map(nft => (<Token token={nft} />))}
        </Stack>
        <Typography sx={{ fontSize: 16, fontWeight: 900, paddingBottom: "24px", paddingTop: "44px" }} color="#1B2437" gutterBottom>
            Tokens
        </Typography>
        <Stack spacing={2}>
            {tokens.map(token => (<Token token={token} />))}
        </Stack>
    </>
}