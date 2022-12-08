import React from 'react'
import { isEmpty } from "lodash"

const SuccessPopup = (props) => {

    let obj = {}

    if (isEmpty(props.objSuccessData)) {
        obj = {
            'status': '',
            'main': '',
            'sub':'',
            'createdAt': ''
        }
    } else {
        obj = {
            'status': 'Success:200',
            'main': props.objSuccessData.triggerMain,
            'sub': props.objSuccessData.triggerSub,
            'createdAt': props.objSuccessData.createdAt
        }
    }

    return (
        <div className="modal fade selectzone-popup healthCdePopup" id="successPopup" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title uppercase" id="exampleModalLabel">SUCCESS</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="main">
                            <p>STATUS</p>
                            <span>{obj.status }</span>
                            <p>TRIGGER MAIN</p>
                            <span>{obj.main}</span>

                            <p>TRIGGER SUB</p>
                            <span>{obj.sub}</span>

                            <p>UPDATED AT</p>
                            <span>{obj.createdAt}</span>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-primary"  data-bs-dismiss="modal">OKAY</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SuccessPopup
