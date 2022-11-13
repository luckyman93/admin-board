import React from 'react'
import { useDispatch } from 'react-redux'
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.js'
import Table from '../components/elements/const/Table'
import { getZonetList } from '../reducers/zone/reducer'
import SelectZonePopup from '../components/elements/SelectZonePopup'

const LocationSetting = () =>  {

    const dispatch = useDispatch()
    
    const columns1 = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'EDIT BOX',
            dataIndex: 'edit_box',
            key: 'edit_box',
        },
    ]

    const dataSource1 = [
        {
            key: "1",
            name: "REGION",
            edit_box: "JP"
        },
        {
            key: "2",
            name: "SITE",
            edit_box: "KIX"
        },
        {
            key: "3",
            name: "AREA",
            edit_box: "IKEDA"
        },
        {
            key: "4",
            name: "ZONE",
            edit_box: "ZONE 1"
        },
        {
            key: "5",
            name: "LATITUDE",
            edit_box: <input type="text" placeholder="*OPTIONAL" />
        },
        {
            key: "6",
            name: "LONGITUDE",
            edit_box: <input type="text" placeholder="*OPTIONAL" />
        },
        {
            key: "7",
            name: "TAG",
            edit_box: ""
        }
    ]

    const getZone = () => {
        let myModal = new bootstrap.Modal(document.getElementById("selectZone"))
        myModal.show()
        dispatch(getZonetList())
    }

    return (
        <div className="container-fluid profile-page zones gr-view location-view">
            <SelectZonePopup />
            <div className="row">
                <div className="col-sm-5 right-separate">
                    <h3>SELECT ZONE</h3>
                    <div className="main shadows mb-3">
                        <h4 className="cursor" onClick={getZone}>GET ZONE LIST</h4>
                    </div>
                    <div className="selected-files">
                        <h3>SELECTED SITE</h3>
                        <button>CLEAR SELECTION</button>
                    </div>
                </div>
                <div className="col-sm-7 border-left">
                    <div className="main shadows">
                        <h3>MACHINE ID</h3>
                        <div className="modelthreed">
                            <div className="main shadows">
                                <Table
                                    dataSource={dataSource1}
                                    columns={columns1}/>
                                <div className="btns">
                                    <button>CANCEL</button>
                                    <button>PUT</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LocationSetting