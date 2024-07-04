import Visualizer from './Visualizer.jsx'
import './App.css'

function App() {
  return (
    <div className="app">
      <h1>Bridge Visualizer</h1>
      <p>Press the generate button to generate a river with selected width and depth</p>
      <p>Press Dynamic Programming button visualize the dynamic programming algorithm for this problem.</p>
      <p>Press Brute Force button watch the crazy dance of brute force algorithm which tries out all possible combinations to find the one with minimum total length.</p>
      <Visualizer></Visualizer>
    </div>
  )
}

export default App