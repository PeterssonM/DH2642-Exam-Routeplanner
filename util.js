var fs = require('fs');
const { exit } = require('process');
var filename = "stops.txt";

function getCoord(origin, destination){
    // Read the file and print its contents.
 
    return new Promise( (resolve, reject) => {
        fs.readFile(filename, 'utf8', function(err, data) {
            if (err) throw err;
    
            var lines = data.split("\n")
            let ori, des;
            lines.forEach(line => {
                d = line.split(",");
                
                if (d[1] == origin && d[6] == "\r") {
                    ori = d;
                }
    
                if (d[1] == destination && d[6] == "\r") {
                    des = d;
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
getCoord("Odalgränd", "Fittja").then( (data) => {
    console.log(data);
}).catch( (error) => {
    console.log(error);
})