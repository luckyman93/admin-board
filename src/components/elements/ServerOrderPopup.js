import React from 'react'
// import { isEmpty } from "lodash"
// import { useSelector } from 'react-redux'
// import Table from './const/Table'
// import { Spin } from 'antd'

const ServerOrderPopup = () => {

    return (
        <div className="modal fade selectzone-popup serverspopup" id="serverOrderPopup" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title uppercase" id="exampleModalLabel">v2/machine/id</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="main">
                            <p>
                                <label>SERVER CODE</label>
                                <input type="text" placeholder="E001" />
                            </p>
                            <p>
                                <label>SERVER ORDER ACTIVE DATE</label>
                                <input type="datetime-local" placeholder="2012-12-30" />
                            </p>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">CANCEL</button>
                        <button type="button" className="btn btn-primary">POST</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServerOrderPopup
