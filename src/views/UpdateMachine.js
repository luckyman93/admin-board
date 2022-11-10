import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Spin } from 'antd'
import { getMachineList } from '../reducers/updateMachine/reducer'
import Table from '../components/elements/const/Table'
import SelectGroupPopup from '../components/elements/SelectGroupPopup'
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.js'

//images start
import detailIcon from '../assets/images/details.png'
import editIcon from '../assets/images/edit.png'
import viewIcon from '../assets/images/view.png'
import searchIcon from '../assets/images/search.png'
//images end

const UpdateMachine = () =>  {

    const dispatch = useDispatch()
    const {isLoading, arrMachineList} = useSelector(state => state.UpdateMachine)

    useEffect(() => {
        dispatch(getMachineList())
    }, [])

    const getGroupById = () => {
        let myModalEl = document.getElementById('grDetailPopup')
        bootstrap.Modal.getInstance(myModalEl).show()
    }

    const dataSource = arrMachineList.map((info, i) => (
        {
            key: i,
            machine_id: info.id,
            group_id: <div className='cursor' onClick={getGroupById}>DETAIL <i><img src={detailIcon}/></i></div>,
            register_at: info.registeredAt,
            order_code: <div className='cursor'>CHANGE <i><img src={editIcon}/></i></div>,
            synced: info.updatedAt,
            location: <div className='cursor'>CHANGE <i><img src={editIcon}/></i></div>,
            health: <div className='cursor'>DETAIL <i><img src={detailIcon}/></i></div>,
            svg: <div className='cursor'>VIEW <i><img src={viewIcon}/></i></div>,
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
            <div className="row">
                <div className="col-sm-4 search">
                    <input type="text" placeholder="Search site names..." />
                    <button><img src={searchIcon} /></button>
                </div>
                <div className="col-sm-4 search">
                    <input type="text" placeholder="Search machine names..." />
                    <button><img src={searchIcon} /></button>
                </div>
                <div className="col-sm-4 btnss">
                    <button>GET MACHINE LIST</button>
                </div>
            </div>
            <div className="data-list">
                <Spin spinning={isLoading}>
                    <Table
                        columns={columns}
                        dataSource={dataSource}/>
                </Spin>                
            </div>
        </div>
    )
}

export default UpdateMachine