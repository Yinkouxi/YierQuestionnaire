import React, { FC } from 'react'
import { Outlet } from 'react-router-dom'

const MainLayout: FC = () => {
  return (
    <div>
      <div>Header区域</div>
      <div>
        <Outlet />
      </div>
      <div>Footer区域</div>
    </div>
  )
}

export default MainLayout
