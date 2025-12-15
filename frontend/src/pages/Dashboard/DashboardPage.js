import React from 'react'
import { Link } from 'react-router-dom'
function DashboardPage() {
  return (
    <div>
      <h2>Dashboard</h2>
      <p>Welcome! This is your dashboard.</p>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </div>
  )
}

export default DashboardPage
