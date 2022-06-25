import { Card, CardActionArea, Grid, Typography } from "@mui/material";
import { Link as RouterLink } from 'react-router-dom';
import { useAsync } from "react-use";
import GatedContentCard, { ContentIcon, GatedContent } from "./GatedContentCard";

const data = [
    {
        icon: ContentIcon.BLUE,
        title: "Archive",
        description: "Proin quis tortor, tempor justo lorem ultricies. Volutpat turpis turpis tellus neque maecenas nisi.",
        accessCount: 640,
    },
    {
        icon: ContentIcon.PURPLE,
        title: "Main Forum",
        description: "Main Developer DAO forum. All D_D members have access.",
        accessCount: 1270,
    },
    {
        icon: ContentIcon.YELLOW,
        title: "Jobs",
        description: "Felis aliquam integer eu facilisis pulvinar elementum integer pretium, pellentesque. Pretium.",
        accessCount: 589,
    },
    {
        icon: ContentIcon.TEAL,
        title: "Documentation",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vestibulum non porttitor ac vestibulum.",
        accessCount: 14,
    },
]

function NewGatedContentCard() {
    return <Card sx={{ width: "312px", height: "212px", border: "3px solid #507BFC" }}>
        <CardActionArea sx={{ width: "100%", height: "100%" }} component={RouterLink} to={'/new'}>
            <Grid container
                spacing={0}
                direction="column"
                alignItems="center"
                justifyContent="center"
                style={{ minHeight: '100%' }}>
                <Grid item xs={3}>
                    <Typography sx={{ fontSize: 26, fontWeight: 400 }} color="#507BFC">+ New content</Typography>
                </Grid>
            </Grid>
        </CardActionArea>
    </Card>
}

function DashboardContent() {
    const loader = useAsync(async () => {
        var splittedData: GatedContent[][] = [];
        for (let i = 0; i < data.length; i += 2)
            splittedData.push(data.slice(i, i + 2));
        console.log(splittedData);
        return splittedData;
    }, []);

    return <>
        <Typography sx={{ fontSize: 26, fontWeight: 900, paddingBottom: "43px" }}>Gated Content</Typography>
        <Grid container spacing={6}>
            {!loader.loading && loader.value && loader.value.map((row, idx) => (
                <Grid item container spacing={32}>
                    {idx === 0 && <Grid item md={3}><NewGatedContentCard /></Grid>}
                    <Grid item md={3}>
                        <GatedContentCard gatedContent={row[0]} />
                    </Grid>
                    <Grid item md={3}>
                        {row[1] && <GatedContentCard gatedContent={row[1]} />}
                    </Grid>
                </Grid>
            ))}
        </Grid>
    </>
}

export default function Dashboard() {
    return <DashboardContent />;
}