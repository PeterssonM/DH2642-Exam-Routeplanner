import React, { useEffect, useState } from 'react'
import { useParams, useNavigate} from 'react-router-dom'
import SummaryCard from '../view/SummaryCardView'
import Header from '../presenter/HeaderPresenter'
import {db, auth} from "../firebase";
import { getIdFromName, getPlan } from '../service/resRobot';
import { getWeather, getWeatherCoordinates } from '../service/openWeather';

export default function SummaryCardPresenter() {

    const params = useParams();
    const navigate = useNavigate();

    const [note, setNote] = useState(null);
    const [oriWeatherInfo, setOriWeatherInfo] = useState(null);
    const [desWeatherInfo, setDesWeatherInfo] = useState(null);
    const [body, setBody] = useState(null);
    const [title, setTitle] = useState(null);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        auth().onAuthStateChanged( (user) => {
            if (!user) { return navigate("/signin"); }

            setLoading(true);
            //Checks if the id and the user id is equal.
            db.collection("cards").where("id", "==", params.id)
                .get()
                .then( (snapshot) => {

                    let station  = null
                    snapshot.forEach( (snap) => {
                        station = snap.data();
                    })

                    setTitle(station["title"]);
                    setBody(station["body"]);

                    if (!station) { return navigate("/home"); }

                    //Checks if the id and the user id is equal
                    if (station["uid"] !== user.uid) { return navigate("/home"); }

                    //Get travel plan
                    let originId = null;
                    let originPosition={
                      lon: null,
                      lat: null
                    }
                    function setOriginPosition(lon, lat){
                      originPosition["lon"]=lon
                      originPosition["lat"]=lat
                    }
                    
                    let destinationId = null;
                    let destinationPosition={
                      lon: null,
                      lat: null
                    }
                    function setDestinationPosition(lon, lat){
                      destinationPosition["lon"]=lon
                      destinationPosition["lat"]=lat
                    }

                    getIdFromName(station["origin"])
                        .then( (orinId) => { originId = orinId.StopLocation[0]["id"];
                                             setOriginPosition(orinId.StopLocation[0]["lon"], orinId.StopLocation[0]["lat"])
                        })
                        .then( () => {
                            getIdFromName(station["destination"])
                                .then( (destId) => { destinationId = destId.StopLocation[0]["id"];
                                                     setDestinationPosition(destId.StopLocation[0]["lon"], destId.StopLocation[0]["lat"])
                                })
                                .then( () => {
                                    getPlan(originId, destinationId)
                                        .then( (result) => {
                                            setNote(result);
                                            setLoading(false);
                                        })
                                })
                                .then( () =>{
                                  getWeatherCoordinates(originPosition["lon"], originPosition["lat"])
                                    .then( (data) => {
                                      setOriWeatherInfo(data)
                                    })
                                  getWeatherCoordinates(destinationPosition["lon"], destinationPosition["lat"])
                                    .then( (data) => {
                                      setDesWeatherInfo(data)
                                    })
                                })
                        })
                })
        })
    }, [navigate, params.id])

    if (loading) {
        return (
            <div>
                <Header />
                <div className= "loadingAnimation">
                    <img src="http://www.csc.kth.se/~cristi/loading.gif" alt='http://www.csc.kth.se/~cristi/loading.gif'/>
                </div>
            </div>
        )
    }

    return (
        <div>
            <Header showSearchBar={false}/>
            <SummaryCard
                key={title}
                data={note}
                oriWeatherData={oriWeatherInfo}
                desWeatherData={desWeatherInfo}
                title={title}
                body={body}
            />
        </div>
    )
}
