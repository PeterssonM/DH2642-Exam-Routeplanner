import React from 'react'
import EditPage from '../view/EditPageView'
import SlPlanner from '../view/SlPlannerView'

export default function EditPagePresenter() {
    return (
        <div className= "editPage">
            <SlPlanner/>
            <EditPage/>
        </div>
    )
}

