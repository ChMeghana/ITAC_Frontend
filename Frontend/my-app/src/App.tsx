import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Dashboard from './pages/Dashboard'
import Inbox from './pages/Inbox'
import UpdateDetails from './pages/ClientUpdateDetails'
import UploadDocuments from './pages/UploadDocuments'
import DashboardLayout from './layouts/DashboardLayout' // Import the new layout

function App() {
  return (
    <>
      {/* Header is always visible at the top */}
      <Header />

      <Routes>
        {/* PUBLIC ROUTES (Full Width) */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* DASHBOARD ROUTES (With Sidebar) */}
        {/* We wrap these inside the Layout route */}
        <Route element={<DashboardLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/inbox" element={<Inbox />} />
          <Route path="/update-details" element={<UpdateDetails />} />
          <Route path="/upload-documents" element={<UploadDocuments />} />
          {/* You can add more sidebar pages here later */}
        </Route>
      </Routes>
    </>
  )
}

export default App