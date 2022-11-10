import React from 'react'
// import { isEmpty } from "lodash"
// import { useSelector } from 'react-redux'
// import Table from './const/Table'
// import { Spin } from 'antd'

const SvgViewer = () => {

    return (
        <div className="modal fade selectzone-popup  svgViewerPopup" id="svgViewerPopup" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">SVG VIEWER</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="main">
                            <img src="../img/svg-view.png" />
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">CLOSE</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SvgViewer
