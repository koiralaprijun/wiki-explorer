import { Chip } from "@mui/material";
import { Quality } from "../_ts/types";

export function QualityChipView({ quality }: { quality: Quality }) {
    if (quality === Quality.Excellent) {
        return <Chip label="Excellent" />;
    } else if (quality === Quality.Good) {
        return <Chip label="Good" />;
    } else {
        return <></>;
    }
}
