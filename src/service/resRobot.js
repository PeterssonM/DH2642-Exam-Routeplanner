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
