import { Route, BrowserRouter, Routes } from 'react-router-dom'
import { Campaigns, Form, Home } from './components'
import styles from './App.module.scss'

const App = () => {
  return (
    <BrowserRouter>
      <main>
        <section className={[styles['section'], styles['container']].join(' ')}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/campaigns' element={<Campaigns />} />
            <Route path='/form' element={<Form />} />
          </Routes>
        </section>
      </main>
    </BrowserRouter>
  )
}

export default App
