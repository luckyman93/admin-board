import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getZonetList, getZoneDetailById, intitialIsSelect } from '../../reducers/zone/reducer'
import Table from './const/Table'
import { Spin } from 'antd'
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.js'
import searchIcon from '../../assets/images/search.png'

const SelectZonePopup = () => {

    const dispatch = useDispatch()
    const {isZoneLoading, isSelect, arrZoneList} = useSelector(state => state.Zone)

    useEffect(() => {
        if (isSelect) {
            let myModalEl = document.getElementById('selectZone')
            bootstrap.Modal.getInstance(myModalEl).hide()
            dispatch(intitialIsSelect())
            return
        }
        dispatch(getZonetList())
    }, [dispatch, isSelect])

    const [zoneId, setZoneId] = useState()

    const getZoneById = () => {
        dispatch(getZoneDetailById(zoneId))
    }

    const columns1 = [
        {
            title: 'ZONE ID',
            dataIndex: 'zone_id',
            key: 'zone_id',
        },
        {
            title: 'ZONE NAME',
            dataIndex: 'zone_name',
            key: 'zone_name',
        },
        {
            title: 'REGION',
            dataIndex: 'region',
            key: 'region',
        },
        {
            title: 'SITES',
            dataIndex: 'sites',
            key: 'sites',
        },
        {
            title: 'AREA',
            dataIndex: 'area',
            key: 'area',
        }
    ]

    let dataSource1 = arrZoneList.map((info, i)=>(
        {
            key: i,
            zone_id: <div><input type="radio" value={info.id} name="zoneID" onChange={(e) => setZoneId(e.target.value)}/><span>{info.id}</span></div>,
            zone_name: info.name,
            region: info.region,
            sites: info.site,
            area: info.area
        }        
    ))

    return (
        <div className="modal fade selectzone-popup" id="selectZone" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">SELECT ZONE</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <Spin spinning={isZoneLoading}>
                            <div className="col-sm-12 search">
                                <input type="text" placeholder="Search zone names..." />
                                <button><img src={searchIcon} /></button>
                            </div>
                            <Table
                                columns={columns1}
                                dataSource={dataSource1}/>
                        </Spin>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">CANCEL</button>
                        <button type="button" className="btn btn-primary" onClick={getZoneById}>OKAY</button>
                    </div>
                </div>
            </div>
    </div>
    )
}

export default SelectZonePopup
