import React, { FC } from 'react'
import { Outlet } from 'react-router-dom'

const QuestionLayout: FC = () => {
  return (
    <div>
      <div>问卷编辑/统计 Layout</div>
      <div>
        <Outlet />
      </div>
    </div>
  )
}

export default QuestionLayout
