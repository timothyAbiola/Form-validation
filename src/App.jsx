// A functional react component, a function, that rtruns JSX

import React from 'react'
import { Routes, Route} from 'react-router-dom'
import Index from './components';
import FormikForm from './components/FormikForm';


const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<FormikForm />} />
        <Route path="form" element={<Index />} />
      </Routes>
    </>
  );
}

export default App 