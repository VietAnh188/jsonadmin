import React from 'react'
import './navbar.css'
import HttpButton from '../httpButton/HttpButton'
import { httpButtons } from '../../data'
import { Link } from 'react-router-dom'
import { resetState } from '../../app/slice/jsonSlice'
import { useDispatch } from 'react-redux'

const Navbar = () => {
    const dispatch = useDispatch()

    const handleReset = () => {
        alert('State has been reseted')
        dispatch(resetState())
    }

    return (
        <div className="navbar">
            <div className="navbarWrapper">
                {httpButtons.map(button => (
                    <Link key={button.id} to={`/${button.name}`}>
                        <HttpButton
                            name={button.name.toUpperCase()}
                            api={button.api}
                        />
                    </Link>
                ))}
                <button className="resetButton" onClick={handleReset}>
                    Reset
                </button>
            </div>
        </div>
    )
}

export default Navbar
