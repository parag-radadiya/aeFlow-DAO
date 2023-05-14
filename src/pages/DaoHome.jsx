import React, { useEffect, useState } from "react";
import DaoNavbar from "../components/DaoNavbar";
import { Box, Grid, styled, Typography, Button } from "@mui/material";
import $ from "jquery";
import Card from "@mui/material/Card";
import DaoComponent from "../components/DaoComponent";
import Explore from "../components/Explore";
import { KeyboardArrowRight } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import Spinner from "../components/Spinner";
import "../DaoHome.css";
import { getMyDaos, getAllDaos } from "../utils/aehelper";

const BoxWrapper = styled(Box)({
  marginTop: "4.7rem",
  padding: "0px 8rem",
  ".parent-image": {
    display: "flex",
    justifyContent: "center",
    overflow: "hidden",
  },
  ".parent-home-content": {
    display: "flex",
    flexDirection: "column",
    paddingTop: "85px",
    // justifyContent: 'center'
  },
  ".main-title": {
    fontSize: "55px",
    color: "#f5274e",
    lineHeight: "60px",
    fontFamily: "syne",
    fontWeight: 700,
  },
  ".description": {
    fontSize: "25px",
    color: "#000",
    lineHeight: "30px",
    fontWeight: 500,
    paddingTop: "10px",
  },
  ".explore-title": {
    fontSize: "28px",
    fontWeight: 700,
    color: "#323F4B",
    paddingTop: "40px",
  },
  ".dao-title": {
    fontSize: "28px",
    fontWeight: 700,
    background: "linear-gradient(to right, #ffefba, #ffffff)",
    "WebkitBackgroundClip": "text",
    "WebkitTextFillColor": "transparent",
  },
  ".creater-btn": {
    background: "#f5274e",
    textTransform: "capitalize",
    fontSize: "16px",
    fontWeight: 500,
    borderRadius: "12px",
    padding: "6px 15px",
  },
  ".creater-btn:hover": {
    background: "#f5274e",
  },
});

const DaoHome = () => {
  const navigate = useNavigate();

  const [flowList, setFlowList] = useState([]);
  const [daoList, setDaolist] = useState([]);
  const [mydaoList, setMyDaolist] = useState([]);
  const [loader1, setLoader1] = useState(false);
  const [loader2, setLoader2] = useState(false);
  const [loader3, setLoader3] = useState(false);

  useEffect(() => {
    //'ct_2vryx6eQVADKZWAynS15VCREqLi2wFXYqgwSGddAWG8KZTTkzY'
    setLoader1(true);
    getMyDaos(window.walletAddress)
      .then((e) => {
        setMyDaolist(e);
        setLoader1(false);
      })
      .catch((e) => console.error(e));

    var tabs = $(".tabs");
    var activeItem = tabs.find(".active");
    var activeWidth = activeItem.innerWidth();

    $(".selector").css({
      left: "4px",
      width: activeWidth + "px",
    });

    $(".tabs").on("click", "a", function (e) {
      e.preventDefault();
      $(".tabs a").removeClass("active");

      if ($(this)[0].classList == "flow") {
        renderFlows();
        document.getElementsByClassName("explore1")[0].style.display = "none";
        document.getElementsByClassName("mydao1")[0].style.display = "none";
        document.getElementsByClassName("flow1")[0].style.display = "block";
      } else if ($(this)[0].classList == "explore") {
        setLoader2(true);
        getAllDaos()
          .then((e) => {
            setDaolist(e);
            setLoader2(false);
          })
          .catch((e) => console.error(e));
        document.getElementsByClassName("explore1")[0].style.display = "block";
        document.getElementsByClassName("mydao1")[0].style.display = "none";
        document.getElementsByClassName("flow1")[0].style.display = "none";
      } else if ($(this)[0].classList == "") {
        setLoader1(true);
        getMyDaos(window.walletAddress)
          .then((e) => {
            console.log(e)
            setMyDaolist(e);
            setLoader1(false);
          })
          .catch((e) => console.error(e));
        document.getElementsByClassName("mydao1")[0].style.display = "block";
        document.getElementsByClassName("explore1")[0].style.display = "none";
        document.getElementsByClassName("flow1")[0].style.display = "none";
      }

      $(this).addClass("active");
      var activeWidth = $(this).innerWidth();
      var itemPos = $(this).position();
      $(".selector").css({
        left: itemPos.left + "px",
        width: activeWidth + "px",
      });
    });
  }, []);
  let renderFlows = async function () {
    setLoader3(true);
    let data = await fetch(
      `https://api.aeflowdao.cloud/escrow/escmod/${window.walletAddress}`
    );
    data = await data.json();
    console.log("the data is " + data)
    setFlowList(data);
    setLoader3(false);
  };

  function ListFlow(props) {
    return (
      <Grid
        item
        style={{
          marginTop: "50px",
          width: "33%",
          justifyContent: "space-between",
        }}
      >
        <Card
          sx={{
            p: 3,
            background: "#444f5e",
            borderRadius: "12px",
            userSelect: "none",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography className="dao-title">{props.name}</Typography>
          <Button
            variant="contained"
            className="creater-btn"
            disableElevation
            style={{ fontWeight: "bold", fontSize: "32px" }}
            onClick={() => {
              let gData = props.model;
              console.log(gData);

              navigate("/view-flow", { state: { gData } });
            }}
          >
            <KeyboardArrowRight style={{ paddingLeft: "5px" }} />
          </Button>
        </Card>
      </Grid>
    );
  }
  return (
    <React.Fragment>
      <BoxWrapper>
        <Box>
          <DaoNavbar />
        </Box>
        <Grid container spacing={0}>
          <Grid className="parent-home-content" item xs={12} md={6} xl={6}>
            <Typography className="main-title">
              Explore SmartDao's endless innovation
            </Typography>
          </Grid>
          <Grid className="parent-image" item xs={12} md={6} xl={6}>
            <div
              style={{
                width: "80%",
                height: "100%",
                padding: 10,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <DaoComponent
                title="Create Your SmartDAO"
                description="Mint tokens, set governance parameters, and deploy your DAO on-chain in minutes with our no-code setup process."
                btnTitle="Create a DAO"
                path="/create-dao"
              />
            </div>
            <div
              style={{
                width: "80%",
                height: "100%",
                padding: 10,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <DaoComponent
                title="Create Your own Flow"
                description="Now get ready to create flows that can be easily integrated with proposal to provide auto execution"
                btnTitle="Create a Flow"
                path="/create-flow"
              />
            </div>
          </Grid>
        </Grid>
        <Box sx={{ padding: "20px 0px" }}>
          <nav className="tabs">
            <div className="selector"></div>
            <a href="#" class="mydao" className="active">
              My DAOs
            </a>
            <a href="#" class="explore">
              Explore DAOs
            </a>
            <a href="#" class="flow">
              Flows
            </a>
          </nav>
          <div class="mydao1">
            {loader1 && (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Spinner />
              </div>
            )}
            <Grid container columnSpacing={3.5}>
              {mydaoList.map((val, index) => (
                <Grid
                  onClick={() => {
                    navigate(`/dao`, {
                      state: {
                        val,
                      },
                    });
                  }}
                  key={index}
                  item
                  xs={12}
                  md={6}
                  xl={6}
                >
                  <Explore
                    title={val.name}
                    subTitle={val.address}
                    icon={val.icon}
                    description={val.description}
                  />
                </Grid>
              ))}
            </Grid>
          </div>
          <div class="explore1" style={{ display: "none" }}>
            {loader2 && (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Spinner />
              </div>
            )}
            <Grid container columnSpacing={3.5}>
              {daoList.map((val, index) => (
                <Grid key={index} item xs={12} md={6} xl={6}>
                  <Explore
                    title={val.name}
                    subTitle={val.address}
                    description={val.description}
                    icon={val.icon}
                  />
                </Grid>
              ))}
            </Grid>
          </div>
          <div class="flow1" style={{ display: "none" }}>
            {loader3 && (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Spinner />
              </div>
            )}
            <Grid container columnSpacing={2}>
              
              {flowList.map((flow) => (
                <ListFlow name={flow.name} model={flow.model} key={flow._id} />
              ))}
            </Grid>
          </div>
        </Box>
      </BoxWrapper>
    </React.Fragment>
  );
};

export default DaoHome;
