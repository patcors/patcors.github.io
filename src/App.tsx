import './App.css'
import confetti from "canvas-confetti"

function App() {
  
  const date = new Date()
  const isAmeliasBirthday = date.getDate() == 13 && date.getMonth() == 9
  return (
    <>
      <div onClick={() => confetti()}>
          <img src="/amelia.jpg" className="logo amelia" alt="Amelia Sucks" />
      </div>
      {isAmeliasBirthday ? <div><h1>AMELIA DOESNT SUCK</h1><h3>Happy Birthday Amelia!</h3></div>: <h1>AMELIA SUCKS</h1>}
      
    </>
  )
}

export default App
