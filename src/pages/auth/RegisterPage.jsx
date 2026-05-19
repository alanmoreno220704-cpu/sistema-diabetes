import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  Alert,
  Button,
  Card,
  CardContent,
  CircularProgress,
  Container,
  Stack,
  TextField,
  Typography
} from "@mui/material";

export default function RegisterPage() {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = ({ target }) => {

    const { name, value } = target;

    setForm((prev) => ({
      ...prev,
      [name]: value
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: ""
    }));
  };

  const validateForm = () => {

    const newErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "Ingresa tu nombre";
    }

    if (!form.email.trim()) {

      newErrors.email = "Ingresa tu correo";

    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(form.email)
    ) {

      newErrors.email = "Correo inválido";
    }

    if (!form.password) {

      newErrors.password = "Ingresa una contraseña";

    } else if (form.password.length < 8) {

      newErrors.password = "Mínimo 8 caracteres";
    }

    if (form.password !== form.confirmPassword) {

      newErrors.confirmPassword = "Las contraseñas no coinciden";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    const isValid = validateForm();

    if (!isValid) return;

    try {

      setLoading(true);

      await new Promise((resolve) =>
        setTimeout(resolve, 1500)
      );

      console.log("Datos de registro:", form);

      navigate("/login");

    } catch (error) {

      console.error(error);

    } finally {

      setLoading(false);
    }
  };

  return (

    <Container
      maxWidth="sm"
      sx={{
        mt: 10
      }}
    >

      <Card elevation={4}>

        <CardContent>

          <form
            onSubmit={handleSubmit}
            noValidate
          >

            <Stack spacing={3}>

              <div>

                <Typography
                  variant="h4"
                  fontWeight={700}
                  align="center"
                >
                  Crear cuenta
                </Typography>

                <Typography
                  variant="body2"
                  color="text.secondary"
                >
                  Completa el formulario para registrarte
                </Typography>

              </div>

              {/* Nombre */}
              <TextField
                label="Nombre"
                name="name"
                fullWidth
                autoComplete="name"
                value={form.name}
                onChange={handleChange}
                error={!!errors.name}
                helperText={errors.name}
              />

              {/* Correo */}
              <TextField
                label="Correo electrónico"
                name="email"
                type="email"
                fullWidth
                autoComplete="email"
                value={form.email}
                onChange={handleChange}
                error={!!errors.email}
                helperText={errors.email}
              />

              {/* Contraseña */}
              <TextField
                label="Contraseña"
                name="password"
                type="password"
                fullWidth
                autoComplete="new-password"
                value={form.password}
                onChange={handleChange}
                error={!!errors.password}
                helperText={errors.password}
              />

              {/* Confirmar contraseña */}
              <TextField
                label="Confirmar contraseña"
                name="confirmPassword"
                type="password"
                fullWidth
                autoComplete="new-password"
                value={form.confirmPassword}
                onChange={handleChange}
                error={!!errors.confirmPassword}
                helperText={errors.confirmPassword}
              />

              <Button
                type="submit"
                variant="contained"
                size="large"
                fullWidth
                disabled={loading}
                sx={{
                  py: 1.5,
                  fontWeight: 700
                }}
              >

                {loading ? (
                  <CircularProgress
                    size={24}
                    color="inherit"
                  />
                ) : (
                  "Registrarse"
                )}

              </Button>

              <Button
                onClick={() => navigate("/login")}
              >
                ¿Ya tienes cuenta? Inicia sesión
              </Button>

            </Stack>

          </form>

        </CardContent>

      </Card>

    </Container>
  );
}