import React from 'react'
import { createBrowserRouter, Navigate } from 'react-router-dom'
import MainLayout from '../layout/MainLayout'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/Register'
import NotFound from '../pages/NotFound'
import Manage from '../pages/Manage'
import ManageList from '../pages/Manage/ManageList'
import ManageStar from '../pages/Manage/ManageStar'
import ManageTrash from '../pages/Manage/ManageTrash'
import Question from '../pages/Question'
import QuestionEdit from '../pages/Question/Edit'
import QuestionStatic from '../pages/Question/Static'
import QuestionLayout from '../layout/QuestionLayout'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'home',
        element: <Navigate to="/" />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register />,
      },
      {
        path: 'manage',
        element: <Manage />,
        children: [
          {
            path: 'list',
            element: <ManageList />,
          },
          {
            path: 'star',
            element: <ManageStar />,
          },
          {
            path: 'trash',
            element: <ManageTrash />,
          },
        ],
      },
    ],
  },
  {
    path: 'question',
    element: <QuestionLayout />,
    children: [
      {
        path: 'edit/:id',
        element: <QuestionEdit />,
      },
      {
        path: 'static/:id',
        element: <QuestionStatic />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
])

export default router
