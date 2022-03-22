import React, { useEffect, useRef, useState } from 'react'
import './dataItem.css'

const DataItem = ({
    index,
    userID,
    username,
    password,
    email,
    age,
    gender,
    birthday,
}) => {
    return (
        <tr className="item">
            <td className="itemInfo">{index}</td>
            <td className="itemInfo">{userID}</td>
            <td className="itemInfo">{username}</td>
            <td className="itemInfo">{password}</td>
            <td className="itemInfo">{email}</td>
            <td className="itemInfo">{age}</td>
            <td className="itemInfo">{gender}</td>
            <td className="itemInfo">{birthday}</td>
        </tr>
    )
}

export default DataItem
