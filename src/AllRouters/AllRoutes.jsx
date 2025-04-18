import React from 'react'
import Home from '../Pages/Home'
import { Route, Routes } from 'react-router-dom'
import RiceProteinCard from '../Components/RiceProteinCard'
import StarizoStarchCard from '../Components/StarizoStarchCard'
import ClarifiedSyrupSection from '../Components/ClarifiedSyrupSection'
import IndustrySolutionsSection from '../Components/IndustrySolutionsSection'
import MaltoExtrin from '../Components/MaltoExtrin'
import HighMaltoseRiceSyrupSection from '../Components/HighMaltoseRiceSyrupSection'
import NotFound from '../Components/NotFound'

const AllRoutes = () => {
  return (
    <div>
      <Routes >
        <Route path='/' element={<Home />} />
        <Route path='/RiceProteinCard' element={<RiceProteinCard />} />
        <Route path='/StarizoStarchCard' element={<StarizoStarchCard />} />
        <Route path='/ClarifiedSyrupSection' element={<ClarifiedSyrupSection />} />
        <Route path='/IndustrySolutionsSection' element={<IndustrySolutionsSection />} />
        <Route path='/MaltoExtrin' element={<MaltoExtrin />} />
        <Route path='/HighMaltoseRiceSyrupSection' element={<HighMaltoseRiceSyrupSection />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
          </div>
  )
}

export default AllRoutes