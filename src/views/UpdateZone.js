import React from 'react'
import Table from '../components/elements/const/Table'
//images start
import editIcon from '../assets/images/edit.png'
import searchIcon from '../assets/images/search.png'
import fbxIcon from '../assets/images/fbx-viewer.png'
//images end

const UpdateZone = () =>  {

    const dataSource = [
        {
            key: '1',
            zone_id: '#APL-Pro',
            zone_name: 'DETAIL',
            fbx: 'fbx',
            region: '2012-12-30',
            site: 'CHANGE',
            area: '2012-12-30',
            group: 'CHANGE',
            a_la: <div>EDIT <i><img src={editIcon}/></i></div>,
            a_lo: <div>EDIT <i><img src={editIcon}/></i></div>,
            b_la: <div>EDIT <i><img src={editIcon}/></i></div>,
            b_lo: <div>EDIT <i><img src={editIcon}/></i></div>,
            c_la: <div>EDIT <i><img src={editIcon}/></i></div>,
            c_lo: <div>EDIT <i><img src={editIcon}/></i></div>,
            d_la: <div>EDIT <i><img src={editIcon}/></i></div>,
            d_lo: <div>EDIT <i><img src={editIcon}/></i></div>
        }
      ];
      
    const columns = [
        {
          title: <div>ID <span>ZONE ID</span></div>,
          dataIndex: 'zone_id',
          key: 'zone_id',
        },
        {
            title: <div>ZONE <span>NAME</span></div>,
            dataIndex: 'zone_name',
            key: 'zone_name',
        },
        {
            title: 'FBX',
            dataIndex: 'fbx',
            key: 'fbx',
        },
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
            title: 'GROUP',
            dataIndex: 'group',
            key: 'group',
        },
        {
            title: <div>CORNER <span>-A-GPS-LA</span></div>,
            dataIndex: 'a_la',
            key: 'a_la',
        },
        {
            title: <div>CORNER <span>-A-GPS-LO</span></div>,
            dataIndex: 'a_lo',
            key: 'a_lo',
        },
        {
            title: <div>CORNER <span>-B-GPS-LA</span></div>,
            dataIndex: 'b_la',
            key: 'b_la',
        },
        {
            title: <div>CORNER <span>-B-GPS-LO</span></div>,
            dataIndex: 'b_lo',
            key: 'b_lo',
        },
        {
            title: <div>CORNER <span>-C-GPS-LA</span></div>,
            dataIndex: 'c_la',
            key: 'c_la',
        },
        {
            title: <div>CORNER <span>-C-GPS-LO</span></div>,
            dataIndex: 'c_lo',
            key: 'c_lo',
        },
        {
            title: <div>CORNER <span>-D-GPS-LA</span></div>,
            dataIndex: 'd_la',
            key: 'd_la',
        },
        {
            title: <div>CORNER <span>-D-GPS-LO</span></div>,
            dataIndex: 'd_lo',
            key: 'd_lo',
        },
    ];

    return (
        <div className="container-fluid profile-page zones machine-list update-zone">
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
                    <button>GET ZONE LIST</button>
                </div>
            </div>

            <div className="data-list">
                <Table
                    dataSource={dataSource}
                    columns={columns}/>
            </div>

            <div className="mains">
                <div className="row">
                    <div className="col-sm-5 border-left">
                        <div className="main shadows">
                            <h3>FBX VIEWER</h3>

                            <div className="modelthreed">
                                <div className="full-width">
                                    <span>3D_MODEL.FBX</span>
                                    <span className="clear">CLEAR VIEWER</span>
                                </div>

                                <img src={fbxIcon}/>

                                <div className="scroll-text">
                                    <span>SCROLL TO ZOOM. CLICK AND DRAG TO ROTATE.</span>
                                    <span className="btns">CENTER</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-7 border-left">
                        <div className="main shadows">
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
                                    <div className="resize-drag" data-x="" data-y="" data-c="" data-d="">
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
        </div>
    )
}

export default UpdateZone