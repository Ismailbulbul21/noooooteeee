import { Navigate, Route, Routes } from 'react-router-dom'
import DataDeletion from './pages/delete'
import PrivacyPolicy from './pages/privacy'
import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<DataDeletion />} />
      <Route path="/delete-account" element={<DataDeletion />} />
      <Route path="/privacy" element={<PrivacyPolicy />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App
