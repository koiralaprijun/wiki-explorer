import { ArticleDetails } from "../_ts/types";
import Image from "next/image";
import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import { QualityChipView } from "./QualityChipView";

export function PopupContentView({
    details,
}: {
    details: ArticleDetails | undefined;
}) {
    if (details) {
        const { title, snippet, image, quality } = details;
        return (
            <Card>
                <CardContent>
                    <Grid container spacing={2}>
                        {image && (
                            <Grid item xs={12} sm={4}>
                                <Image
                                    src={image}
                                    alt={title}
                                    width={100}
                                    height={100}
                                    style={{ borderRadius: "4px" }}
                                />
                            </Grid>
                        )}
                        <Grid item xs={12} sm={8}>
                            <Typography variant="h6" component="div">
                                {title}{" "}
                            </Typography>
                            <QualityChipView quality={quality} />
                            <Typography variant="body2">
                                {snippet ? snippet : "Click to learn more."}
                            </Typography>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        );
    } else {
        return <Typography>Loading...</Typography>;
    }
}
