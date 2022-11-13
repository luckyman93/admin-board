import React from 'react'
import { useSelector } from 'react-redux'
import Table from './const/Table'
import { Spin } from 'antd'
import searchIcon from '../../assets/images/search.png'

const SelectZonePopup = () => {

    
    const {isZoneLoading, arrZoneList} = useSelector(state => state.Zone)

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

    let dataSource1 = []

    return (
        <div className="modal fade selectzone-popup" id="selectZone" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">SELECT ZONE</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <Spin spinning={true}>
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
                        <button type="button" className="btn btn-primary">OKAY</button>
                    </div>
                </div>
            </div>
    </div>
    )
}

export default SelectZonePopup
