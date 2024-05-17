import { Typography, Link, CssBaseline, Container } from "@mui/material";

export function NotFoundView() {
    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Typography variant="h2">Not Found</Typography>
            <Typography variant="body1">
                Sorry, this page does not exist.
            </Typography>
            <iframe
                src="https://giphy.com/embed/2c2DyqhbixfUY"
                width="480"
                height="319"
                className="giphy-embed"
                allowFullScreen
            ></iframe>
            <p>
                <a href="https://giphy.com/gifs/bear-2c2DyqhbixfUY"></a>
            </p>
            <Link href="/">Return Home</Link>
        </Container>
    );
}
