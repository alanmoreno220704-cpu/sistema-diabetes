import { useState } from "react";

import {
  Container,
  Card,
  CardContent,
  TextField,
  Button,
  Typography,
  Stack,
  Alert
} from "@mui/material";

export default function LoginPage() {

  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const validate = () => {

    const newErrors = {};


    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(form.email)
    ) {
      newErrors.email = "Invalid email address";
    }

    if (!form.password) {
      newErrors.password = "Password is required";
    } else if (form.password.length < 6) {
      newErrors.password =
        "Password must contain at least 6 characters";
    }

    return newErrors;
  };

  const handleChange = (e) => {

    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: ""
    }));
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {

      setLoading(true);
      setSuccess("");

      await new Promise((resolve) =>
        setTimeout(resolve, 1500)
      );

      console.log("Datos del login:", form);

      setSuccess("Login correcto");

    } catch (error) {

      setErrors({
        general: "Algo salió mal"
      });

    } finally {

      setLoading(false);

    }
  };

  return (
    <Container
      maxWidth="sm"
      sx={{ mt: 10 }}
    >
      <Card
        elevation={4}
        sx={{
          borderRadius: 4
        }}
      >
        <CardContent sx={{ p: 4 }}>

          <form onSubmit={handleSubmit} noValidate>

            <Stack spacing={3}>

              <Typography
                variant="h4"
                fontWeight="bold"
                align="center"
              >
                Login
              </Typography>

              {errors.general && (
                <Alert severity="error">
                  {errors.general}
                </Alert>
              )}

              {success && (
                <Alert severity="success">
                  {success}
                </Alert>
              )}

              <TextField
                label="Email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                error={Boolean(errors.email)}
                helperText={errors.email}
                fullWidth
                autoComplete="email"
              />

              <TextField
                label="Password"
                name="password"
                type="password"
                value={form.password}
                onChange={handleChange}
                error={Boolean(errors.password)}
                helperText={errors.password}
                fullWidth
                autoComplete="current-password"
              />

              <Button
                variant="contained"
                type="submit"
                size="large"
                fullWidth
                disabled={loading}
                sx={{
                  py: 1.5,
                  fontWeight: "bold",
                  borderRadius: 2
                }}
              >
                {loading
                  ? "Accediendo..."
                  : "Ingresar"}
              </Button>

            </Stack>

          </form>

        </CardContent>
      </Card>
    </Container>
  );
}