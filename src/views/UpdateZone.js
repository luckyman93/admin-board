import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { isEmpty } from "lodash"
import Table from '../components/elements/const/Table'
import {Spin} from 'antd'
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.js'
import SelectZonePopup from '../components/elements/SelectZonePopup'
import SelectGroupListPopup from '../components/elements/SelectGroupListPopup'
import { updateZoneDetailById } from '../reducers/zone/reducer'
//images start
import searchIcon from '../assets/images/search.png'
import uploadIcon from '../assets/images/upload.png'
//images end
//fbx load part start
import { Canvas } from "@react-three/fiber"
import { useLoader } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader"
import { Suspense } from "react"
//fbx end

const Scene = (props) => {
    const fbx = useLoader(FBXLoader, "fbxUpload/"+props.fbxName)
  
    return <primitive object={fbx} position={[1.5, 1.5, -2]}  scale={0.5} />;
}

const UpdateZone = () =>  {

    const dispatch = useDispatch()
    const [fbxName, setFbxName] = useState('') 
    const {isZoneLoading, objZoneDetail} = useSelector(state => state.Zone)
    const {arrSelectedGroupId} = useSelector(state => state.Group)

    useEffect(() => {
        if (!isEmpty(objZoneDetail)) setFbxName(objZoneDetail.fbxName)
    }, [objZoneDetail])

    const showSelectZoneModal = () => {
        let myModal = new bootstrap.Modal(document.getElementById("selectZone"))
        myModal.show()
    }

    const uploadFbx = (e) => {
        let modelName = e.target.files[0].name
        setFbxName(modelName)
    }

    const popUpSelectZone = () => {
        let myModal = new bootstrap.Modal(document.getElementById("selectGroupPopup"))
        myModal.show()
    }

    const updateZoneById = () => {
        let data = {
            "name": objZoneDetail.name,
            "fbxName": fbxName,
            "region": objZoneDetail.region,
            "site": objZoneDetail.site,
            "area": objZoneDetail.area,
            "groupIds": arrSelectedGroupId,
            "locationTags": objZoneDetail.locationTags,
            "corners": {
              "gpsA": {
                "latitude": 41.40388,
                "longitude": 2.17403
              },
              "gpsB": {
                "latitude": 41.50543,
                "longitude": 2.17403
              },
              "gpsC": {
                "latitude": 41.40338,
                "longitude": 2.17111
              },
              "gpsD": {
                "latitude": 41.50543,
                "longitude": 2017403
              }
            }
        }
        dispatch((updateZoneDetailById(objZoneDetail.id, data)))
    }

    let dataSource
    if (isEmpty(objZoneDetail)) {
        dataSource = []
    } else {
        dataSource = [
            {
                key: '1',
                zone_id: objZoneDetail.id,
                zone_name: objZoneDetail.name,
                fbx: <i className="replace"><input type="file" id="select-files" onChange = {(e) => uploadFbx(e)}/><img src={uploadIcon} />CLICK TO <br/>REPLACE</i>,
                region: objZoneDetail.region,
                site: objZoneDetail.site,
                area: objZoneDetail.area,
                group: <span className="cursor" onClick={popUpSelectZone}>= <br/>SELECT</span>,
                a_la: objZoneDetail.corners.gpsA.latitude,
                a_lo: objZoneDetail.corners.gpsA.longitude,
                b_la: objZoneDetail.corners.gpsB.latitude,
                b_lo: objZoneDetail.corners.gpsB.longitude,
                c_la: objZoneDetail.corners.gpsC.latitude,
                c_lo: objZoneDetail.corners.gpsC.longitude,
                d_la: objZoneDetail.corners.gpsD.latitude,
                d_lo:  objZoneDetail.corners.gpsD.longitude
            }
        ]
    }
      
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
            <SelectGroupListPopup/>
            <SelectZonePopup/>
            <Spin spinning = {isZoneLoading}>
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
                        <button onClick={showSelectZoneModal}>GET ZONE LIST</button>
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
                                    <div className="fbx-model-container">
                                        {
                                            fbxName.length !== 0 &&
                                            <Canvas>
                                                <ambientLight intensity={0.2} />
                                                <Suspense fallback={null}>
                                                    <Scene 
                                                        fbxName = {fbxName}/>
                                                    <OrbitControls />
                                                </Suspense>
                                            </Canvas>
                                        }
                                    </div>
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
                                    <button type="button" className="next" onClick={updateZoneById} >POST</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Spin>
            
        </div>
    )
}

export default UpdateZone