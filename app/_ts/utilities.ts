export function toDisplayTitle(title: string) {
    return decodeURIComponent(title).replaceAll("_", " ");
}
