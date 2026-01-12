
// import Header from '../src/components/Header';

// function App() {
  
//   return (
//     <>
//       <div>
//         <Header/>
//       </div>
//     </>
//   )
// }

// export default App;


// import { Routes, Route } from 'react-router-dom'
// import Header from './components/Header'
// import Home from './pages/Home'
// import Login from './pages/Login'

// function App() {
//   return (
//     <>
//       {/* Always visible */}
//       <Header />

//       {/* Page content changes here */}
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/login" element={<Login />} />
//       </Routes>
//     </>
//   )
// }

// export default App


import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import UpdateDetails from './pages/ClientUpdateDetails'
import UploadDocuments from './pages/UploadDocuments'

function App() {
  return (
    <>
      {/* Always visible */}
      <Header />

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/update-details" element={<UpdateDetails />} />
        <Route path="/upload-documents" element={<UploadDocuments />} />
      </Routes>
    </>
  )
}

export default App
