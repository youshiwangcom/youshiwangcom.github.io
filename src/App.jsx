import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import AboutMe from './components/AboutMe'
import Header from './components/Header'
import MainContent from './components/MainContent'
import ProjectDetail from './components/ProjectDetail'
import WelcomeImages from './components/WelcomeImages'
import siteConfig from './site-config.js'

function App() {
  return (
    <Router>
      <div className="app">
        <div className="app-layout">
          <aside className="sidebar">
            <Header site={siteConfig.site} />
            <MainContent site={siteConfig.site} projects={siteConfig.projects} />
          </aside>
          <main className="content-area">
            <Routes>
              <Route 
                path="/" 
                element={<div className="welcome-content">
                  <h1>{siteConfig.site.subtitle}</h1>
                  <p>{siteConfig.site.description}</p>
                  <p>{siteConfig.site.interview}</p>
                  <WelcomeImages images={siteConfig.site.welcomeImages} />
                </div>} 
              />
              <Route 
                path="/project/:projectId" 
                element={<ProjectDetail projects={siteConfig.projects} />} 
              />
              <Route 
                path="/about" 
                element={<AboutMe aboutData={siteConfig.site.about} />} 
              />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  )
}

export default App