import React from 'react'
// import FindCoder from './Components/FindCoder'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
// import Explore from './Components/Explore'
// import Hire from './Components/Hire'
// import Dev from './Components/Dev'
// import Challenges from './Components/Challenges'
import Home from './CRUD/Home'
import CreateUsers from './CRUD/CreateUsers'
import Users from './CRUD/Users'
import EditPage from './CRUD/EditPage'
const App = () => {
  return (
    <div>
      {/* <BrowserRouter>
      <FindCoder/>
      <Routes>

        <Route element={<Explore/>} path='/explore'/>
        <Route element={<Hire/>} path='/hire'/>
        <Route element={<Dev/>} path='/dev'/>
        <Route element={<Challenges/>} path='/challenges'/>

      </Routes>
      </BrowserRouter> */}

      <BrowserRouter>
      <Home/>
      <Routes>
        <Route element={<CreateUsers/>} path='/createusers'/>
        <Route element={<Users/>} path='/users'/>
        <Route element={<EditPage/>}path='/editpage/:id'/>
      </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App