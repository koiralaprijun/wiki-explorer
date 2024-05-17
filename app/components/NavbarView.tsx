import "@/app/CSS/Navbar.css";
import { AppBar, Toolbar, Typography, Link } from "@mui/material";
import { SearchBoxView } from "@/app/components/SearchBoxView";
import { LoginButton } from "@/app/components/LoginButtonPresenter";

export function NavbarView() {
    return (
        <AppBar
            position="fixed"
            sx={{
                padding: "20px 40px 0 40px",
                justifyContent: "center",
                color: "black",
                backgroundColor: "white",
                boxShadow: "none",
                borderBottom: "1px solid black",
            }}
        >
            <Toolbar sx={{ justifyContent: "space-between" }}>
                <Typography variant="h5" component="h5">
                    <Link
                        href="/"
                        style={{ textDecoration: "none", color: "inherit" }}
                    >
                        Wiki Explorer
                    </Link>
                </Typography>

                <SearchBoxView placeholder="Search Wikipedia" />
                <LoginButton />
            </Toolbar>
        </AppBar>
    );
}
