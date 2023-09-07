import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import styles from "./StyleSheets/search.module.css";
import { CardActionArea, Grid } from "@mui/material";
import Selectors from "./Selectors";
import 'rsuite/dist/rsuite-no-reset.min.css';

export default function SearchByClassiFication() {
  return (
    <Grid container justifyContent={"center"}>
      <Grid item xs={12} container justifyContent={"center"}>
        <Card sx={{ maxWidth: 1300, width: 1300 }}>
          <CardActionArea>
            <CardContent>
              <Grid item xs={12} container>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  className={`${styles.headerWhole} ${styles.makeCenter}`}
                >
                  Top and Best kalyana Mandapam & Wedding Halls in Chennai with
                  Prices
                </Typography>
              </Grid>
              <Grid item xs={12} container>
                  <Selectors type={"checkBoxes"}/>
                  <Selectors type={"range"}/>
                  <Selectors type={"date"}/>
              </Grid>
            </CardContent>
          </CardActionArea>

        </Card>
      </Grid>
     

    </Grid>
  );
}
