import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { createNewZone } from '../reducers/zone/reducer'
import Table from '../components/elements/const/Table'
import SelectGroupListPopup from '../components/elements/SelectGroupListPopup'
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.js'
import { Spin } from 'antd'
import '../assets/js/custom'
//images start
import uploadIcon from '../assets/images/upload.png'
//images end

//fbx load part start
import { Canvas } from "@react-three/fiber"
import { useLoader } from "@react-three/fiber"
import { Environment, OrbitControls } from "@react-three/drei"
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader"
import { Suspense } from "react"
//fbx end

const Scene = (props) => {
    const fbx = useLoader(FBXLoader, "fbxUpload/"+props.fbxName)
  
    return <primitive object={fbx} position={[1.5, 1.5, -2]}  scale={0.5} />;
  };

const CreateZone = () => {

    const dispatch = useDispatch()
    const {isZoneLoading} = useSelector(state => state.Zone)
    const {arrSelectedGroupId} = useSelector(state => state.Group)
    const [zoneId, setZoneId] = useState('') 
    const [region, setRegion] = useState('') 
    const [zoneName, setZoneName] = useState('') 
    const [fbxName, setFbxName] = useState('') 
    const [site, setSite] = useState('') 
    const [area, setArea] = useState('')
    const [locationTags, setLocationTags] = useState('')

    const uploadFbx = (e) => {
        let modelName = e.target.files[0].name
        setFbxName(modelName)
    }

    const popUpSelectZone = () => {
        let myModal = new bootstrap.Modal(document.getElementById("selectGroupPopup"))
        myModal.show()
    }

    const createZone = () => {
        let data = {
            "id": zoneId,
            "name": zoneName,
            "fbxName": fbxName,
            "region": region,
            "site": site,
            "area": area,
            "groupIds": arrSelectedGroupId,
            "locationTags": locationTags.split(","),
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
        dispatch((createNewZone(data)))
    }

    const dataSource = [
        {
            key: '1',
            zone_title: 'ZONE ID',
            content: <input type="text" value={zoneId} placeholder="ENTER ZONE ID  ..." onChange={(e)=>setZoneId(e.target.value)} />,
        },
        {
            key: '2',
            zone_title: 'REGION',
            content: <input type="text" value={region} placeholder="ENTER REGION..." onChange={(e)=>setRegion(e.target.value)}/>,
        },
        {
            key: '3',
            zone_title: 'ZONE NAME',
            content: <input type="text" value={zoneName} placeholder="ENTER ZONE NAME..." onChange={(e)=>setZoneName(e.target.value)} />,
        },
        {
            key: '4',
            zone_title: 'FBX',
            content: <i><input type="file" id="select-files" onChange = {(e) => uploadFbx(e)}/> <span className="value"></span><span className="upload-text">UPLOAD FILE</span><span><img src={uploadIcon} /></span></i>,
        },
        {
            key: '5',
            zone_title: 'SITE',
            content: <input type="text" value={site} placeholder="ENTER SITE..." onChange={(e)=>setSite(e.target.value)} />,
        },
        {
            key: '6',
            zone_title: 'AREA',
            content: <input type="text" value={area} placeholder="ENTER AREA..." onChange={(e)=>setArea(e.target.value)} />,
        },
        {
            key: '7',
            zone_title: 'LOCATION TAGS',
            content: <input type="text" value={locationTags} placeholder="ENTER LOCATION TAGS..." onChange={(e)=>setLocationTags(e.target.value)} />,
        },
        {
            key: '8',
            zone_title: 'GROUP',
            content: <span className="sekedt cursor" onClick={popUpSelectZone}>SELECT FROM LIST =</span>,
        },
        {
            key: '9',
            zone_title: 'CORNER-A-GPS-LA',
            content: <input type="text" placeholder="OPTIONAL..." />,
        },
        {
            key: '10',
            zone_title: 'CORNER-A-GPS-LO',
            content: <input type="text" placeholder="OPTIONAL..." />,
        },
        {
            key: '11',
            zone_title: 'CORNER-B-GPS-LA',
            content: <input type="text" placeholder="OPTIONAL..." />,
        },
        {
            key: '12',
            zone_title: 'CORNER-B-GPS-LO',
            content: <input type="text" placeholder="OPTIONAL..." />,
        },

      ]
      
    const columns = [
        {
          title: 'ZONE TITLE',
          dataIndex: 'zone_title',
          key: 'zone_title',
        },
        {
          title: 'CONTENT',
          dataIndex: 'content',
          key: 'content',
        },
    ]


    return (
        <div className="container-fluid profile-page zones">
            <Spin spinning={isZoneLoading}>
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
                                <div className="fbx-model-container">
                                    {
                                        fbxName.length !== 0 &&
                                        <Canvas>
                                            <ambientLight intensity={0.2} />
                                            <Suspense fallback={null}>
                                                <Scene 
                                                    fbxName = {fbxName}/>
                                                <OrbitControls />
                                                <Environment preset="forest"  />
                                            </Suspense>
                                        </Canvas>
                                    }
                                </div>
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
                                <button type="submit" className="next" onClick={createZone}>POST</button>
                            </div>
                            <SelectGroupListPopup/>
                        </div>
                    </div>
                </div>
            </Spin>
        </div>
    )
}

export default CreateZone
