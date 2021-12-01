/*
  Given an origin and a destination, this function returnes the coordinates for each of the stations.
*/
var fs = require('fs');
const { exit } = require('process');
var filename = "stops.txt";

function getCoord(origin, destination){

    return new Promise( (resolve, reject) => {
        fs.readFile(filename, 'utf8', function(err, data) {
            if (err) throw err;

            var lines = data.split("\n")
            let ori, des;
            lines.forEach(line => {
                let stationDataArr = line.split(",");

                if (stationDataArr[1] == origin && stationDataArr[6] == "\r") {
                    ori = stationDataArr;
                }

                if (stationDataArr[1] == destination && stationDataArr[6] == "\r") {
                    des = stationDataArr;
                }
            })

            if (!ori || !des) { reject("error"); }
            else {
                resolve({
                    "origin": {
                        "lat": ori[2],
                        "long": ori[3]
                    },
                    "destination": {
                        "lat": des[2],
                        "long": des[3]
                    }
                })
            }
        });
    })
}

//Quick test
getCoord("Odalgränd", "Fittja").then( (data) => {
    console.log(data);
}).catch( (error) => {
    console.log(error);
})
