import { Box, Typography } from "@mui/material";

export default function PageContainer({ title, children }) {
    return (
        <Box>
            <Typography
                variant="h4"
                sx={{
                    mb: 3,
                    fontSize: {
                        xs: "1.6rem",
                        md: "2rem",
                    },
                }}
            >
                {title}
            </Typography>

            {children}
        </Box>
    );
}