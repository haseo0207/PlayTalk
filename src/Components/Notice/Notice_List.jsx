import React from 'react'
import "./Notice_List.css"
import {handleContentsClick} from "../../Utils/ContentsClick";
import { CgProfile } from "react-icons/cg";
import { FaRegEye } from "react-icons/fa6";
const Notice_List = ({ noticelist }) => {
    return (
        <li className="notice-item" onClick={() => handleContentsClick(noticelist)}>
            <div className="info-l">
                <span className="listname">
                    {noticelist.title}
                </span>
                <span className="listtime">
                    {noticelist.time}
                </span>

            </div>
            <div className="info-r">
                <span className='listwirte'>
                    <CgProfile className = "profileicon"/>
                    {noticelist.name}
                </span>
                <span className='listview'>
                    <FaRegEye className = "viewicon"/>
                    {noticelist.view}
                </span>


            </div>
        </li>
    )
}

export default Notice_List