import './App.css'
import { FarmaciaProvider } from './context/FarmaciaContext'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'


function App() {

  return (
    <>
      <div className='text-gray-400 bg-gray-900 body-font'>
        <BrowserRouter>
          <FarmaciaProvider>
            <Router />
          </FarmaciaProvider>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
