import { Grid, Card, CardContent, Typography } from "@mui/material";

import PageContainer from "../../components/common/PageContainer";

export default function Equipo() {
    return (
        <PageContainer title="Equipo de trabajo">
            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6">
                                Nombre del Integrante: Alan Moreno
                            </Typography>
                            <Typography>
                                Rol: Frontend
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6">
                                Nombre del Integrante: Juan Abraham
                            </Typography>
                            <Typography>
                                Rol: Backend
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6">
                                Nombre del Integrante: Luis Enrique
                            </Typography>
                            <Typography>
                                Rol: Backend
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6">
                                Nombre del Integrante: Jorge Enrique
                            </Typography>
                            <Typography>
                                Rol: Backend
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </PageContainer>
    );
}