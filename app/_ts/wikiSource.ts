import { REST_URL } from "./apiConfig";

export function getPageHTML(name: string) {
    const html_endpoint = "/page/html";
    const url = REST_URL + html_endpoint + "/" + name;

    const options = {
        method: "GET",
        headers: {
            "User-Agent": "Preliminary testing (morrissc@kth.se)",
            Accept: "application/json",
        },
    };

    return fetch(url, options).then(receiveResponseACB);
}

function receiveResponseACB(response: Response) {
    if (!response.ok) {
        throw new Error(
            "Response error: " + response.status + " " + response.statusText
        );
    } else {
        return response.text();
    }
}
