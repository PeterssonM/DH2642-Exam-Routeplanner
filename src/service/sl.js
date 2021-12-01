let API = "8914fa48-04a5-4511-94c8-61d49831bd6a"

function Planner(originId, destId) {
    let url = "https://api.resrobot.se/v2/trip?format=json&originId=" + originId + "&destId=" + destId + "&passlist=true&showPassingPoints=true&key=" + API

    return new Promise( (resolve, reject) => {
        fetch(url)
            .then( (response) => response.json())
            .then( (data) => {
                resolve(data);
            })
    })
}

export default Planner;