import { Quality, PageAssessments } from "./types";

function ratingToQuality(rating: string): Quality {
    // not a big fan of this pattern...
    const QUALITY_LOOKUP = {
        FA: Quality.Excellent,
        FL: Quality.Excellent,
        A: Quality.Excellent,
        GA: Quality.Good,
        B: Quality.Good,
        C: Quality.Fine,
        Start: Quality.Short,
        Stub: Quality.Short,
    };

    return Object.hasOwn(QUALITY_LOOKUP, rating)
        ? QUALITY_LOOKUP[rating as keyof typeof QUALITY_LOOKUP]
        : Quality.Unknown;
}

export function determineQuality(
    assessments: PageAssessments | undefined
): Quality {
    if (!assessments) {
        return Quality.Unknown;
    }

    const counts = Object.values(assessments).reduce(
        (
            count: {
                [key: string]: number;
            },
            value
        ) => {
            const rating = value.class;
            count[rating] = 1 + (count[rating] || 0);
            return count;
        },
        {}
    );
    const mostCommonRating = Object.keys(counts).reduce(
        (bestKey, candidateKey) => {
            return counts[candidateKey] > counts[bestKey]
                ? candidateKey
                : bestKey;
        }
    );

    const quality = ratingToQuality(mostCommonRating);
    return quality;
}
