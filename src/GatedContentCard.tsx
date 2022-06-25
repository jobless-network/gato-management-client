import { Card, CardContent, Typography, Grid, Divider } from "@mui/material";
import { ReactComponent as IconMembers } from "./assets/icon_members.svg";
import { ReactComponent as IconStatisticsRed } from "./assets/icon_statistics-red.svg";
import { ReactComponent as IconStatisticsGreen } from "./assets/icon_statistics-green.svg";
import { ReactComponent as CardTypeBlue } from "./assets/card_type-blue.svg";
import { ReactComponent as CardTypePurple } from "./assets/card_type-purple.svg";
import { ReactComponent as CardTypeTeal } from "./assets/card_type-teal.svg";
import { ReactComponent as CardTypeYellow } from "./assets/card_type-yellow.svg";
import { ReactComponent as ButtonMoreOptions } from "./assets/button_more_options.svg";
import { ReactComponent as IconChevronRight } from "./assets/icon_chevron_right.svg";

export enum ContentIcon {
  BLUE,
  PURPLE,
  TEAL,
  YELLOW,
}

export type GatedContent = {
  icon: ContentIcon;
  title: String;
  description: String;
  accessCount: Number;
  weeklyEntries: Number;
};

function CardIcon(props: { icon: ContentIcon }) {
  switch (props.icon) {
    case ContentIcon.BLUE:
      return <CardTypeBlue />;
    case ContentIcon.PURPLE:
      return <CardTypePurple />;
    case ContentIcon.TEAL:
      return <CardTypeTeal />;
    case ContentIcon.YELLOW:
      return <CardTypeYellow />;
  }
}

export default function GatedContentCard(props: {
  gatedContent: GatedContent;
}) {
  return (
    <Card sx={{ width: "312px", height: "212px" }}>
      <CardContent>
        <CardIcon icon={props.gatedContent.icon} />
        <ButtonMoreOptions style={{ float: "right" }} />
        <Typography
          sx={{ fontSize: 16, fontWeight: 900 }}
          color="#1B2437"
          gutterBottom
        >
          {props.gatedContent.title}
        </Typography>
        <Typography sx={{ fontSize: 12, fontWeight: 500 }} component="div">
          {props.gatedContent.description}
        </Typography>
        <Grid
          container
          direction="row"
          alignItems="center"
          sx={{ paddingTop: "12px" }}
        >
          <Grid item>
            <IconMembers />
          </Grid>
          <Grid item sx={{ paddingLeft: "8px" }}>
            <Typography
              sx={{ fontSize: 12, fontWeight: 500 }}
              color="#98A0A6"
            >{`${props.gatedContent.accessCount} have access`}</Typography>
          </Grid>
        </Grid>
        <Divider sx={{ paddingTop: "16px" }} />
        <Grid
          container
          direction="row"
          alignItems="center"
          spacing={1}
          sx={{ paddingTop: "12px" }}
        >
          <Grid item>
            {props.gatedContent.weeklyEntries < 0 && <IconStatisticsRed />}
            {props.gatedContent.weeklyEntries > 0 && <IconStatisticsGreen />}
          </Grid>
          <Grid item xs={10}>
            {props.gatedContent.weeklyEntries < 0 && (
              <Typography
                sx={{ fontSize: 12, fontWeight: 500 }}
                color="#FF3E1D"
              >
                {`${props.gatedContent.weeklyEntries}% WEEKLY ENTRIES`}
              </Typography>
            )}
            {props.gatedContent.weeklyEntries > 0 && (
              <Typography
                sx={{ fontSize: 12, fontWeight: 500 }}
                color="#71DD37"
              >
                {`${props.gatedContent.weeklyEntries}% WEEKLY ENTRIES`}
              </Typography>
            )}
          </Grid>
          <Grid item xs={1}>
            <IconChevronRight />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
