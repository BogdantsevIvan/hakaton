import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form from './components/firstForm'

export const App = () => {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Form />}>

        </Route>
      </Routes>
    </BrowserRouter>
  )
}
export default App