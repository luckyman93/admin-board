import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getGroupList } from '../reducers/createMachine/reducer'
import { 
    getAuth,
    getIdToken,
    onAuthStateChanged,
} from 'firebase/auth'
import { Spin } from 'antd';

const CreateMachine = () =>  {

    const dispatch = useDispatch()
    const { isLoading, arrGroupList } = useSelector(state => state.Machine)
    let navigate = useNavigate()

    useEffect(() => {
        const authentication = getAuth()
        onAuthStateChanged(authentication, async (user) => {
            if (user) {
                const token = await getIdToken(user)
                dispatch(getGroupList(token))
            }
        })  
    }, [])

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
                        <Spin spinning = {isLoading}>
                            <select defaultValue={0} onChange={(e)=> console.log(e.target.value)}>
                                <option value={0}>Select Group</option>
                                {
                                    arrGroupList.map((info, i) => (
                                        <option value={info.groupId} key = {i}>{info.groupId} - {info.groupName}</option>
                                    ))
                                }
                            </select>
                            <button type="submit" onClick={(e) => createGroup(e)}>CREATE</button>
                        </Spin>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default CreateMachine