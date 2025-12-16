import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/Home/HomePage'
import LoginPage from './pages/Login/LoginPage'
import RegisterPage from './pages/Register/RegisterPage'
import DashboardPage from './pages/Dashboard/DashboardPage'
import DashboardMain from './pages/Dashboard/DashboardMain'
import QuickPage from './pages/Dashboard/QuickPage'
import SettingsPage from './pages/Dashboard/SettingsPage'
import GoalPage from './pages/Dashboard/GoalPage'
import AnalyticsPage from './pages/Dashboard/AnalyticsPage'
import TaskListPage from './pages/Dashboard/TaskListPage'
import TaskForms from './pages/Dashboard/TaskForms'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/dashboard" element={<DashboardMain />}>
            <Route index element={<DashboardPage />} />
            {/* <Route path="quick" element={<QuickPage />} /> */}
            <Route path="settings" element={<SettingsPage />} />
            <Route path="goals" element={<GoalPage />} />
            <Route path="analytics" element={<AnalyticsPage />} />
            <Route path="tasks" element={<TaskListPage />} />
            {/* <Route path="task" element={<TaskForms />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
