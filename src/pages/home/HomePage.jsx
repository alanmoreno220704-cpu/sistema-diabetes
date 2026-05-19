import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Stack,
  Card,
  CardContent,
  Chip
} from "@mui/material";

import BoltIcon from "@mui/icons-material/Bolt";
import SensorsIcon from "@mui/icons-material/Sensors";
import SecurityIcon from "@mui/icons-material/Security";
import DeviceHubIcon from "@mui/icons-material/DeviceHub";
import GasMeterIcon from "@mui/icons-material/GasMeter";
import ThermostatIcon from "@mui/icons-material/Thermostat";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <Box sx={{ background: "#0f172a", minHeight: "100vh", color: "white" }}>

      {/* HERO SECTION */}
      <Box
        sx={{
          background:
            "radial-gradient(circle at 20% 20%, rgba(59,130,246,0.35), transparent 40%), radial-gradient(circle at 80% 0%, rgba(99,102,241,0.35), transparent 40%), #020617",
          py: { xs: 10, md: 16 }
        }}
      >
        <Container>
          <Grid container spacing={6} alignItems="center">

            {/* TEXT */}
            <Grid item xs={12} md={6}>
              <Stack spacing={4}>

                <Chip
                  label="PÁGINA DE INICIO"
                  sx={{
                    width: "fit-content",
                    background: "rgba(255,255,255,0.08)",
                    color: "white"
                  }}
                />

                <Typography
                  variant="h2"
                  sx={{
                    fontWeight: 700,
                    fontSize: { xs: "2.2rem", md: "3rem" },
                    lineHeight: 1.2
                  }}
                >
                  HOME
                  <br />
                  Nuestro sistema 
                </Typography>

                <Typography
                  variant="h6"
                  sx={{ opacity: 0.75, maxWidth: 500 }}
                >
                  Descripción...
                </Typography>

                <Stack direction="row" spacing={2}>
                  <Button
                    variant="contained"
                    size="large"
                    startIcon={<BoltIcon />}
                    onClick={() => navigate("/dashboard")}
                  >
                    Abrir Dashboard
                  </Button>

                  <Button
                    variant="outlined"
                    size="large"
                    sx={{ color: "white", borderColor: "rgba(255,255,255,0.4)" }}
                  >
                    Ver más...
                  </Button>
                </Stack>
              </Stack>
            </Grid>

            {/* IOT VISUAL CARD */}
            <Grid item xs={12} md={6}>
              <Card
                sx={{
                  background: "rgba(255,255,255,0.05)",
                  backdropFilter: "blur(10px)",
                  borderRadius: 4
                }}
              >
                <CardContent>
                  <Stack spacing={3}>

                    <Typography variant="h6">Datos</Typography>

                    <Grid container spacing={2}>

                      <Grid item xs={4}>
                        <SensorCard
                          icon={<GasMeterIcon />}
                          label="Usuarios"
                          value="50,000"
                        />
                      </Grid>

                    </Grid>

                  </Stack>
                </CardContent>
              </Card>
            </Grid>

          </Grid>
        </Container>
      </Box>

      {/* FEATURES */}
      <Container sx={{ py: 10 }}>
        <Grid container spacing={4}>

          <Grid item xs={12} md={4}>
            <FeatureCard
              icon={<SensorsIcon sx={{ fontSize: 40 }} />}
              title="Real‑Time Monitoring"
              text="Observe sensor data streams from your home environment instantly."
            />
          </Grid>

        </Grid>
      </Container>

    </Box>
  );
}

/* SENSOR STATUS CARD */
function SensorCard({ icon, label, value }) {
  return (
    <Card
      sx={{
        background: "rgba(255,255,255,0.04)",
        textAlign: "center",
        borderRadius: 3
      }}
    >
      <CardContent>
        <Stack spacing={1} alignItems="center">
          {icon}
          <Typography variant="body2" sx={{ opacity: 0.7 }}>
            {label}
          </Typography>
          <Typography variant="h6" fontWeight={600}>
            {value}
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  );
}

/* FEATURE CARD */
function FeatureCard({ icon, title, text }) {
  return (
    <Card
      sx={{
        height: "100%",
        background: "rgba(255,255,255,0.04)",
        borderRadius: 4,
        transition: "0.3s",
        '&:hover': { transform: 'translateY(-6px)' }
      }}
    >
      <CardContent>
        <Stack spacing={2} alignItems="center" textAlign="center">
          {icon}
          <Typography variant="h6" fontWeight={600}>
            {title}
          </Typography>
          <Typography variant="body2" sx={{ opacity: 0.7 }}>
            {text}
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  );
}
