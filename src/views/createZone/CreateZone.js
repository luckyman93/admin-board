import React from 'react'
import Table from '../../components/elements/const/Table'
//images start
import detailIcon from '../../assets/images/details.png'
import editIcon from '../../assets/images/edit.png'
import viewIcon from '../../assets/images/view.png'
import searchIcon from '../../assets/images/search.png'
//images end

const UpdateZone = () =>  {

    const dataSource = [
        {
            key: '1',
            machine_id: '#APL-Pro',
            group_id: 'DETAIL' + <i><img src={detailIcon}/></i>,
            register_id: '2012-12-30',
            order_code: 'CHANGE' + <i><img src={editIcon}/></i>,
            synced: '2012-12-30',
            location: 'CHANGE' + <i><img src={editIcon}/></i>,
            health: 'DETAIL' + <i><img src={detailIcon}/></i>,
            SVG: 'VIEW' + <i><img src={viewIcon}/></i>,
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
          title: 'SERVER' + <span>ORDER CODE</span>,
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
            title: 'HEALTH' + <span>CODE</span>,
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

export default UpdateZone