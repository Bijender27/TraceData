import React from 'react'
import ReportFilter from './ReportFilter';
import ReportList from './ReportList';

const BodySection = () => {
  return (
    <div >
      <div className="max-w-[1200px] m-auto">
        <div className="flex gap-5">
          <div className="w-1/4">
          <ReportFilter/>
          </div>
          <div className="flex-1">
            <ReportList/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BodySection