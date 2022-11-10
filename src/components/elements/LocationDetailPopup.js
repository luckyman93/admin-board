import React from 'react'
// import { isEmpty } from "lodash"
// import { useSelector } from 'react-redux'
// import Table from './const/Table'
// import { Spin } from 'antd'

const LocatioinDetailPopup = () => {

    return (
        <div className="modal fade selectzone-popup grDetailPopup locationDetailPopup" id="locationDetailPopup" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title uppercase" id="exampleModalLabel">v2/machine/location/id</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="main">
                            <table>
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>1</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>REGION</td>
                                        <td><input type="text" placeholder="ENTER REGION HERE..." /></td>
                                    </tr>
                                    <tr>
                                        <td>REGION</td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>SITE</td>
                                        <td></td>
                                    </tr>

                                    <tr>
                                        <td>AREA</td>
                                        <td></td>
                                    </tr>

                                    <tr>
                                        <td>ZONE</td>
                                        <td><span>*SELECT FROM ZONE LIST</span> <i>GET ZONE LIST =</i></td>
                                    </tr>
                                    <tr>
                                        <td>LATITUDE</td>
                                        <td><input type="text" placeholder="*OPTIONAL" /></td>
                                    </tr>
                                    <tr>
                                        <td>LONGITUDE</td>
                                        <td><input type="text" placeholder="*OPTIONAL" /></td>
                                    </tr>
                                    <tr>
                                        <td>TAG</td>
                                        <td></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">CANCEL</button>
                        <button type="button" className="btn btn-primary">PUT</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LocatioinDetailPopup
