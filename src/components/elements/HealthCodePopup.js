import React from 'react'
// import { isEmpty } from "lodash"
// import { useSelector } from 'react-redux'
// import Table from './const/Table'
// import { Spin } from 'antd'

const HealthCodePopup = () => {

    return (
        <div className="modal fade selectzone-popup healthCdePopup" id="successPopup" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title uppercase" id="exampleModalLabel">SUCCESS</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="main">
                            <p>STATUS</p>
                            <span>Success:200</span>
                            <p>TRIGGER MAIN</p>
                            <span>#VA_AdminBoard</span>

                            <p>TRIGGER SUB</p>
                            <span>admin@samole.com</span>

                            <p>UPDATED AT</p>
                            <span>2021-12-30  02:23:59</span>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-primary">OKAY</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HealthCodePopup
