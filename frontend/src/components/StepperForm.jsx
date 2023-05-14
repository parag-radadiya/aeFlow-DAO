import * as React from "react";
import MobileStepper from "@mui/material/MobileStepper";
import Button from "@mui/material/Button";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import { Box, Card, Typography, styled, Slider } from "@mui/material";
import * as Yup from "yup";
import { ErrorMessage, Field, FieldArray, Form, Formik } from "formik";
import AddIcon from "@mui/icons-material/Add";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { useNavigate } from "react-router-dom";
import "../StepperForm.css";
import { KeyboardArrowLeft } from "@mui/icons-material";
import  Spinner from './Spinner'
import { upload } from "../utils/web3storageHelper";
import { createDao } from "../utils/aehelper";

const BoxWrapper = styled(Box)({
  padding: "0px 8rem",

  ".progress-card": {
    borderRadius: "12px",
    padding: "36px",
    marginTop: "16px",
  },
  ".progress-title": {
    fontSize: "18px",
    fontWeight: "bold",
    padding: "8px",
    color: "#f5274e",
  },
  ".parent-progress": {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  ".back-btn": {
    backgroundColor: "#f5274e",
    color: "#fff",
    borderRadius: "10px",
  },
  ".next-btn": {
    backgroundColor: "#f5274e",
    color: "#fff",
    borderRadius: "10px",
    marginLeft: "15px",
  },
  ".next-btn:hover": {
    backgroundColor: "#f5274e",
  },
  ".back-btn:hover": {
    backgroundColor: "#f5274e",
  },
  ".progressbar-main": {
    fontSize: "40px",
    fontWeight: 700,
    paddingTop: "15px",
    background: "linear-gradient(to right, #ffefba, #ffffff)",
    "WebkitBackgroundClip": "text",
    "WebkitTextFillColor": "transparent",
  },
  ".pregress-desc": {
    fontSize: "20px",
    fontWeight: 600,
    color: "white",
  },

  ".form-textarea": {
    border: "2px solid #E4E7EB",
    borderRadius: "12px",
    padding: "13px 16px",
    background: "#fff",
    marginTop: "18px",
  },
  ".form-textarea::placeholder": {
    fontSize: "16px",
    color: "#A6ACB7",
  },
  ".form-field": {
    marginTop: "10px",
    border: "2px solid #E4E7EB",
    borderRadius: "12px",
    padding: "13px 16px",
    background: "#fff",
  },
  ".address-field": {
    border: "2px solid #E4E7EB",
    borderRadius: "12px",
    padding: "13px 16px",
    background: "#fff",
  },
  ".form-field::placeholder": {
    fontSize: "16px",
    color: "#A6ACB7",
  },
  ".field-title": {
    fontSize: "18px",
    fontWeight: 700,
    color: "#4D5863",
  },
  ".field-subTitle": {
    fontSize: "14px",
    color: "#67747F",
    paddingTop: "3px",
  },
  ".caracter-count": {
    color: "#67747F",
    fontSize: "14px",
    paddingTop: "12px",
  },
  ".main-field": {
    display: "flex",
    flexDirection: "column",
    paddingTop: "2.5rem",
  },
  ".next-step": {
    textTransform: "none",
    fontSize: "16px",
    borderRadius: "12px",
    background: "#f5274e",
    fontSize: "17px",
    fontWeight: 500,
    borderRadius: "12px",
    padding: "6px 15px",
    color: "white",
  },
  ".back-step": {
    textTransform: "none",
    fontSize: "16px",
    borderRadius: "12px",
    background: "#f5274e",
  },
  ".error": {
    color: "red",
    fontSize: "16px",
  },
  ".mint-title": {
    fontSize: "24px",
    fontWeight: 700,
    color: "#4D5863",
  },
  ".mint-description": {
    fontSize: "18px",
    fontWeight: 500,
    color: "#67747F",
  },
  ".eligible-radio": {
    position: "absolute",
    top: "10px",
    right: "12px",
  },
  ".vote-radio": {
    position: "absolute",
    top: "15px",
    right: "12px",
    width: "20px",
  },
  ".parent-token-holder": {
    border: "2px solid #0075FF",
    borderRadius: "12px",
    padding: "12px 16px",
    marginTop: "10px",
    position: "relative",
  },
  ".allocation-btn": {
    background: "#E4E7EB",
    color: "#566470",
    border: "1px solid #566470",
    borderRadius: "12px",
    padding: "10px 15px",
  },
  ".time": {
    fontSize: "14px",
  },
  ".parent-duration": {
    border: "1px solid #f5274e",
    display: "flex",
    gap: "10px",
    marginTop: "10px",
    padding: "24px",
    background: "#fff",
    borderRadius: "12px",
  },
});

const StepperForm = () => {
  const [activeStep, setActiveStep] = React.useState(1);
  const [supportStep, setSupportstep] = React.useState(1);
  const [isLoading, setLoading] = React.useState(false)
  const formikRef =React.useRef()
  //  for count the carecter -->
  const [characterCount, setCaracterCount] = React.useState(0);  
  // for stepper state ---->
  const [step, setStep] = React.useState(1);
  const [file, setFile] = React.useState(0);

  const navigate = useNavigate();

  // count the minimum token
  const [countToken, setCountToken] = React.useState(0);

  const handle = (e) => {
    setFile(e.target.files[0]);
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const supportNext = () => {
    setSupportstep((prevActiveStep) => prevActiveStep + 1);
  };

  const supportBack = () => {
    setSupportstep((prevActiveStep) => prevActiveStep - 1);
  };

  const DisplayingErrorMessagesSchema = Yup.object().shape({
    daoname: Yup.string().required("Dao-Name is Required"),
    subdomain: Yup.string().required("Sub-Domain Required"),
    description: Yup.string().required(" Description is Required"),
    name: Yup.string().required(" Name is Required"),
    symbol: Yup.string().required(" Symbol is Required"),
  });

  return (
    <>
      <MobileStepper
        variant="progress"
        steps={4}
        position="static"
        activeStep={activeStep}
      />
      <BoxWrapper>
        <Box sx={{ p: 2 }}>
          <Box className="progress-card">
            <Box className="parent-progress">
              <Typography className="progress-title">
                Create your DAO
              </Typography>

              <Typography sx={{ color: "white" }}>
                Step {activeStep} of 3
              </Typography>
            </Box>
            {step == 1 && (
              <Box>
                <Typography className="progressbar-main">
                  Describe your DAO
                </Typography>
                <Typography className="pregress-desc">
                  Name and define your DAO so new contributors know they've come
                  to the right place. This information is displayed on the DAO
                  Explore page and can be changed with a vote. For ideas on DAO
                  branding,
                </Typography>
              </Box>
            )}
            {step == 2 && (
              <Box>
                <Typography className="progressbar-main">
                  Define membership
                </Typography>
                <Typography className="pregress-desc">
                  Decide the type of voting your DAO uses. You can change these
                  settings with a vote. For help deciding which type of
                  governance is best for you
                </Typography>
              </Box>
            )}
            {step == 3 && (
              <Box>
                <Typography className="progressbar-main">
                  Select governance settings
                </Typography>
                <Typography className="pregress-desc">
                  These settings determine how voting works in your DAO. Read
                  best practices for governance settings in this guide.
                </Typography>
              </Box>
            )}
          </Box>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Card
              elevation={0}
              sx={{
                width: "40%",
                padding: "20px",
                marginTop: "20px",
                background: "#F5F7FA",
                borderRadius: "30px",
              }}
            >
              <Formik
                innerRef={formikRef}
                initialValues={{
                  daoname: "",
                  subdomain: "",
                  description: "",
                  secondEmail: "",
                  name: "",
                  symbol: "",
                  picked: "",
                  execution: "",
                  votethreshold: 0,
                  detail: [
                    {
                      name: "",
                      link: "",
                    },
                  ],
                  distribute: [
                    {
                      address: "",
                      percentage: "" 
                    },
                  ],
                  tsupply: ""
                }}
                validationSchema={DisplayingErrorMessagesSchema}
              >
                {({ errors, touched, values, handleChange, setFieldValue }) => (
                  <Form onSubmit={async (e)=>{
                    e.preventDefault()
                    setLoading(true)
                    let cid =  await upload(file)
                    let metadata = {
                      'icon': `https://${cid}.ipfs.cf-ipfs.com/`,
                      'links': values.detail,
                      'description': values.description
                    }
                    let distribution = {}
                    for(let dst of values.distribute) {
                      distribution[dst.address] = parseInt(dst.percentage)
                    }
                    await createDao(values.daoname, values.symbol, JSON.stringify(metadata), distribution, parseInt(values.tsupply), values.votethreshold)
                    navigate('/dashboard')
                  }}>
                    <Box sx={{ p: 2 }}>
                      {step == 1 && (
                        <Box display={"flex"} flexDirection={"column"}>
                          <Box display={"flex"} flexDirection={"column"}>
                            <Typography className="field-title">
                              DAO name
                            </Typography>
                            <Typography className="field-subTitle">
                              Maximum of 128 characters
                            </Typography>
                            <Field
                              name="daoname"
                              className="form-field"
                              value={values.daoname}
                              onChange={(e) => {
                                handleChange(e);
                                setCaracterCount(e.target.value.length);
                              }}
                              placeholder="Type your DAOs name..."
                            />
                            <Typography className="caracter-count">
                              {characterCount}/128
                            </Typography>
                            <ErrorMessage name="daoname">
                              {(msg) => <div className="error">{msg}</div>}
                            </ErrorMessage>
                          </Box>
                          <Box className="main-field">
                            <Typography className="field-title">
                              LOGO
                            </Typography>
                            <Typography className="field-subTitle">
                              JPG, PNG, GIF, or SVG of no more than 3MB. We
                              recommend 1024x1024px.
                            </Typography>
                            <Box>
                              {file ? (
                                <img
                                  src={
                                    file
                                      ? URL.createObjectURL(file)
                                      : "https://thumbs.dreamstime.com/z/live-streaming-handwritten-white-background-178485360.jpg"
                                  }
                                  alt="test-image"
                                  width={"64px"}
                                  style={{ marginTop: "16px" }}
                                />
                              ) : (
                                <label htmlFor="upload1">
                                  <Box
                                    sx={{
                                      border: "2px dotted grey",
                                      width: "60px",
                                      height: "60px",
                                      display: "flex",
                                      justifyContent: "center",
                                      alignItems: "center",
                                      mt: 2,
                                    }}
                                  >
                                    <AddIcon />
                                  </Box>

                                  <input
                                    type="file"
                                    alt="image-upload"
                                    id="upload1"
                                    onChange={handle}
                                    hidden
                                  />
                                </label>
                              )}
                            </Box>
                          </Box>
                          <Box
                            display={"flex"}
                            flexDirection={"column"}
                            className="main-field"
                          >
                            <Typography className="field-title">
                              Description
                            </Typography>
                            <Typography className="field-subTitle">
                              Describe your DAO's purpose in a few sentences.
                              This is listed on the Explore page so new
                              contributors can find you.
                            </Typography>
                            <Field
                              as="textarea"
                              rows={7}
                              name="description"
                              className="form-textarea"
                              value={values.description}
                              onChange={handleChange}
                              placeholder="Type your summary..."
                            />
                            <ErrorMessage name="description">
                              {(msg) => <div className="error">{msg}</div>}
                            </ErrorMessage>
                          </Box>
                          <Box className="main-field">
                            <Typography className="field-title">
                              Links
                            </Typography>
                            <Typography className="field-subTitle">
                              Links to your DAO's website, social media
                              profiles, Discord, or other places your community
                              gathers.
                            </Typography>

                            <div>
                              <div>
                                <FieldArray name="detail">
                                  {({ insert, remove, push }) => (
                                    <div>
                                      <Box
                                        className="main-field"
                                        sx={{
                                          background: "#fff",
                                          marginTop: "18px",
                                          padding: "16px 13px",
                                          borderRadius: "10px",
                                        }}
                                      >
                                        <div>
                                          <Box
                                            sx={{
                                              display: "flex",
                                              gap: "130px",
                                            }}
                                          >
                                            <div className="field-title">
                                              Name/Description
                                            </div>
                                            <div className="field-title">
                                              Link
                                            </div>
                                          </Box>

                                          {values.detail.length > 0 &&
                                            values?.detail?.map(
                                              (detail, index) => (
                                                <div
                                                  key={index}
                                                  style={{
                                                    display: "flex",
                                                    justifyContent:
                                                      "space-between",
                                                    
                                                  }}
                                                >
                                                  <div>
                                                    <Field
                                                      className="form-field"
                                                      name={`detail.${index}.name`}
                                                      placeholder="Lens,Discord,etc."
                                                      type="text"
                                                      value={
                                                        values.detail[index]
                                                          ?.name
                                                      }
                                                      onChange={handleChange}
                                                    />
                                                  </div>
                                                  <div>
                                                    <Field
                                                      className="form-field"
                                                      name={`detail.${index}.link`}
                                                      placeholder="https://"
                                                      type="text"
                                                      value={
                                                        values.detail[index]
                                                          ?.link
                                                      }
                                                      onChange={handleChange}
                                                    />
                                                  </div>
                                                  <div
                                                    style={{
                                                      display: "flex",
                                                    
                                                    }}
                                                  >
                                                    <div
                                                      onClick={() =>
                                                        remove(index)
                                                      }
                                                    >
                                                      <DeleteForeverIcon
                                                        sx={{
                                                          color: "#f5274e",
                                                        }}
                                                      />
                                                    </div>
                                                  </div>
                                                </div>
                                              )
                                            )}
                                        </div>
                                      </Box>
                                      <div>
                                        <Button
                                          style={{ color: "#f5274e" }}
                                          onClick={() => {
                                            push({
                                              value: "",
                                              Workstreams: "",
                                            });
                                          }}
                                        >
                                          Add Link
                                        </Button>
                                      </div>
                                    </div>
                                  )}
                                </FieldArray>
                              </div>
                            </div>
                          </Box>
                          <div
                            style={{
                              marginTop: "10px",
                              display: "flex",
                              justifyContent: "flex-end",
                            }}
                          >
                            <Button
                           
                              className="next-step"
                              style={{ background:  "#f5274e"}}
                              onClick={() => {
                                if (values.daoname && values.description) {
                                  setStep(2);
                                  handleNext();
                                }
                              }}
                            >
                              {"Next"}
                              <KeyboardArrowRight
                                style={{ paddingLeft: "5px" }}
                              />{" "}
                            </Button>
                          </div>
                        </Box>
                      )}
                      {step == 2 && (
                        <Box>
                          <Box className="main-field">
                            <Typography className="mint-title">
                              Mint your token
                            </Typography>
                            <Typography className="mint-description">
                              Define the token details and distribute tokens to
                              a core team and DAO treasury. For more on token
                              minting best practices,
                            </Typography>
                          </Box>

                          <Box className="main-field">
                            <Typography className="field-title">
                              Name
                            </Typography>
                            <Typography className="field-subTitle">
                              The full name of the token. Example: Uniswap
                            </Typography>
                            <Field
                              name="name"
                              className="form-field"
                              value={values.name}
                              onChange={handleChange}
                              placeholder="Name..."
                            />
                            <ErrorMessage name="name">
                              {(msg) => <div className="error">{msg}</div>}
                            </ErrorMessage>
                          </Box>

                          <Box className="main-field">
                            <Typography className="field-title">
                              Symbol
                            </Typography>
                            <Typography className="field-subTitle">
                              The abbreviation of the token. Example: UNI
                            </Typography>
                            <Field
                              name="symbol"
                              className="form-field"
                              value={values.symbol}
                              onChange={handleChange}
                              placeholder="Symbol..."
                            />
                            <ErrorMessage name="symbol">
                              {(msg) => <div className="error">{msg}</div>}
                            </ErrorMessage>
                          </Box>
                          {/* ---------------------  */}

                          <Box className="main-field">
                            <Typography className="field-title">
                              Total Supply
                            </Typography>
                            
                            <Field
                              name="tsupply"
                              className="form-field"
                              value={values.tsupply}
                              onChange={handleChange}
                              placeholder="Total Supply..."
                            />
                            <ErrorMessage name="symbol">
                              {(msg) => <div className="error">{msg}</div>}
                            </ErrorMessage>
                          </Box>
                          <Box className="main-field">
                            <Typography className="field-title">
                              Distribute tokens
                            </Typography>
                            <Typography className="field-subTitle">
                              Add the wallets you'd like to distribute tokens
                              to. If you need help distributing tokens, .
                            </Typography>
                          </Box>

                          <div>
                            <FieldArray name="distribute">
                              {({ insert, remove, push }) => (
                                <div>
                                  <Box
                                    className="main-field"
                                    sx={{
                                      background: "#fff",
                                      marginTop: "18px",
                                      padding: "16px 13px",
                                      borderRadius: "10px",
                                    }}
                                  >
                                    <div>
                                      <Box
                                        sx={{
                                          display: "flex",
                                          gap: "160px",
                                          justifyContent: "space-between",
                                        }}
                                      >
                                        <div className="field-title">
                                          Address
                                        </div>

                                        <div className="field-title">
                                          Allocation
                                        </div>
                                      </Box>

                                      {values.distribute.length > 0 &&
                                        values?.distribute?.map(
                                          (distribute, index) => (
                                            <div
                                              key={index}
                                              style={{
                                                display: "flex",
                                              }}
                                            >
                                              <div style={{ flex: 1 }}>
                                                <Field
                                                  className="address-field"
                                                  name={`distribute.${index}.address`}
                                                  placeholder="Wallet Address"
                                                  type="text"
                                                  value={
                                                    values.distribute[index]
                                                      ?.address
                                                  }
                                                  onChange={handleChange}
                                                />
                                              </div>
                                              <div
                                                style={{
                                                  display: "flex",
                                                  flexDirection: "row",
                                                  alignItems: "center",
                                                  gap: "10px",
                                                }}
                                              >
                                                <Box>
                                                  <Field
                                                    className="address-field"
                                                    name={`distribute.${index}.percentage`}
                                                    placeholder="In %"
                                                    type="text"
                                                    value={
                                                      values.distribute[index]
                                                        ?.percentage
                                                    }
                                                    style={{ width: "50px" }}
                                                    onChange={handleChange}
                                                  />
                                                </Box>

                                                <div
                                                  style={{
                                                    display: "flex",
                                                    alignItems: "end",
                                                    marginBottom: "1%",
                                                  }}
                                                >
                                                  <div
                                                    onClick={() =>
                                                      remove(index)
                                                    }
                                                  >
                                                    <DeleteForeverIcon
                                                      sx={{ color: "#f5274e" }}
                                                    />
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          )
                                        )}
                                    </div>
                                  </Box>
                                  <div>
                                    <Button
                                      style={{ color: "#f5274e" }}
                                      onClick={() => {
                                        push({ value: "", Workstreams: "" });
                                      }}
                                    >
                                      Add Wallet
                                    </Button>
                                  </div>
                                </div>
                              )}
                            </FieldArray>
                          </div>

                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "space-between",
                              marginTop: "10px",
                            }}
                          >
                            <Button
                              className="next-step"
                              style={{ background:  "#f5274e"}}
                              onClick={() => {
                                setStep(1);
                                handleBack();
                              }}
                            >
                              <KeyboardArrowLeft
                                style={{ paddingLeft: "5px" }}
                              />
                              {"Back"}
                            </Button>
                            <Button
                              className="next-step"
                              style={{ background:  "#f5274e"}}
                              onClick={() => {
                                handleNext();
                                setStep(3);
                              }}
                            >
                              {"Next"}
                              <KeyboardArrowRight
                                style={{ paddingLeft: "5px" }}
                              />
                            </Button>
                          </Box>
                        </Box>
                      )}
                      {step == 3 && (
                        <Box>
                          <Box className="main-field">
                            <Typography className="field-title">
                              Support threshold
                            </Typography>
                            <Typography className="field-subTitle">
                              Support threshold is the percentage of tokens or
                              that are required to vote “Yes” for a proposal to
                              be approved, calculated based on total tokens that
                              voted.
                            </Typography>
                          </Box>
                          <Box
                            sx={{
                              border: "1px solid red",
                              borderRadius: "12px",
                              background: "#fff",
                              p: 3,
                              mt: 1,
                            }}
                          >
                            <Box
                              sx={{
                                border: "2px solid #E4E7EB",

                                marginTop: "5px",
                                borderRadius: "12px",
                                padding: "8px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                              }}
                            >
                              <Typography>{values.votethreshold}%</Typography>
                            </Box>
                            <Slider
                              value={values.votethreshold}
                              onChange={(e, v)=>{  setFieldValue('votethreshold', v) }}
                              min={0}
                              max={100}
                              name="votethreshold"
                              style={{ color: '#f5274e'}}
                              sx={{ borderRadius: "20px" }}
                            />
                          </Box>

                          <Box
                            sx={{
                              display: "flex",
                              marginTop: "25px",
                              justifyContent: "space-between",
                            }}
                          >
                            <Button
                              className="next-step"
                              style={{ background:  "#f5274e"}}
                              onClick={() => {
                                setStep(2);
                                handleBack();
                              }}
                            >
                              <KeyboardArrowLeft
                                style={{ paddingLeft: "5px" }}
                              />
                              {"Back"}
                            </Button>
                            <Button
                              type="submit"
                              className="next-step"
                          
                            >
                              {isLoading && <Spinner />}
                              {!isLoading && "Create"}
                            </Button>
                          </Box>
                        </Box>
                      )}
                    </Box>
                  </Form>
                )}
              </Formik>
            </Card>
          </div>
        </Box>
      </BoxWrapper>
    </>
  );
};

export default StepperForm;
