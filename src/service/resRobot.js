import utf8 from "utf8"
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
        let url = "https://api.resrobot.se/v2/location.name?" + "key=" + RES_ROBOT_API_KEY + "&input=" + utf8.encode(input) + "&format=json"    
        
        fetch(url)
            .then( (response) => response.json())
            .then( (data) => {
                let result = null
                data.StopLocation.forEach( (loc) => {
                    let s = loc.name.split(" ");
                    if (s[0].toLowerCase() == input.toLowerCase() && s[1] == "T-bana") {
                        result = loc
                    }
                })
    
                return resolve(result)
            })
    })
}



export function getIdFromName(input) {
    let url = "https://api.resrobot.se/v2/location.name?" + "key=" + RES_ROBOT_API_KEY + "&input=" + utf8.encode(input) + "&format=json"    
        
    return new Promise( (resolve, reject) => {
        fetch(url)
        .then( (response) => response.json())
        .then( (data) => {
            let result = null
            data.StopLocation.forEach( (loc) => {
                let s = loc.name.split(" ");
                if (s[0].toLowerCase() == input.toLowerCase() && s[1] == "T-bana") {
                    result = loc
                }
            })

            return resolve(result.id)
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

            console.log(data);

            let result = {
                stops: []
            }
            
            data.Trip[0].LegList.Leg.forEach( (leg) => {
                let _result = {
                    direction: leg.direction,
                    stops: leg.Stops
                }

                result.stops.push(_result);
            })

            return resolve(result);
        })
        .catch( (error) => { console.log(error); })
    })

 
}


