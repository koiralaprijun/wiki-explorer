const REST_URL = "https://en.wikipedia.org/api/rest_v1";

const MWA_URL = "https://en.wikipedia.org/w/api.php";

const GET_RQ_OPTIONS = {
    method: "GET",
    headers: {
        "User-Agent": "WikiExplorer (testing) (morrissc@kth.se)",
        Accept: "application/json",
    },
};

export { REST_URL, MWA_URL, GET_RQ_OPTIONS };
