import React from "react";
import { Grid } from "@mui/material";
import Image from "next/image";
import styles from "./StyleSheets/header.module.css";
import TextField from "@mui/material/TextField";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import CallIcon from "@mui/icons-material/Call";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
export default function Header() {
  return (
    <Grid container spacing={2} className={styles.headerWhole}>
      <Grid item xs={12} container>
        <Grid
          item
          xs={6}
          container
          direction={"row"}
          justifyContent={"flex-start"}
        >
          <Image
            src="https://bookwedgo-prod.s3.amazonaws.com/site_images/images/logo.png"
            alt="BookWedGo Logo"
            width={200}
            height={60}
          />
          <Grid
            item
            xs={9}
            container
            justifyContent={"space-around"}
            className={styles.menuPosition}
          >
            <p>Venue</p>
            <p>About us</p>
            <p>Blog</p>
          </Grid>
        </Grid>
        <Grid
          item
          xs={6}
          container
          direction={"row"}
          justifyContent={"end"}
          className={styles.makeCenter}
        >
          <TextField
            fullWidth
            label="Search"
            id="fullWidth"
            sx={{
              width: 400,
              maxWidth: "100%",
            }}
          />
          <Grid
            item
            xs={6}
            container
            justifyContent={"space-evenly"}
            className={`${styles.makeCenter} ${styles.iconsContainer}`}
          >
            <PermIdentityIcon />
            <CallIcon />
            <WhatsAppIcon />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
