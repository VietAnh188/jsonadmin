import React from 'react'
import axios from 'axios'
import { jsonSelector, updateState } from '../../app/slice/jsonSlice'
import { useSelector, useDispatch } from 'react-redux'
import './httpButton.css'

const HttpButton = ({ name, api }) => {
    const dispatch = useDispatch()
    const { feature, request } = useSelector(jsonSelector)

    const handleClick = async event => {
        event.preventDefault()
        try {
            let res
            if (api === 'post') {
                res = await axios.post(`/post/${feature || ''}`, request)
            }
            if (api === 'get') {
                res = await axios.get(
                    `/get/${feature || ''}/${request.accountId || ''}`
                )
            }
            if (api === 'delete') {
                res = await axios.delete(`/delete/${feature || ''}`, {
                    data: request,
                })
            }
            if (api === 'put') {
                res = await axios.put(`/put/${feature || ''}`, request)
            }
            console.log(res.data)
            alert(`Has been ${feature}`)
            dispatch(updateState({ response: res.data }))
        } catch (error) {
            dispatch(updateState({ response: String(error) }))
        }
    }

    return (
        <button className="httpButton" onClick={handleClick}>
            {name}
        </button>
    )
}

export default HttpButton
