import Juan from "../../assets/Juan.jpeg";
import Alan from "../../assets/Alan.jpeg";

import {
  Grid,
  Card,
  CardContent,
  Typography,
  CardMedia,
  Box
} from "@mui/material";

import PageContainer from "../../components/common/PageContainer";

export default function Equipo() {

  return (

    <PageContainer title="Integrantes del equipo de trabajo">

      <Grid container spacing={4}>

        {/* JUAN */}
        <Grid item xs={12} md={6}>

          <Card
            sx={{
              borderRadius: 4,
              boxShadow: 4,
              textAlign: "center",
              p: 2
            }}
          >

            <CardMedia
              component="img"
              image={Juan}
              alt="Juan"
              sx={{
                width: 220,
                height: 220,
                objectFit: "contain",
                margin: "auto",
                mt: 2,
                borderRadius: 3,
                backgroundColor: "#f5f5f5"
              }}
            />

            <CardContent>

              <Typography
                variant="h5"
                fontWeight="bold"
                gutterBottom
              >
                Juan Abraham Mercado Alejo
              </Typography>

              <Typography sx={{ mt: 1 }}>
                Matrícula: IC-0802
              </Typography>

              <Typography>
                Carrera: Ingeniería en Sistemas
              </Typography>

              <Typography>
                Correo: juanmercadoalejo31@gmail.com
              </Typography>

              <Typography>
                Rol: Frontend
              </Typography>

              <Box sx={{ mt: 2 }}>

                <Typography
                  variant="body2"
                  color="text.secondary"
                >

                  Estudiante enfocado en el
                  desarrollo frontend utilizando
                  React y Material UI

                </Typography>

              </Box>

            </CardContent>

          </Card>

        </Grid>

        {/* ALAN */}
        <Grid item xs={12} md={6}>

          <Card
            sx={{
              borderRadius: 4,
              boxShadow: 4,
              textAlign: "center",
              p: 2
            }}
          >

            <CardMedia
              component="img"
              image={Alan}
              alt="Alan"
              sx={{
                width: 220,
                height: 220,
                objectFit: "contain",
                margin: "auto",
                mt: 2,
                borderRadius: 3,
                backgroundColor: "#f5f5f5"
              }}
            />

            <CardContent>

              <Typography
                variant="h5"
                fontWeight="bold"
                gutterBottom
              >
                Alan Moreno Rubio
              </Typography>

              <Typography sx={{ mt: 1 }}>
                Matrícula: IC-0802
              </Typography>

              <Typography>
                Carrera: Ingeniería en Sistemas
              </Typography>

              <Typography>
                Correo: alan@gmail.com
              </Typography>

              <Typography>
                Rol: Backend
              </Typography>

              <Box sx={{ mt: 2 }}>

                <Typography
                  variant="body2"
                  color="text.secondary"
                >

                  Encargado del desarrollo
                  backend y de la lógica
                  principal del sistema.

                </Typography>

              </Box>

            </CardContent>

          </Card>

        </Grid>

        {/* LUIS */}
        <Grid item xs={12} md={6}>

          <Card
            sx={{
              borderRadius: 4,
              boxShadow: 4,
              textAlign: "center",
              p: 2
            }}
          >

            <CardMedia
              component="img"
              image="https://via.placeholder.com/220"
              alt="Luis"
              sx={{
                width: 220,
                height: 220,
                objectFit: "contain",
                margin: "auto",
                mt: 2,
                borderRadius: 3,
                backgroundColor: "#f5f5f5"
              }}
            />

            <CardContent>

              <Typography
                variant="h5"
                fontWeight="bold"
                gutterBottom
              >
                Luis Enrique Fermin Isidro
              </Typography>

              <Typography sx={{ mt: 1 }}>
                Matrícula: IC-0802
              </Typography>

              <Typography>
                Carrera: Ingeniería en Sistemas
              </Typography>

              <Typography>
                Correo: luis@gmail.com
              </Typography>

              <Typography>
                Rol: Base de Datos
              </Typography>

              <Box sx={{ mt: 2 }}>

                <Typography
                  variant="body2"
                  color="text.secondary"
                >

                  Responsable del manejo
                  y organización de la
                  base de datos del sistema.

                </Typography>

              </Box>

            </CardContent>

          </Card>

        </Grid>

        {/* JORGE */}
        <Grid item xs={12} md={6}>

          <Card
            sx={{
              borderRadius: 4,
              boxShadow: 4,
              textAlign: "center",
              p: 2
            }}
          >

            <CardMedia
              component="img"
              image="https://via.placeholder.com/220"
              alt="Jorge"
              sx={{
                width: 220,
                height: 220,
                objectFit: "contain",
                margin: "auto",
                mt: 2,
                borderRadius: 3,
                backgroundColor: "#f5f5f5"
              }}
            />

            <CardContent>

              <Typography
                variant="h5"
                fontWeight="bold"
                gutterBottom
              >
                Jorge Enrique Vazquez Cruz
              </Typography>

              <Typography sx={{ mt: 1 }}>
                Matrícula: IC-0802
              </Typography>

              <Typography>
                Carrera: Ingeniería en Sistemas
              </Typography>

              <Typography>
                Correo: jorge@gmail.com
              </Typography>

              <Typography>
                Rol: Testing
              </Typography>

              <Box sx={{ mt: 2 }}>

                <Typography
                  variant="body2"
                  color="text.secondary"
                >

                  Responsable de las pruebas,
                  validaciones y verificación
                  del correcto funcionamiento
                  del sistema.

                </Typography>

              </Box>

            </CardContent>

          </Card>

        </Grid>

      </Grid>

    </PageContainer>

  );
}