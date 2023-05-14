import React, { useState } from "react";
import { Box, Button, Grid, Typography, styled } from "@mui/material";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import Navbar from "../components/Navbar";
import daomain from "./../assets/images/daomain.png";
import Divider from "@mui/material/Divider";
import Setup from "../components/Setup";
import Voting from "../components/Voting";
import votting1 from "./../assets/images/votting1.png";
import votting2 from "./../assets/images/votting2.png";
import plugins1 from "./../assets/images/plugins1.png";
import plugins2 from "./../assets/images/plugins2.png";
import DaoComponent from "../components/DaoComponent";
import { scanForWallets } from "../utils/aehelper";
import Spinner from "../components/Spinner";
import { useNavigate } from "react-router-dom";

const BoxWrapper = styled(Box)({
  ".launch-btn": {
    background: "#f5274e",
    textTransform: "capitalize",
    fontSize: "16px",
    fontWeight: 500,
    borderRadius: "12px",
    padding: "6px 15px",
  },
  ".launch-btn:hover": {
    background: "#f5274e",
  },
  ".dao-btn": {
    border: "2px solid #f5274e",
    background: "#fff",
    color: "#f5274e",
    textTransform: "capitalize",
    fontSize: "16px",
    fontWeight: 500,
    borderRadius: "12px",
    padding: "6px 15px",
  },
  ".learn-btn": {
    border: "2px solid #f5274e",
    background: "#fff",
    color: "#f5274e",
    textTransform: "none",
    fontSize: "16px",
    fontWeight: 500,
    marginTop: "20px",
    borderRadius: "12px",
    padding: "6px 15px",
  },
  ".parent-btn-box": {
    paddingTop: "20px",
    display: "flex",
    gap: "10px",
  },
  ".parent-img": {
    display: "flex",
    justifyContent: "center",
    padding: "20px",
  },
  ".parent-title": {
    padding: "13px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  ".argon-title": {
    fontSize: "32px",
    fontWeight: 500,
    lineHeight: "42px",
    color: "#f5274e",
  },
  ".argon-description": {
    fontSize: "46px",
    fontWeight: 300,
    color: "#f5274e",
    lineHeight: "50px",
    marginTop: "15px",
  },
  ".parent-voting": {
    display: "flex",
    gap: "24px",
    padding: "2rem 8rem",
  },
  ".leading-title": {
    fontSize: "44px",
    lineHeight: "50px",
    textAlign: "center",
    color: "#f5274e",
  },
  ".leading-description": {
    fontSize: "16px",
    lineHeight: "15px",
    color: "#f5274e",
    textAlign: "center",
    padding: "10px",
  },
});

const Home = () => {
  const navigate = useNavigate();
  const [isProgress, setProgress] = useState(false);
  return (
    <React.Fragment>
      <Box>
        <Navbar />
      </Box>
      <BoxWrapper>
        <Box>
          <Grid container spacing={0} sx={{ padding: "0px 8rem" }}>
            <Grid item xs={6} md={7} xl={7} className="parent-title">
              <Typography
                sx={{
                  fontSize: "90px",
                  fontFamily: "Syne",
                  lineHeight: "90px",
                }}
                style={{
                  fontWeight: 700,
                  background: "linear-gradient(to right, #ee0979, #ff6a00)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                DAO meets DeFI
              </Typography>
              <Typography
                sx={{
                  fontSize: "23px",
                  lineHeight: "32px",
                  marginTop: "19px",
                  color: "#f5274e",
                }}
              >
                Unlock the power of DAOs with our no-code platform. Seamlessly
                create and execute complex proposals across DeFi, NFTs, and
                more, all in a secure and decentralized manner.
              </Typography>
              <Box className="parent-btn-box">
                <Button
                  onClick={async () => {
                    setProgress(true);
                    window.walletAddress = await scanForWallets();
                    let addr = window.walletAddress;
                    window.walletAddressView =
                      addr.substr(0, 6) +
                      "..." +
                      addr.substr(addr.length - 4, 4);
                    navigate("/dashboard");
                  }}
                  variant="contained"
                  className="launch-btn"
                >
                  {" "}
                  {isProgress && <Spinner />}{" "}
                  {!isProgress && (
                    <>
                      <RocketLaunchIcon
                        style={{ fontSize: "large", paddingRight: "8px" }}
                      />{" "}
                      Launch your DAO
                    </>
                  )}
                </Button>
              </Box>
            </Grid>

            <Grid item xs={6} md={5} xl={5} className="parent-img">
              <img src={daomain} alt="dao-main" width={"100%"} />
            </Grid>
          </Grid>
          <Box sx={{ padding: "0px 8rem" }}>
            <Typography
              sx={{
                fontSize: "45px",
                fontFamily: "Syne",
                lineHeight: "45px",
                color: "#f5274e",
              }}
            >
              How?
            </Typography>
            <Box>
              <Grid sx={{ marginTop: "30px" }} container spacing={0}>
                <Grid item xs={12} md={6} xl={6}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <img
                      style={{ objectFit: "crop", height: 250 }}
                      src="/images/6.png"
                    />
                  </div>
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={6}
                  xl={6}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "32px",
                      fontFamily: "Syne",
                      lineHeight: "22px",
                      color: "#f5274e",
                    }}
                    style={{
                      fontWeight: 700,
                      background: "linear-gradient(to right, #ee0979, #ff6a00)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    1.Create DAO.
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "23px",
                      lineHeight: "32px",
                      marginTop: "19px",
                      color: "#f5274e",
                    }}
                  >
                    Provide essential information such as name, description, and
                    logo, and swiftly set up governance to create a DAO with
                    lightning-fast, gasless transactions.
                  </Typography>
                </Grid>
              </Grid>

              <Grid sx={{ marginTop: "60px" }} container spacing={0}>
                <Grid
                  item
                  xs={12}
                  md={6}
                  xl={6}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "32px",
                      fontFamily: "Syne",
                      lineHeight: "22px",
                      color: "#f5274e",
                    }}
                    style={{
                      fontWeight: 700,
                      background: "linear-gradient(to right, #ee0979, #ff6a00)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    2.Create flow.
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "23px",
                      lineHeight: "32px",
                      marginTop: "19px",
                      color: "#f5274e",
                    }}
                  >
                    The flow of aeFlow DAO is a no-code tool that enables you to
                    create complex flows, such as performing swaps and setting
                    up recurring payments, without the need for coding.
                  </Typography>
                </Grid>
                <Grid item xs={12} md={6} xl={6}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <img
                      style={{ objectFit: "crop", height: 250 }}
                      src="/images/7.png"
                    />
                  </div>
                </Grid>
              </Grid>
              <Grid sx={{ marginTop: "60px", marginBottom: "60px" }} container spacing={0}>
                <Grid item xs={12} md={6} xl={6}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <img
                      style={{ objectFit: "crop", height: 100 }}
                      src="/images/9.png"
                    />
                  </div>
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={6}
                  xl={6}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "32px",
                      fontFamily: "Syne",
                      lineHeight: "22px",
                      color: "#f5274e",
                    }}
                    style={{
                      fontWeight: 700,
                      background: "linear-gradient(to right, #ee0979, #ff6a00)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                   3.Create a Proposal.
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "23px",
                      lineHeight: "32px",
                      marginTop: "19px",
                      color: "#f5274e",
                    }}
                  >
                    Once the proposal is approved, the attached flow will be executed accordingly.
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Box>
      </BoxWrapper>
    </React.Fragment>
  );
};

export default Home;
