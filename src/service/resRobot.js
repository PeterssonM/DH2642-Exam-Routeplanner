import { RES_ROBOT_API_KEY} from "./Config"

/**
 *
 * Takes input that is equal to the station that is being seach up.
 *
 * @param {string} input
 * @returns
 */
export function findByName(input) {
    return new Promise( (resolve, reject) => {
        let url = "https://api.resrobot.se/v2/location.name?" + "key=" + RES_ROBOT_API_KEY + "&input=" + input + "&format=json"

        fetch(url)
            .then( (response) => response.json())
            .then( (data) => {

                return resolve(data.StopLocation[0])
            })
    })
}


/**
 * Returns all data related to a station.
*/
export function getIdFromName(input) {
    let url = "https://api.resrobot.se/v2/location.name?" + "key=" + RES_ROBOT_API_KEY + "&input=" + input + "&format=json"

    return new Promise( (resolve, reject) => {
        fetch(url)
        .then( (response) => response.json())
        .then( (data) => {
            return resolve(data)
        })
    })

}

/**
 *
 * takes in id to origin and destionation and return a promise with the travel plan.
 *
 * @param {string} origin
 * @param {string} destination
 * @returns
 */
export function getPlan(origin, destination) {
    let url = "https://api.resrobot.se/v2/trip?format=json" + "&originId=" + origin + "&destId=" + destination + "&key=" + RES_ROBOT_API_KEY + "&passlist=true&showPassingPoints=true"


    return new Promise( (resolve, reject) => {
        fetch(url)
        .then( (response) => response.json())
        .then( (data) => {

            let result = {
                stops: []
            }

            data.Trip[0].LegList.Leg.forEach( (leg) => {

                if (leg.type === "JNY") {
                    let _result = {
                        direction: leg.direction,
                        stops: leg.Stops
                    }

                    result.stops.push(_result);
                }
            })

            return resolve(result);
        })
        .catch( (error) => { alert(error); })
    })
}
