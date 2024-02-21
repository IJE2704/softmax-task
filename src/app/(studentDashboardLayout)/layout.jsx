import Show from '@/components/Show/Show';
import StudentDashBoardHeader from '@/components/StudentDashBoard/StudentDashBoardHeader';
import StudentDashboardMenu from '@/components/StudentDashBoard/StudentDashboardMenu';
import React, { Children } from 'react';

const layout = ({children}) => {
  return (
    <div className='grid grid-cols-4 gap-5 h-screen'>
      <div className='col-span-1'>
      <h1><StudentDashboardMenu></StudentDashboardMenu></h1>
      </div>
      <div className='col-span-3 grid grid-rows-7'>
      <div className='row-span-1'>
        <StudentDashBoardHeader></StudentDashBoardHeader>
      </div>
      <div className='row-span-6 '>
        {children}
      </div>
      </div>
    </div>
  );
};

export default layout;