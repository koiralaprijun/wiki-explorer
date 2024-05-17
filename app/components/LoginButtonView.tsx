"use client";
import { Typography, Link, Box } from "@mui/material";

import Face5Icon from "@mui/icons-material/Face5";
import Stack from "@mui/material/Stack";

export function LoginButtonView({
    firstName,
    logout,
}: {
    firstName: string | undefined;
    logout: () => void;
}) {
    return firstName ? (
        <Box>
            <Stack direction="row" spacing={2} alignItems="center">
                <Box
                    sx={{
                        bgcolor: "#f0f0f0",
                        p: 1,
                        borderRadius: 1,
                        display: "flex",
                        alignItems: "center",
                    }}
                >
                    <Face5Icon sx={{ marginRight: 1 }} />
                    <Typography variant="body1">{firstName}</Typography>
                </Box>
                <Link onClick={logout} style={{ cursor: "pointer" }}>
                    Logout
                </Link>
            </Stack>
        </Box>
    ) : (
        <Link href="/login" className="login" color="primary">
            Login/Create Account
        </Link>
    );
}
