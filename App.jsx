import './App.css'
// 1. Import the component
import VideoPlayer from './components/VideoPlayer'

function App() {
  return (
    <div className="app">
      <h1>My Video App</h1>
      {/* 2. Use the component here */}
      <VideoPlayer />
    </div>
  )
}

export default App