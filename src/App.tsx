import './App.css'
import confetti from "canvas-confetti"

function App() {
  

  return (
    <>
      <div onClick={() => confetti()}>
          <img src="/amelia.jpg" className="logo amelia" alt="Amelia Sucks" />
      </div>
      <h1>AMELIA SUCKS</h1>
    </>
  )
}

export default App
