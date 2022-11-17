import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Table from '../components/elements/const/Table'
import { getZonetList } from '../reducers/zone/reducer'
import { getGroupList } from '../reducers/group/reducer'
import { Spin } from 'antd'

const GroupView = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getZonetList())
        dispatch(getGroupList())
    }, [])

    const {isZoneLoading, arrZoneList} = useSelector(state => state.Zone)
    const {arrGroupList} = useSelector(state => state.Group)

    const getGroupName = (ids) => {
        let arrName = []
        ids.map((id) => {
            arrGroupList.map((info)=>{
               if (info.id === id) {
                arrName.push(info.name)
               } 
            })
        })
        return arrName
    }

    const dataSource1 = arrZoneList.map((info, i) => (
        {
            key: i,
            region: info.region,
            site: info.site,
            area: info.area,
            zone: info.name,
            group_id: info.groupIds.toString(),
            group_name: getGroupName(info.groupIds).toString()
        }        
    ))

    const columns1 = [
        {
          title: 'REGION',
          dataIndex: 'region',
          key: 'region',
        },
        {
          title: 'SITE',
          dataIndex: 'site',
          key: 'site',
        },
        {
          title: 'AREA',
          dataIndex: 'area',
          key: 'area',
        },
        {
            title: 'ZONE',
            dataIndex: 'zone',
            key: 'zone',
        },
        {
            title: 'ASSIGNED GROUP ID(s)',
            dataIndex: 'group_id',
            key: 'group_id',
        },
        {
            title: 'ASSIGNED GROUP NAME(s)',
            dataIndex: 'group_name',
            key: 'group_name',
        },
    ]

    const dataSource2 = [
        {
            key: '1',
            region: 'JPN',
            site: 'KIX',
        },
    ]

    const columns2 = [
        {
            title: 'REGION',
            dataIndex: 'region',
            key: 'region',
          },
          {
            title: 'SITE NAME',
            dataIndex: 'site',
            key: 'site',
          },
    ]

    return (
        <div className="container-fluid profile-page zones gr-view">
            <div className="row">
                <div className="col-sm-5 right-separate">
                    <h3>FILTER BY SITE</h3>
                    {/* <div className="main shadows">
                        <h4>NO SITE SELECTED</h4>
                    </div> */}
                    <div className="selected-files">
                        <h3>SELECTED SITE</h3>
                        <Table
                            columns={columns2}
                            dataSource={dataSource2}/>
                        <button>CLEAR SELECTION</button>
                    </div>
                </div>
                <div className="col-sm-7 border-left">
                    <div className="main shadows">
                        <h3>GROUP VIEW</h3>

                        <div className="modelthreed">
                            <div className="maps">
                                <iframe src="https://www.google.com/maps/d/embed?mid=1bJQydYxVYpemysvNJ8ccPBnP3Io70k8&ehbc=2E312F" width="100%" height="480"></iframe>
                            </div>

                            <div className="scroll-text">
                                <span>SELECT A SITE TO SHOW DETAILS</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-sm-12">
                    <div className="main shadows">
                        <Spin spinning={isZoneLoading}>
                            <Table
                                columns={columns1}
                                dataSource={dataSource1}/>
                        </Spin>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GroupView
