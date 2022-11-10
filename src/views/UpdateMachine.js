import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Spin } from 'antd'
import Table from '../components/elements/const/Table'
import SelectGroupPopup from '../components/elements/SelectGroupPopup'
import ServerOrderPopup from '../components/elements/ServerOrderPopup'
import HealthCodePopup from '../components/elements/HealthCodePopup'
import LocationDetailPopup from '../components/elements/LocationDetailPopup'
import SvgViewer from '../components/elements/SvgViewer'
import { getMachineList } from '../reducers/machine/reducer'
import { getGrpDetailById } from '../reducers/group/reducer'
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.js'

//images start
import detailIcon from '../assets/images/details.png'
import editIcon from '../assets/images/edit.png'
import viewIcon from '../assets/images/view.png'
import searchIcon from '../assets/images/search.png'
//images end

const UpdateMachine = () =>  {

    const dispatch = useDispatch()
    const {isMachineLoading, arrMachineList} = useSelector(state => state.Machine)

    useEffect(() => {
        dispatch(getMachineList())
    }, [dispatch])

    const showModal = (mId) => {
        let myModal = new bootstrap.Modal(document.getElementById(mId))
        myModal.show()
    }

    const getGroupById = (e, i) => {
        showModal("grDetailPopup")
        dispatch(getGrpDetailById(i))
    }

    const dataSource = arrMachineList.map((info, i) => (
        {
            key: i,
            machine_id: info.id,
            group_id: <div className="cursor" onClick={(e) => getGroupById(e, info.id)}>DETAIL <i><img src={detailIcon} alt="detail_icon"/></i></div>,
            register_at: info.registeredAt,
            order_code: <div className="cursor" onClick={(e) => getMachineById(e, info.id)}>CHANGE <i><img src={editIcon} alt="edit_icon"/></i></div>,
            synced: info.updatedAt,
            location: <div className="cursor">CHANGE <i><img src={editIcon} alt="edit_icon"/></i></div>,
            health: <div className="cursor">DETAIL <i><img src={detailIcon} alt="detail_icon"/></i></div>,
            svg: <div className="cursor">VIEW <i><img src={viewIcon} alt="view_icon"/></i></div>,
        }
    ))

    const columns = [
        {
            title: 'MACHINE ID',
            dataIndex: 'machine_id',
            key: 'machine_id',
        },
        {
            title: 'GROUP ID',
            dataIndex: 'group_id',
            key: 'group_id',
        },
        {
            title: 'REGISTER AT ',
            dataIndex: 'register_at',
            key: 'register_at',
        },
        {
            title: <div>SERVER<span>ORDER CODE</span></div>,
            dataIndex: 'order_code',
            key: 'order_code',
        },
        {
            title: 'LAST SYNCED',
            dataIndex: 'synced',
            key: 'synced',
        },
        {
            title: 'LOCATION',
            dataIndex: 'location',
            key: 'location',
        },
        {
            title: <div>HEALTH <span>CODE</span></div>,
            dataIndex: 'health',
            key: 'health',
        },
        {
            title: 'SVG',
            dataIndex: 'svg',
            key: 'svg',
        },
    ]

    return (
        <div className="container-fluid profile-page zones machine-list">
            <SelectGroupPopup/>
            <ServerOrderPopup/>
            <HealthCodePopup/>
            <LocationDetailPopup/>
            <SvgViewer/>
            <div className="row">
                <div className="col-sm-4 search">
                    <input type="text" placeholder="Search site names..." />
                    <button><img src={searchIcon} alt="search_icon"/></button>
                </div>
                <div className="col-sm-4 search">
                    <input type="text" placeholder="Search machine names..." />
                    <button><img src={searchIcon} alt="search_icon"/></button>
                </div>
                <div className="col-sm-4 btnss">
                    <button>GET MACHINE LIST</button>
                </div>
            </div>
            <div className="data-list">
                <Spin spinning={isMachineLoading}>
                    <Table
                        columns={columns}
                        dataSource={dataSource}/>
                </Spin>                
            </div>
        </div>
    )
}

export default UpdateMachine