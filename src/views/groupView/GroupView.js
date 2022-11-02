import React from 'react'
import Table from '../../components/elements/const/Table'

const GroupView = (props) => {

    const dataSource = [
        {
            key: '1',
            region: 'Mike',
            site: 'HND',
            area: 'T1',
            zone: '2F-A1-N3Z',
            group_id: '1,3,5',
            group_name: 'TEAM A, TEAM C, TEAM E'
        },
        {
            key: '2',
            region: 'Mike',
            site: 'HND',
            area: 'T1',
            zone: '2F-A1-N3Z',
            group_id: '1,3,5',
            group_name: 'TEAM A, TEAM C, TEAM E'
          },
      ];
      
    const columns = [
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
    ];

    return (
        <div className="container-fluid profile-page zones gr-view">
            <div className="row">
                <div className="col-sm-5 right-separate">
                    <h3>FILTER BY SITE</h3>
                    <div className="main shadows">
                        <h4>NO SITE SELECTED</h4>
                    </div>
                </div>
                <div className="col-sm-7 border-left">
                    <div className="main shadows">
                        <h3>GROUP VIEW</h3>

                        <div className="modelthreed">
                            <div className="maps">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27656441.247150186!2d118.98864520740922!3d32.2034108067305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34674e0fd77f192f%3A0xf54275d47c665244!2sJapan!5e0!3m2!1sen!2sin!4v1666881804097!5m2!1sen!2sin"
                                    width="100%" height="400" ></iframe>
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
                        <Table
                            columns={columns}
                            dataSource={dataSource}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GroupView
