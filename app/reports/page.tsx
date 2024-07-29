import React from 'react'
import CategoryHeader from './components/CategoryHeader'
import HeaderFacts from './components/HeaderFacts'
import BodySection from './components/BodySection'
import ReportSearch from './components/ReportSearch'

const page = () => {
  return (
    <div className='bg-gray-50'>
      <CategoryHeader />
      <HeaderFacts />
      <ReportSearch/>
      <BodySection />
    </div>
  );
}

export default page