import React, { useState, useEffect } from 'react'
import { isEmpty } from "lodash"
import { useDispatch, useSelector } from 'react-redux'
import { updateMachineById } from '../../reducers/machine/reducer'
import Table from './const/Table'
import { Spin } from 'antd'

const LocatioinDetailPopup = () => {

    const [region, setRegion] = useState('')
    const [latitude, setLatitude] = useState('')
    const [longitude, setLongitude] = useState('')
    const dispatch = useDispatch()
    const {isMachineLoading, objMCLocation} = useSelector(state => state.Machine)
    let dataSource2

    useEffect(() => {
        setRegion(!objMCLocation.region?'':objMCLocation.region)
        setLatitude(!objMCLocation.latitude?'':objMCLocation.latitude)
        setLongitude(!objMCLocation.longitude?'':objMCLocation.longitude)
    }, [])

    if (isEmpty(objMCLocation)) {
        dataSource2 = []
    } else {
        dataSource2 = [
            {
                key : '1',
                id : 'REGION',
                id_value : <input type="text" value={region} onChange={e => setRegion(e.target.value)} placeholder="ENTER REGION HERE..." />
            },
            {
                key : '2',
                id : 'SITE',
                id_value : objMCLocation.site
            },
            {
                key : '3',
                id : 'AREAE',
                id_value : objMCLocation.area
            },
            {
                key : '4',
                id : 'ZONE',
                id_value : objMCLocation.zone
            },
            {
                key : '5',
                id : 'LATITUDE',
                id_value : <input type="text" value={latitude} onChange={e => setLatitude(e.target.value)} placeholder="*OPTIONAL" />
            },
            {
                key : '6',
                id : 'LONGITUDE',
                id_value : <input type="text" value={longitude} onChange={e => setLongitude(e.target.value)} placeholder="*OPTIONAL" />
            },
            {
                key : '7',
                id : 'TAG',
                id_value : objMCLocation.tags.toString()
            } 
        ]
    }    

    const columns2 = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: objMCLocation.id,
            dataIndex: 'id_value',
            key: 'id_value',
        },
    ]

    const putLocation = () => {
        dispatch(updateMachineById(region, latitude, longitude, objMCLocation.id))
    }

    return (
        <div className="modal fade selectzone-popup grDetailPopup locationDetailPopup" id="locationDetailPopup" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title uppercase" id="exampleModalLabel">v2/machine/location/id</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <Spin spinning={isMachineLoading}>
                            <div className="main">
                                <Table
                                    dataSource={dataSource2}
                                    columns={columns2}/>
                            </div>
                        </Spin>                        
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">CANCEL</button>
                        <button type="button" className="btn btn-primary" onClick={putLocation}>PUT</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LocatioinDetailPopup
