const BASE_URL_STOP_LOOKUP="https://api.resrobot.se/v2/location.name?";
const API_KEY="8914fa48-04a5-4511-94c8-61d49831bd6a";

function StopFinder(){
  return new Promise((resolve, reject)=>{
    let params = {
      key: "8914fa48-04a5-4511-94c8-61d49831bd6a",
      input: "Kista",
      id: "740012883",
      format: "json"
    }
    const respons = await fetch(BASE_URL_STOP_LOOKUP+new URLSearchParams(params), {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    return resolve(respons.json);
  })
}
