import './App.css'
import DataList from './components/dataList/DataList'
import Navbar from './components/navbar/Navbar'
import Workplace from './components/workplace/Workplace'
import { BrowserRouter } from 'react-router-dom'

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Navbar />
                <Workplace />
                <DataList />
            </div>
        </BrowserRouter>
    )
}

export default App
