/*
  --- This file will be discontinued due to uncompatible data in "stops.txt" ---
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

                /*
                  "" imply that the station is a parent station. Anything else than "" is the id to the parent station.
                  E.g. Kista Centrum has many substations (children), we want to return the parent.
                */
                //console.log(stationDataArr);
                if (stationDataArr[1] == origin && stationDataArr[5] == "") {
                    ori = stationDataArr;
                    console.log(ori);
                }
                if (stationDataArr[1] == destination && stationDataArr[5] == "") {
                    des = stationDataArr;
                    console.log(des);
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
