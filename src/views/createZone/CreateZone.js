import React from 'react'
import Table from '../../components/elements/const/Table'
import '../../assets/js/custom'

//images start
import uploadIcon from '../../assets/images/upload.png'
import modelIcon from '../../assets/images/model.png'
//images end

const CreateZone = (props) => {

    const dataSource = [
        {
            key: '1',
            zone_id: 'REGION',
            create_by: <input type="text" placeholder="ENTER REGION..." />,
        },
        {
            key: '2',
            zone_id: 'ZONE NAME',
            create_by: <input type="text" placeholder="ENTER ZONE NAME..." />,
        },
        {
            key: '3',
            zone_id: 'FBX',
            create_by: <i><input type="file" id="select-files" /> <span className="value"></span><span className="upload-text">UPLOAD FILE</span><span><img src={uploadIcon} /></span></i>,
        },
        {
            key: '4',
            zone_id: 'REGION',
            create_by: <input type="text" placeholder="ENTER REGION..." />,
        },
        {
            key: '5',
            zone_id: 'REGION',
            create_by: <input type="text" placeholder="ENTER REGION..." />,
        },
        {
            key: '6',
            zone_id: 'SITE',
            create_by: <input type="text" placeholder="ENTER SITE..." />,
        },
        {
            key: '7',
            zone_id: 'AREA',
            create_by: <input type="text" placeholder="ENTER AREA..." />,
        },
        {
            key: '8',
            zone_id: 'GROUP',
            create_by: <span className="sekedt">SELECT FROM LIST =</span>,
        },
        {
            key: '9',
            zone_id: 'CORNER-A-GPS-LA',
            create_by: <input type="text" placeholder="OPTIONAL..." />,
        },
        {
            key: '10',
            zone_id: 'CORNER-A-GPS-LO',
            create_by: <input type="text" placeholder="OPTIONAL..." />,
        },
        {
            key: '11',
            zone_id: 'CORNER-B-GPS-LA',
            create_by: <input type="text" placeholder="OPTIONAL..." />,
        },
        {
            key: '12',
            zone_id: 'CORNER-B-GPS-LO',
            create_by: <input type="text" placeholder="OPTIONAL..." />,
        },

      ];
      
    const columns = [
        {
          title: 'ZONE ID',
          dataIndex: 'zone_id',
          key: 'zone_id',
        },
        {
          title: '1 (CREATED BY #VA)',
          dataIndex: 'create_by',
          key: 'create_by',
        },
    ];

    return (
        <div className="container-fluid profile-page zones">
            <div className="row">
                <div className="col-sm-5 right-separate">
                    <h3>ZONE DETAILS</h3>
                    <div className="main shadows">
                        <Table
                            columns={columns}
                            dataSource={dataSource}/>
                    </div>
                </div>
                <div className="col-sm-7 border-left">
                    <div className="main shadows">
                        <h3>FBX VIEWER</h3>

                        <div className="modelthreed">
                            <div className="full-width">
                                <span>3D_MODEL.FBX</span>
                                <span className="clear">CLEAR VIEWER</span>
                            </div>

                            <img src={modelIcon} />

                            <div className="scroll-text">
                                <span>SCROLL TO ZOOM. CLICK AND DRAG TO ROTATE.</span>
                                <span className="btns">CENTER</span>
                            </div>
                        </div>
                        <h3>CORNER VIEWER (a,b,c,d)</h3>

                        <div className="corner">
                            <div className="text">
                                <ul>
                                    <li>
                                        <span>CORNER-A-GPS-LA</span>
                                        <h4 className="first">41.40338</h4>
                                    </li>
                                    <li>
                                        <span>CORNER-A-GPS-LA</span>
                                        <h4 className="first">41.40338</h4>
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        <span>CORNER-A-GPS-LA</span>
                                        <h4 className="second">41.40338</h4>
                                    </li>
                                    <li>
                                        <span>CORNER-A-GPS-LA</span>
                                        <h4 className="second">41.40338</h4>
                                    </li>
                                </ul>
                            </div>


                            <div className="mydarg-section" id="demoRoot">
                                <div className="resize-drag" data-x={0} data-y={0} data-c={0} data-d={0}>
                                    <span>A</span>
                                    <span>B</span>
                                    <span>C</span>
                                    <span>D</span>
                                </div>
                            </div>

                            <div className="text two">
                                <ul>
                                    <li>
                                        <span>CORNER-A-GPS-LA</span>
                                        <h4 className="three">41.40338</h4>
                                    </li>
                                    <li>
                                        <span>CORNER-A-GPS-LA</span>
                                        <h4 className="three">41.40338</h4>
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        <span>CORNER-A-GPS-LA</span>
                                        <h4 className="four">41.40338</h4>
                                    </li>
                                    <li>
                                        <span>CORNER-A-GPS-LA</span>
                                        <h4 className="four">41.40338</h4>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="full-width btns mt-4 text-right">
                            <button type="submit" className="next">POST</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateZone
