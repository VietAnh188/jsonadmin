import React, { useEffect, useState } from 'react'
import DataItem from '../dataItem/DataItem'
import './dataList.css'
import { jsonSelector } from '../../app/slice/jsonSlice'
import { useSelector } from 'react-redux'
import axios from 'axios'

const DataList = () => {
    const { response } = useSelector(jsonSelector)

    const [list, setList] = useState([])

    useEffect(() => {
        const fetchAll = async () => {
            const res = await axios.get('get/getaccounts')
            setList([...res.data])
        }
        fetchAll()
    }, [response])

    return (
        <div className="datalist">
            <div className="datalistWrapper">
                <table className="datalistTable">
                    <thead className="datalistHeader">
                        <tr>
                            <th>No.</th>
                            <th>ID</th>
                            <th>Username</th>
                            <th>Password</th>
                            <th>Email</th>
                            <th>Age</th>
                            <th>Gender</th>
                            <th>Birthday</th>
                        </tr>
                    </thead>
                    <tbody className="datalistBody">
                        {list
                            .map((item, index) => (
                                <DataItem
                                    key={item._id}
                                    userID={item._id}
                                    index={list.length - index}
                                    username={item.username}
                                    password={item.password}
                                    email={item.email}
                                    age={item.age}
                                    gender={item.gender}
                                    birthday={item.birthday}
                                />
                            ))
                            .reverse()}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default DataList
