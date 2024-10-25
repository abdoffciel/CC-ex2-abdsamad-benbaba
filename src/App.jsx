import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import  Home from './components/Home'
import  Navbar from './components/Navbar'
import View  from './components/View'
import AddEdit  from './components/AddEdit'
import { Provider } from 'react-redux'
import store from './redux/store'



const App = () => {
    return (
        <div>
            <Provider store={store}>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/view/:id" element={<View />} />
                    <Route path="/edit/:id" element={<AddEdit />} />
                    <Route path="/add" element={<AddEdit />} />       
                </Routes>
            </Router>
            </Provider>
        </div>
    )
}

export default App