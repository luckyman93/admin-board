import React from 'react'
import { Link } from 'react-router-dom';

//images start
import loginIcon from '../assets/images/login.png'
//images end

const AppBreadcrumb = (props) =>  {

    const arrTitleInfo = [
        { childName:'CreateMachine', title:'MACHINE SETTINGS / PROFILE CREATION'},
    ]

    const getTilteByChild = () => {
        const t = arrTitleInfo.map((info)=>{
            if (info.childName === props.subChild) return info.title
        })
        return t[0]
    }

    const title = getTilteByChild()

  return (
    <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top">
        <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
            <i className="fa fa-bars"></i>
        </button>

        <div className="heading">
            <h2>{title}</h2>
        </div>

        <ul className="navbar-nav ml-auto">
            <li className="nav-item dropdown no-arrow">
                <Link className="nav-link dropdown-toggle" to={'/'} id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <img className="img-profile rounded-circle" src={loginIcon} />
                </Link>
            </li>
        </ul>
    </nav>
  )
}

export default AppBreadcrumb
