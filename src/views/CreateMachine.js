import React from 'react'
import { useNavigate } from 'react-router-dom'
import { apiClient } from '../api/apiClient'

const CreateMachine = () =>  {

    apiClient.getGroupList()
    let navigate = useNavigate();

    const createGroup = (e) => {
        e.preventDefault();
        navigate('/createmachine/profilecreation')
    }

    return (
        <div className="container-fluid create-machine">
            <div className="row">
                <div className="col-sm-12 main">
                    <form>
                        <h2>CREATE NEW MACHINE</h2>
                        <p>Do you want to create a new machine?</p>

                        <label>SELECT GROUP</label>
                        <select>
                            <option>GROUP ID - GROUP NAME</option>
                            <option>GROUP ID - GROUP NAME</option>
                            <option>GROUP ID - GROUP NAME</option>
                        </select>
                        <button type="submit" onClick={(e) => createGroup(e)}>CREATE</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default CreateMachine