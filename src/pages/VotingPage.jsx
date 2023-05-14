import React, { useEffect, useState } from "react";
import { Box, Button, Card, Grid, TextField, Typography } from "@mui/material";
import { styled } from "@mui/system";
import Tabs from "@mui/base/Tabs";
import TabsList from "@mui/base/TabsList";
import TabPanel from "@mui/base/TabPanel";
import { buttonClasses } from "@mui/base/Button";
import Tab, { tabClasses } from "@mui/base/Tab";
import MobileStepper from "@mui/material/MobileStepper";
import CreateDaoNavbar from "../components/CreateDaoNavbar";
import Spinner from "../components/Spinner";
import { useLocation, useNavigate } from "react-router-dom";
import { getFlowName, getTotalSupply, voteProposal } from "../utils/aehelper";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";

const blue = {
  50: "#F0F7FF",
  100: "#C2E0FF",
  200: "#80BFFF",
  300: "#66B2FF",
  400: "#3399FF",
  500: "#007FFF",
  600: "#0072E5",
  700: "#0059B2",
  800: "#004C99",
  900: "#003A75",
};

const grey = {
  50: "#f6f8fa",
  100: "#eaeef2",
  200: "#d0d7de",
  300: "#afb8c1",
  400: "#8c959f",
  500: "#6e7781",
  600: "#57606a",
  700: "#424a53",
  800: "#32383f",
  900: "#24292f",
};

const StyledTab = styled(Tab)`
  font-family: IBM Plex Sans, sans-serif;
  color: #fff;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: 600;
  background-color: transparent;
  width: 100%;
  padding: 10px 12px;
  margin: 6px 6px;
  border: none;
  border-radius: 7px;
  display: flex;
  justify-content: center;

  &:hover {
    background-color: #fff;
    color: #f5274e;
  }
  Ste &:focus {
    color: #fff;
    outline: 3px solid #;
  }

  &.${tabClasses.selected} {
    background-color: #fff;
    color: #f5274e;
  }

  &.${buttonClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const StyledTabPanel = styled(TabPanel)(
  ({ theme }) => `
    font-family: IBM Plex Sans, sans-serif;
    font-size: 0.875rem;
    padding: 25px;
   
    border: 1px solid ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
    border-radius: 12px;
    `
);

const StyledTabsList = styled(TabsList)(
  ({ theme }) => `
    min-width: 400px;
    background-color: #f5274e ;
    border-radius: 12px;
    margin-bottom: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    align-content: space-between;
    box-shadow: 0px 4px 30px ${
      theme.palette.mode === "dark" ? grey[900] : grey[200]
    };
    `
);

const BoxWrapper = styled(Box)({
  padding: "2rem 9rem",

  ".vote-title": {
    fontSize: "38px",
    fontWeight: 700,
    background: "linear-gradient(to right, #ffefba, #ffffff)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
  ".sub-title": {
    color: "#f5274e",
    fontWeight: 600,
    paddingTop: "12px",
  },
  ".token": {
    background: "linear-gradient(to right, #ee0979, #ff6a00)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    fontWeight: 700,
    paddingLeft: "7px",
  },
  ".vote-description": {
    paddingTop: "13px",
    color: "#f5274e",
    fontSize: "20px",
    fontWeight: 600,
  },
  ".resources-card": {
    background: "#fff",
    borderRadius: "12px",
    padding: "15px",
  },
  ".status-card": {
    background: "#444f5e",
    borderRadius: "12px",
    padding: "20px",
    marginTop: "24px",
  },
  ".parent-image": {
    display: "flex",
    justifyContent: "center",
    padding: "20px",
  },
  ".resource-title": {
    color: "#323F4B",
    fontSize: "24px",
    fontWeight: 700,
    textAlign: "center",
  },
  ".status-title": {
    background: "linear-gradient(to right, #ee0979, #ff6a00)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    fontSize: "24px",
    fontWeight: 700,
  },
  ".resource-des": {
    fontSize: "17px",
    color: "#444546",
    paddingTop: "25px",
  },
  ".praposal-btn": {
    borderRadius: "12px",
    background: "#fff",
    color: "#323F4B",
    marginTop: "15px",
    textTransform: "none",
    fontSize: "16px",
    fontWeight: 500,
  },
  ".praposal-btn:hover": {
    background: "#fff",
  },
  ".action-card": {
    background: "#444f5e",
    borderRadius: "12px",
    padding: "24px",
    marginTop: "24px",
  },
  ".action-description": {
    fontSize: "14px",
    color: "#979FA9",
  },
  ".tab-title": {
    textTransform: "capitalize",
    border: "1px solid gray",
    margin: "5px",
    borderRadius: "12px",
    color: "#003AF0",
  },
  ".css-1be5mm1-MuiLinearProgress-root-MuiMobileStepper-progress": {
    borderRadius: "5px",
    background: "#444f5e",
    width: "100%",
    height: "12px",
  },
  ".css-rh92k-MuiPaper-root-MuiMobileStepper-root": {
    backgroundColor: "#444f5e",
  },
  ".css-5xe99f-MuiLinearProgress-bar1": {
    backgroundColor: "#444f5e",

  },
  ".parent-tabs": {
    borderBottom: 1,
    borderColor: "divider",
    display: "flex",
    justifyContent: "space-between",
  },
  ".parent-over": {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: "25px",
  },
  ".over-btn": {
    textTransform: "none",
    fontSize: "16px",
    borderRadius: "12px",
    background: "#f5274e",

    fontWeight: 500,
    borderRadius: "12px",
    padding: "6px 15px",
    color: "white",
  },
  ".praposal-title": {
    color: "#225C8A",
    fontSize: "14px",
    fontWeight: 700,
    display: "flex",
    alignItems: "center",
    gap: "7px",
  },
  ".main-title": {
    fontSize: "20px",
    fontWeight: 700,
    paddingTop: "10px",
  },
  ".decision-title": {
    fontSize: "16px",
    fontWeight: 500,
    color: "#63707B",
    padding: "5px 0px",
  },
  ".decision-details": {
    fontSize: "16px",
    fontWeight: 700,
    color: "#323f4B",
    padding: "5px 0px",
  },
});

const VotingPage = () => {
    const navigate = useNavigate();
  const location = useLocation();
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [publisher, setPublisher] = React.useState(
    "0x3a8094c5a445B296EBdaf9c369A6662A0FDFfB3f"
  );
  const [currentStatus, setCurrentStatus] = React.useState("Voting");
  const [totaltokens, setTotalTokens] = React.useState(1);
  const [yesvotes, setyesVotes] = React.useState(0);
  const [novotes, setnovotes] = React.useState(0);
  const [isLoading, setLoading] = React.useState(false);
  const [flow, setFlow] = React.useState("");
  const [isVoted, setVoted] = React.useState(true);
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    (async () => {
      const item = location.state.val;
      if (item.executed) {
        setCurrentStatus("Executing");
      }
      let forVotes = item.forVotes;
      let againstVotes = item.againstVotes;
      let isVoted_ = item.votes.has(window.walletAddress);
      setVoted(isVoted_);
      setTitle(item.description?.title);
      setDescription(item.description?.text);
      setPublisher(item.creator);
      let tt = await getTotalSupply(item.address);
      setTotalTokens(parseInt(tt));
      setyesVotes(parseInt(forVotes));
      setnovotes(parseInt(againstVotes));
      // find flow id
      let flowName = await getFlowName(item.flowId);
      setFlow(flowName);
    })();
  }, []);

  return (
    <React.Fragment>
      <CreateDaoNavbar />
      <BoxWrapper sx={{ marginTop: "65px" }}>
        <Typography className="vote-title">{title}</Typography>
        <Typography className="sub-title">
          Published by
          <span className="token">{publisher}</span>
        </Typography>
        <Typography className="vote-description">{description}</Typography>

        <Grid container spacing={0} columnSpacing={3}>
          <Grid item xs={12} md={7} xl={7}>
            {/* for tabs components  */}

            <Card elevation={0} className="action-card">
              <Box>
                <Tabs defaultValue={0}>
                  <Box className="parent-tabs">
                    <Typography className="status-title">Voting</Typography>
                  </Box>
                  <StyledTabPanel value={0}>
                    <Box>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <Typography
                          sx={{
                            width: "70%",
                            color: "#f5274e",
                            fontWeight: 700,
                          }}
                        >
                          Yes
                        </Typography>

                        <Typography sx={{ color: "#f5274e", fontWeight: 700 }}>
                          {(yesvotes / totaltokens) * 100}%
                        </Typography>
                      </Box>
                      <MobileStepper
                        variant="progress"
                        steps={102}
                        position="static"
                        activeStep={Math.ceil((yesvotes / totaltokens) * 100)}
                      />
                    </Box>
                    <Box sx={{ paddingTop: "35px" }}>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <Typography
                          sx={{
                            width: "70%",
                            color: "#f5274e",
                            fontWeight: 700,
                          }}
                        >
                          No
                        </Typography>

                        <Typography sx={{ color: "#f5274e", fontWeight: 700 }}>
                          {(novotes / totaltokens) * 100}%
                        </Typography>
                      </Box>
                      <MobileStepper
                        variant="progress"
                        steps={102}
                        position="static"
                        activeStep={(novotes / totaltokens) * 100}
                      />
                    </Box>

                    {!isVoted && (
                      <Box className="parent-over">
                        <Button onClick={()=>{
                            setOpen(true)
                        }} className="over-btn">
                          {isLoading && <Spinner />}
                          {!isLoading && "Vote"}
                        </Button>
                      </Box>
                    )}
                  </StyledTabPanel>
                </Tabs>
              </Box>
            </Card>
          </Grid>
          <Grid item xs={12} md={5} xl={5}>
            <Card elevation={0} className="status-card">
              <Typography
                style={{
                  color: "#f5274e",
                  fontSize: "24px",
                  fontWeight: 700,
                }}
              >
                Flow: {flow}
              </Typography>
            </Card>
            <Card elevation={0} style={{ display: 'flex', justifyContent:'space-between'}} className="status-card">
              <Typography
                style={{
                  color: "#f5274e",
                  fontSize: "24px",
                  fontWeight: 700,
                }}
              >
                Status : {currentStatus}
              </Typography>
            {currentStatus!="Voting" && <Button className="over-btn" style={{ background: '#f5274e', fontWeight: 600, color:'white'}} onClick={()=>{
                navigate(`/view-flow/${location.state.val.address.replace('ct_','ak_') + location.state.val.id}`)
            }}>Live Execution</Button>}
            </Card>
          </Grid>
        </Grid>
      </BoxWrapper>
      <Dialog open={open} onClose={()=>{ setOpen(false) }} >
        <DialogActions style={{ padding: '15px', background:'#444f5e'}}>
          <Button className="over-btn" style={{ background: '#f5274e', fontWeight: 600, color:'white'}} onClick={()=>{
            setLoading(true)
            console.log(location.state.val.address,  location.state.val.id)
            voteProposal(location.state.val.address, location.state.val.id, true).then(()=>{
                setLoading(false)
                navigate(-1)
            })
            setOpen(false)
          }}>In Favor</Button>
          <Button className="over-btn" style={{ background: '#f5274e',  fontWeight: 600, color:'white'}} onClick={()=>{ 
            setLoading(true)
            voteProposal(location.state.val.address, location.state.val.id, false).then(()=>{
                setLoading(false)
                navigate(-1)
            })
            setOpen(false)
          }}>Against</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};

export default VotingPage;
