import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { updateState, jsonSelector } from '../../app/slice/jsonSlice'
import './textArea.css'

const TextArea = ({ isScreen }) => {
    const dispatch = useDispatch()
    const json = useSelector(jsonSelector)
    console.log(json)

    const [content, setContent] = useState('')

    const handleChangeContent = event => {
        setContent(event.target.value)
    }

    const handleSubmitContent = event => {
        event.preventDefault()
        const array = content.split('###')
        dispatch(
            updateState({
                feature: array[0].trim(),
                request: JSON.parse(array[1]),
            })
        )
    }

    return (
        <form onSubmit={handleSubmitContent} className="textAreaForm">
            {!isScreen ? (
                <textarea
                    onChange={handleChangeContent}
                    value={content}
                    name="textAreaHandleData"
                    id="textAreaHandleData"
                    cols="50"
                    rows="30"
                ></textarea>
            ) : (
                <textarea
                    value={JSON.stringify(json.response, null, 2)}
                    name="textAreaHandleData"
                    id="textAreaHandleData"
                    disabled
                    cols="50"
                    rows="30"
                ></textarea>
            )}{' '}
            <input disabled={isScreen} type="submit" className="submitButton" />
        </form>
    )
}

export default TextArea
