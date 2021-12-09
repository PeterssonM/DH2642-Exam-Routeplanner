const BASE_URL_ROUTE_PLANNER = "https://api.resrobot.se/v2/trip?";
const FORMAT = "format=json";
const PASSLIST = "&passlist=true";
const SHOWPASSINGPOINTS = "&showPassingPoints=true";
const API_KEY = "&key=8914fa48-04a5-4511-94c8-61d49831bd6a";


export default function RoutePlanner(originId, destId) {
    let url = BASE_URL_ROUTE_PLANNER +
              FORMAT +
              "&originId=" + originId +
              "&destId=" + destId +
              PASSLIST +
              SHOWPASSINGPOINTS +
              API_KEY;

    return new Promise( (resolve, reject) => {
        fetch(url)
            .then( (response) => response.json())
            .then( (data) => {
                resolve(data);
            })
    })
}
