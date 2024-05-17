import { useRouter } from "next/navigation";

import {
    Button,
    CssBaseline,
    TextField,
    Link,
    Grid,
    Box,
    Typography,
    Container,
    Divider,
} from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

export function RegisterView({
    setFirstName,
    setLastName,
    setEmail,
    setPassword,
    setConfirmPassword,
    showPassword,
    showConfirmPassword,
    toggleShowPassword,
    toggleShowConfirmPassword,
    errorMessage,
    signupWithEmail,
    authenticateWithGoogle,
}: {
    setFirstName: (firstName: string) => void;
    setLastName: (lastName: string) => void;
    setEmail: (email: string) => void;
    setPassword: (password: string) => void;
    setConfirmPassword: (confirmPassword: string) => void;
    showPassword: boolean;
    showConfirmPassword: boolean;
    toggleShowPassword: () => void;
    toggleShowConfirmPassword: () => void;
    errorMessage: string;
    signupWithEmail: () => Promise<void>;
    authenticateWithGoogle: () => Promise<void>;
}) {
    const router = useRouter();

    function handleSubmitSignupACB(evt: React.FormEvent<HTMLFormElement>) {
        evt.preventDefault();
        signupWithEmail().then(() => {
            router.push("/login");
        });
    }

    function handleLoginWithGoogleACB(
        evt: React.MouseEvent<HTMLButtonElement>
    ) {
        evt.preventDefault();
        authenticateWithGoogle().then(() => {
            router.push("/login");
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
                <Typography>Wiki Explorer</Typography>
                <Typography fontWeight="bold" component="h1" variant="h4">
                    Sign up
                </Typography>
                <Typography component="div" variant="body2">
                    Already have an account? <Link href="/login">Sign In</Link>
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
                    onSubmit={handleSubmitSignupACB}
                    noValidate
                    sx={{ mt: 3 }}
                >
                    <Grid
                        container
                        spacing={2}
                        alignItems="center"
                        justifyContent="flex-start"
                    >
                        <Grid item xs={12} sm={6}>
                            <TextField
                                autoComplete="given-name"
                                onChange={(e) => setFirstName(e.target.value)}
                                name="firstName"
                                required
                                fullWidth
                                id="firstName"
                                label="First Name"
                                autoFocus
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                fullWidth
                                id="lastName"
                                onChange={(e) => setLastName(e.target.value)}
                                label="Last Name"
                                name="lastName"
                                autoComplete="family-name"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                onChange={(e) => setEmail(e.target.value)}
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                            />
                        </Grid>
                        <Grid item xs={12} sm={9}>
                            <TextField
                                required
                                fullWidth
                                onChange={(e) => setPassword(e.target.value)}
                                name="password"
                                label="Password"
                                type={showPassword ? "text" : "password"}
                                id="password"
                                autoComplete="new-password"
                            />
                        </Grid>
                        <Grid item xs={12} sm={2}>
                            <Button
                                variant="outlined"
                                startIcon={<VisibilityIcon />}
                                onClick={toggleShowPassword}
                            >
                                Show
                            </Button>
                        </Grid>

                        <Grid item xs={12} sm={9}>
                            <TextField
                                required
                                fullWidth
                                onChange={(e) =>
                                    setConfirmPassword(e.target.value)
                                }
                                name="password_confirm"
                                label="Password Confirmation"
                                type={showConfirmPassword ? "text" : "password"}
                                id="password_confirm"
                                autoComplete="new-password"
                            />
                        </Grid>
                        <Grid item xs={12} sm={2}>
                            <Button
                                variant="outlined"
                                startIcon={<VisibilityIcon />}
                                onClick={toggleShowConfirmPassword}
                            >
                                Show
                            </Button>
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        {" "}
                        Register{" "}
                    </Button>
                    {errorMessage && (
                        <Typography variant="body2" sx={{ color: "red" }}>
                            {" "}
                            {errorMessage}{" "}
                        </Typography>
                    )}
                </Box>
            </Box>
        </Container>
    );
}
