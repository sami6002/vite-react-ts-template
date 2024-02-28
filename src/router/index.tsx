// import React, { lazy } from 'react'
import { createBrowserRouter } from 'react-router-dom'

import Dashboard from '../pages/Dashboard'
import PageLayout from '../layout'

// 懒加载
// const Dashboard = lazy(() => import("../pages/Dashboard"))

// const withCommonSuspense = (children:JSX.Element) =>(
//     <React.Suspense fallback={<div>Loading······</div>}>
//         {children}
//     </React.Suspense>
// )

const router = createBrowserRouter([
    {
        path: "/",
        element: <PageLayout />,
        children: [
            {
                index: true,
                element: <Dashboard />,
                // element: withCommonSuspense(<Dashboard />),
            }
        ]
    },
])

export default router