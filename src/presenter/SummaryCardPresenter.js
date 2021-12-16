import React, { useEffect, useState } from 'react'
import { useParams, useNavigate} from 'react-router-dom'
import SummaryCard from '../view/SummaryCardView'
import Header from '../presenter/HeaderPresenter'
import {db, auth} from "../firebase";
import { getIdFromName, getPlan } from '../service/resRobot';

export default function SummaryCardPresenter() {

    const params = useParams();
    const navigate = useNavigate();

    const [note, setNote] = useState(null);
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
                    let destinationId = null;

                    getIdFromName(station["origin"])
                        .then( (id) => { originId = id; })
                        .then( () => {
                            getIdFromName(station["destination"])
                                .then( (destId) => {destinationId = destId; })
                                .then( () => {
                                    getPlan(originId, destinationId)
                                        .then( (result) => {
                                            console.log(result);
                                            setNote(result);
                                            setLoading(false);
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
                data={note} 
                title={title} 
                body={body}
            />
        </div>
    )
}


