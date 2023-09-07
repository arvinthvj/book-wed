import React from 'react'
import { Grid } from "@mui/material";
import styles from "./StyleSheets/homeHeaderContainer.module.css"
import Header from './Header';
import SearchByClassiFication from './SearchByClassification';
export default function HomeHeaderContainer() {
  return (
    <Grid container spacing={0} className={styles.headerBannerMain}>
        <Header/>
        <SearchByClassiFication/>
    </Grid>
  )
}
