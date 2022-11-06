import React from 'react'
import Table from '../../components/elements/const/Table'
//images start
import detailIcon from '../../assets/images/details.png'
import editIcon from '../../assets/images/edit.png'
import viewIcon from '../../assets/images/view.png'
import searchIcon from '../../assets/images/search.png'
//images end

const UpdateMachine = () =>  {

    const dataSource = [
        {
            key: '1',
            machine_id: 'ABCD1234',
            group_id: <div>DETAIL <i><img src={detailIcon}/></i></div>,
            register_at: '2012-12-30',
            order_code: <div>CHANGE <i><img src={editIcon}/></i></div>,
            synced: '2012-12-30',
            location: <div>CHANGE <i><img src={editIcon}/></i></div>,
            health: <div>DETAIL <i><img src={detailIcon}/></i></div>,
            svg: <div>VIEW <i><img src={viewIcon}/></i></div>,
        }
      ];
      
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
    ];

    return (
        <div className="container-fluid profile-page zones machine-list">
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
                <Table
                    columns={columns}
                    dataSource={dataSource}/>
            </div>
        </div>
    )
}

export default UpdateMachine