import React, { useEffect, useState } from "react";
import { Box, Button, Card, Typography, styled } from "@mui/material";
import * as Yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useNavigate, useLocation } from "react-router-dom";
import CreateDaoNavbar from "../components/CreateDaoNavbar";
import Spinner from '../components/Spinner'
import { createProposal } from "../utils/aehelper";

const BoxWrapper = styled(Box)({
  ".form-textarea": {
    width: "100%",
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
    width: "100%",
    border: "2px solid #E4E7EB",
    borderRadius: "12px",
    marginTop: "15px",
    padding: "13px 16px",
    background: "#fff",
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
    paddingTop: "2rem",
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
  ".error": {
    color: "red",
    fontSize: "16px",
  },
  ".main-propasal-card": {
    width: "650px",
    borderRadius: 30,
    padding: "25px 55px 21px 22px",
    marginTop: "20px",
    background: "#F5F7FA",
  },
  ".parent-proposal": {
    display: "flex",
    justifyContent: "center",
  },
  ".flow-select": {
    width: "106%",
    border: "2px solid #E4E7EB",
    // borderRadius: '12px',
    // padding: '1px 16px',
    background: "#fff",
  },
});

const ProposalForm = () => {
  const [characterCount, setCaracterCount] = useState(0);
  const navigate = useNavigate();
  const location = useLocation()
  const [isLoading, setLoader] = useState(false)
  const [flows, setFlows] = useState([])
  const DisplayingErrorMessagesSchema = Yup.object().shape({
    title: Yup.string().required("proposal-title is Required"),
    description: Yup.string().required("Description is Required"),
    flow: Yup.string().required("flow is Required"),
  });

  useEffect(()=>{
    (async ()=>{
      let out = []
      let data = await fetch(
        `https://api.aeflowdao.cloud/escrow/escmod/${window.walletAddress}`
      );
      data = await data.json();
      for(let f of data){
        console.log(f.name)
        out.push([f._id ,f.name])
      }
      setFlows(out)
    })()
  },[])

  return (
    <React.Fragment>
      <CreateDaoNavbar />
      <BoxWrapper sx={{ paddingTop: "50px", fontSize: "50px" }}>
        <div className="parent-proposal">
          <Card className="main-propasal-card" elevation={0}>
            <Formik
              initialValues={{
                title: "",
                description: "",
                flow: "",
              }}
              validationSchema={DisplayingErrorMessagesSchema}
            >
              {({ errors, touched, values, handleChange }) => (
                <Form onSubmit={async (e)=>{
                  e.preventDefault()
                  setLoader(true)
                  let description = {
                    title: values.title,
                    text: values.description
                  }
                  await createProposal(location.state.address, JSON.stringify(description), values.flow)
                  navigate('/dashboard')
                }}>
                  <Box sx={{ p: 2 }}>
                    <Box>
                      <Typography className="field-title">
                        Proposal Title
                      </Typography>
                      <Typography className="field-subTitle">
                        Maximum of 128 characters
                      </Typography>
                      <Field
                        name="title"
                        className="form-field"
                        value={values.title}
                        onChange={(e) => {
                          handleChange(e);
                          setCaracterCount(e.target.value.length);
                        }}
                        placeholder="Type your Proposal title..."
                      />
                      <Typography className="caracter-count">
                        {characterCount}/128
                      </Typography>
                      <ErrorMessage name="title">
                        {(msg) => <div className="error">{msg}</div>}
                      </ErrorMessage>
                    </Box>

                    <Box className="main-field">
                      <Typography className="field-title">
                        Description
                      </Typography>
                      <Typography className="field-subTitle">
                        Describe your Proposal in a few sentences. 
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
                        Condition Flow
                      </Typography>
                      <FormControl fullWidth >
                        <Select
                          className="flow-select"
                          name="flow"
                          value={values.flow}
                     
                          inputProps={{ 'aria-label': 'Without label' }}
                          onChange={handleChange}

                        >
                          {flows.map((val)=>(
                            <MenuItem value={val[0]}>{val[1]}</MenuItem>
                          ))}
                    
                        </Select>
                      </FormControl>
                      <ErrorMessage name="flow">
                        {(msg) => <div className="error">{msg}</div>}
                      </ErrorMessage>
                    </Box>

                    <div
                      style={{
                        marginTop: "20px",
                        display: "flex",
                        justifyContent: "flex-end",
                      }}
                    >
                      <Button
                        type="submit"
                        className="next-step"
                      >
                        {" "}
                        {isLoading && <Spinner />}
                        {!isLoading && "Create"}
                      </Button>
                    </div>
                  </Box>
                </Form>
              )}
            </Formik>
          </Card>
        </div>
      </BoxWrapper>
    </React.Fragment>
  );
};

export default ProposalForm;
