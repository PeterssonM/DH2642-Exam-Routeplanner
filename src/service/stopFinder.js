const BASE_URL_STOP_LOOKUP="https://api.resrobot.se/v2/location.name?";
const API_KEY="8914fa48-04a5-4511-94c8-61d49831bd6a";

/*
  params format:
  key: "8914fa48-04a5-4511-94c8-61d49831bd6a",
  input: "Kista",
  id: "740012883",
  format: "json"
*/
export default function StopFinder(params){
  return new Promise((resolve, reject)=>{



    fetch("http://localhost:3000/stop", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({url: BASE_URL_STOP_LOOKUP + new URLSearchParams(params)})
    }).then( (data) => { resolve(data.json())})
  })
}

