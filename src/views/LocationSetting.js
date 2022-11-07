import React from 'react'

const LocationSetting = () =>  {

    return (
        <div class="container-fluid profile-page zones gr-view location-view">
            <div class="row">
                <div class="col-sm-5 right-separate">
                    <h3>SELECT ZONE</h3>
                    <div class="main shadows mb-3">
                        <h4>GET ZONE LIST</h4>
                    </div>
                    <div class="selected-files">
                        <h3>SELECTED SITE</h3>

                        <table>
                            <tr>
                                <thead>
                                    <tr>
                                        <th>REGION</th>
                                        <th>SITE NAME</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>JPN</td>
                                        <td>KIX</td>
                                    </tr>
                                </tbody>
                            </tr>
                        </table>
                        <button>CLEAR SELECTION</button>
                    </div>
                </div>
                <div class="col-sm-7 border-left">
                    <div class="main shadows">
                        <h3>MACHINE ID</h3>

                        <div class="modelthreed">
                            <div class="main shadows">

                                <table>
                                    <thead>
                                        <tr>
                                            <th>NAME</th>
                                            <th>EDIT BOX</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><i>REGION</i></td>
                                            <td>JP</td>
                                        </tr>
                                        <tr>
                                            <td><i>SITE</i></td>
                                            <td>KIX</td>
                                        </tr>
                                        <tr>
                                            <td><i>AREA</i></td>
                                            <td>IKEDA</td>
                                        </tr>
                                        <tr>
                                            <td><i>ZONE</i></td>
                                            <td>ZONE 1</td>
                                        </tr>
                                        <tr>
                                            <td><i>LATITUDE</i></td>
                                            <td><input type="text" placeholder="*OPTIONAL" /></td>
                                        </tr>
                                        <tr>
                                            <td><i>LONGITUDE</i></td>
                                            <td><input type="text" placeholder="*OPTIONAL" /></td>
                                        </tr>
                                        <tr>
                                            <td><i>TAG</i></td>
                                            <td></td>
                                        </tr>
                                    </tbody>
                                </table>

                                <div class="btns">
                                    <button>CANCEL</button>
                                    <button>PUT</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LocationSetting