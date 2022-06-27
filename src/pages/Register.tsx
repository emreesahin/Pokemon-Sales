import { Formik } from "formik";

import {
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Typography,
  Box,
  Container,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

import Layout from "../components/layout/Layout";
import { RegisterRequest } from "../models/requests/RegisterRequest.interface.";

import logo from "../assets/images/RegisterBabyPikachu.png";

const Register = () => {
  const navigate = useNavigate();
  const formValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  } as RegisterRequest;

  const loginPass = (values: RegisterRequest) => {
    if (values.confirmPassword === values.password) {
      alert(JSON.stringify(values, null, 2));
      navigate("/login");
    } else {
      alert("Passwords are not matched!");
      values.password = "";
      values.confirmPassword = "";
      return;
    }
  };

  return (
    <>
      <head>
        <title>Register</title>
      </head>
      <Layout>
        <Container maxWidth="xs">
          <Box
            className="box"
            component="span"
            sx={{
              p: 2,
              border: "2px solid grey",
              alignItems: "center",
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <img src={logo} alt=" " />
            <Typography component="h1" variant="inherit">
              Welcome Back
            </Typography>
            <Formik
              initialValues={formValues}
              validate={(values) => {
                const errors = {} as RegisterRequest;
                if (!values.email) {
                  errors.email = "Email address is required";
                } else if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                  errors.email = "Invalid email address. Please check again!";
                }
                if (!values.firstName) {
                  errors.firstName = "*Firs tName is required!";
                } else if (values.firstName.length > 20) {
                  errors.firstName = "*Must be 20 characters or less!";
                }
                if (!values.lastName) {
                  errors.lastName = "*Last Name is required!";
                } else if (values.lastName.length > 20) {
                  errors.lastName = "*Must be 20 characters or less!";
                }
                if (!values.password) {
                  errors.password = "*Password is required!";
                }
                if (values.confirmPassword !== values.password) {
                  errors.password = "*Passwords are not matched!";
                }
                return errors;
              }}
              onSubmit={(values, { setSubmitting }) => {
                setSubmitting(false);
                loginPass(values);
              }}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                dirty,
              }) => (
                <form onSubmit={handleSubmit}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <h5 style={{ color: "red" }}>
                        {errors.firstName &&
                          touched.firstName &&
                          errors.firstName}
                      </h5>
                      <TextField
                        autoComplete="given-name"
                        name="firstName"
                        required
                        fullWidth
                        id="firstName"
                        label="First Name"
                        value={values.firstName}
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <h5 style={{ color: "red" }}>
                        {errors.lastName && touched.lastName && errors.lastName}
                      </h5>
                      <TextField
                        required
                        fullWidth
                        id="lastName"
                        label="Last Name"
                        name="lastName"
                        autoComplete="family-name"
                        value={values.lastName}
                        onChange={handleChange}
                      />
                    </Grid>
                  </Grid>
                  <h5 style={{ color: "red" }}>
                    {errors.email && touched.email && errors.email}
                  </h5>
                  <TextField
                    className="inputs"
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    value={values.email}
                    onChange={handleChange}
                  />
                  <h5 style={{ color: "red" }}>
                    {errors.password && touched.password && errors.password}
                  </h5>
                  <TextField
                    className="inputs"
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    value={values.password}
                    onChange={handleChange}
                  />
                  <h5 style={{ color: "red" }}>
                    {errors.confirmPassword &&
                      touched.confirmPassword &&
                      errors.confirmPassword}
                  </h5>
                  <TextField
                    className="inputs"
                    margin="normal"
                    required
                    fullWidth
                    name="confirmPassword"
                    label="Confirm Password"
                    type="password"
                    id="confirmPassword"
                    autoComplete="current-password"
                    value={values.confirmPassword}
                    onChange={handleChange}
                  />

                  <FormControlLabel
                    control={<Checkbox value="confirm" color="primary" />}
                    label="I want to receive inspiration, marketing promotions and updates via email."
                  />
                  <Button
                    type="submit"
                    variant="contained"
                    fullWidth
                    sx={{ mt: 3, mb: 2 }}
                    disabled={!dirty || isSubmitting}
                  >
                    Sign In
                  </Button>
                </form>
              )}
            </Formik>
            <Grid container>
              <Typography>Already have an account? </Typography>
              <Link to="/login" className="button">
                Sign in!!
              </Link>
            </Grid>
          </Box>
        </Container>
        <br />
      </Layout>
    </>
  );
};
export default Register;
