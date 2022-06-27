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
import { LoginRequest } from "../models/requests/LoginRequest.interface";

import logo from "../assets/images/SignInPikachu.png";

const Login = () => {
  const navigate = useNavigate();
  const formValues = { email: "", password: "" } as LoginRequest;
  const loginPass = (values: LoginRequest) => {
    alert(JSON.stringify(values, null, 2));
    if (values) {
      navigate("/");
    }
  };

  return (
    <>
      <head>
        <title>Login</title>
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
                const errors = {} as LoginRequest;
                if (!values.email) {
                  errors.email = "Email address is required";
                } else if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                  errors.email = "Invalid email address. Please check again!";
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
                  <TextField
                    className="inputs"
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                    value={values.email}
                    onChange={handleChange}
                  />

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
                    autoFocus
                    value={values.password}
                    onChange={handleChange}
                  />

                  <h5 style={{ color: "red" }}>
                    {errors.email && touched.email && errors.email}
                  </h5>

                  {errors.password && touched.password && errors.password}
                  <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Remember me"
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
              <Grid item xs>
                <Link to="/" className="button">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Typography>Don't have an account?</Typography>
                <Link to="/register" className="button">
                  Sign up !!
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Container>
        <br />
      </Layout>
    </>
  );
};
export default Login;
