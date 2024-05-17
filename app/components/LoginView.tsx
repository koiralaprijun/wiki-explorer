import { useRouter } from "next/navigation";

import {
    Button,
    CssBaseline,
    TextField,
    Link,
    Box,
    Typography,
    Container,
    Divider,
} from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";

export function LoginView({
    updateEmail,
    updatePassword,
    errorMessage,
    authenticateWithEmail,
    authenticateWithGoogle,
}: {
    updateEmail: (email: string) => void;
    updatePassword: (password: string) => void;
    errorMessage: string;
    authenticateWithEmail: () => Promise<void>;
    authenticateWithGoogle: () => Promise<void>;
}) {
    const router = useRouter();

    function handleSubmitLoginACB(evt: React.FormEvent<HTMLFormElement>) {
        evt.preventDefault();
        authenticateWithEmail().then(() => {
            router.push("/welcome");
        });
    }

    function handleLoginWithGoogleACB(
        evt: React.MouseEvent<HTMLButtonElement>
    ) {
        evt.preventDefault();
        authenticateWithGoogle().then(() => {
            router.push("/welcome");
        });
    }

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
                sx={{
                    marginTop: 8,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "left",
                }}
            >
                <Typography>Welcome to</Typography>
                <Typography
                    fontWeight="bold"
                    sx={{ paddingBottom: 1 }}
                    component="h1"
                    variant="h4"
                >
                    Wiki Explorer
                </Typography>
                <Typography component="div" variant="body2">
                    Don&apos;t have an account?{" "}
                    <Link href="/register"> Sign Up </Link>
                </Typography>

                {/* Google Authentication */}
                <Button
                    startIcon={<GoogleIcon />}
                    onClick={handleLoginWithGoogleACB}
                    sx={{ marginTop: 2, marginBottom: 1 }}
                    variant="outlined"
                >
                    Continue with Google
                </Button>

                <Divider>
                    <Typography variant="overline"> OR </Typography>
                </Divider>
                <Box
                    component="form"
                    onSubmit={handleSubmitLoginACB}
                    noValidate
                    sx={{ mt: 1 }}
                >
                    <TextField
                        margin="normal"
                        required
                        onChange={(e) => updateEmail(e.target.value)}
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                    />
                    <TextField
                        margin="normal"
                        required
                        onChange={(e) => updatePassword(e.target.value)}
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                    />
                    <Button
                        type="submit"
                        variant="contained"
                        sx={{ mt: 3, mb: 2, py: 2, px: 4 }}
                    >
                        {" "}
                        Log In
                    </Button>
                    {errorMessage && (
                        <Typography variant="body2" sx={{ color: "red" }}>
                            {errorMessage}
                        </Typography>
                    )}
                </Box>
            </Box>
        </Container>
    );
}
