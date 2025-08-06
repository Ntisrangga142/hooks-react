import { BrowserRouter, Routes, Route } from 'react-router'
import Todo from './components/pages/Todo.jsx'
import ECommerce from './components/pages/ECommerce.jsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<ECommerce />} />
        <Route path="/todo" element={<Todo />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
